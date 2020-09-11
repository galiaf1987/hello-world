<?

use Bitrix\Main\Application,
	 Bitrix\Main\Config,
	 Bitrix\Main\Loader,
	 Bitrix\Main\Localization\Loc,
	 Bitrix\Main\Type,
	 Bitrix\Currency,
	 Bitrix\Catalog,
	 Api\Export;


Loc::loadMessages(__FILE__);

define('API_EXPORT_LOG', true);

//https://yandex.ru/support/partnermarket/offers.html#offers__why-simplified
Class CApiYamarketExport
{
	protected $_options, $_type, $content, $_last_offers_count, $_last_sections_count,
		 $useCatalog, $useCurrency, $useIblock, $baseCurrency, $obCond, $exportResult;

	public function __construct($options)
	{
		$options['LAST_SECTION_ID'] = 0;
		$options['LAST_ELEMENT_ID'] = 0;

		$this->content = '';

		$this->useIblock   = Loader::includeModule('iblock');
		$this->useCatalog  = Loader::includeModule('catalog');
		$this->useCurrency = Loader::includeModule('currency');

		$this->baseCurrency = 'RUB';
		if($this->useCurrency) {
			$this->baseCurrency = Currency\CurrencyManager::getBaseCurrency();
		}

		if($this->useCatalog) {

			$this->obCond = new CCatalogCondTree();

			if($iblockID = $options['IBLOCK_ID']) {
				//$iblockOffers = CCatalogSku::GetInfoByProductIBlock($iblockID);
				//$iblockOffers = CCatalogSku::GetInfoByOfferIBlock($iblockID);
				$this->_options['IS_CATALOG'] = \CCatalogSku::GetInfoByIBlock($iblockID);
			}
		}


		$this->_type    = Export\Tools::getOfferType($options['TYPE']);
		$this->_options = $options;

		//���� � ������ �����-����� ��� ������, �� ��� ������������ �����
		$curDate    = new Type\DateTime();
		$dateFormat = $this->_type['DATE_FORMAT'] ? trim($this->_type['DATE_FORMAT']) : 'd-m-Y H:i:s';
		$typeDate   = $curDate->format($dateFormat);

		//$this->_options['DATE']          = strftime("%Y-%m-%d %H:%M");
		$this->_options['DATE']          = $typeDate;
		$this->_options['ENCODING']      = SITE_CHARSET;
		$this->_options['FILE_PATH']     = $this->getDocumentRoot() . $options['FILE_PATH'];
		$this->_options['TMP_FILE_PATH'] = $this->setTempBuffer();
		$this->_options['LANGUAGE_ID']   = LANGUAGE_ID;

		$this->_options['WEIGHT_KOEF'] = Config\Option::get('sale', 'weight_koef', 1000, $this->_options['SITE_ID']);
		//$this->_options['WEIGHT_UNIT'] = Config\Option::get('sale', 'weight_unit');

		unset($options, $curDate, $typeDate, $iblockID);
	}

	public function getDocumentRoot()
	{
		return Application::getDocumentRoot();
	}

	public function getLastOffersCount()
	{
		return intval($this->_last_offers_count);
	}

	public function getLastSectionsCount()
	{
		return intval($this->_last_sections_count);
	}

	public function getHandlerPath($fName)
	{
		$files = array(
			 $this->getDocumentRoot() . '/local/php_interface/include/api.export/' . $fName,
			 $this->getDocumentRoot() . '/bitrix/php_interface/include/api.export/' . $fName,
		);

		foreach($files as $file) {
			if(file_exists($file)) {
				return $file;
			}
		}

		return false;
	}


	public function limit()
	{
		$limit = intval($this->_options['STEP_LIMIT']);

		if(!is_set($limit))
			$limit = 500;

		return $limit;
	}

	public function setTempBuffer()
	{
		$tempBuffer = $this->getDocumentRoot() . '/bitrix/tmp/' . substr(basename($this->_options['FILE_PATH']), 0, -4);

		if(file_exists($tempBuffer))
			@unlink($tempBuffer);

		return $tempBuffer;
	}

	public function getTempBuffer()
	{
		return $this->_options['TMP_FILE_PATH'];
	}

	public function getTargetBuffer()
	{
		return $this->_options['FILE_PATH'];
	}

	public function pushTempBuffer()
	{
		$out = fopen($this->getTempBuffer(), 'a+');
		fwrite($out, $this->content);
		fclose($out);

		unset($out, $this->content);
	}

	public function saveXML()
	{
		@rename($this->getTempBuffer(), $this->getTargetBuffer());
	}



	public function writeHeader()
	{
		$profile = $this->getOptions();
		$type    = $this->getType();

		$content = $type['XML_HEADER'];

		//---------- Profile string fields ----------//
		if($profile && $type) {

			foreach($profile as $key => $val) {
				if(is_string($val)) {
					$content = str_replace('#' . $key . '#', $val, $content);
				}
			}

			//---------- #CURRENCIES# ----------//
			if(strpos($content, '#CURRENCIES#') !== false) {
				$CURRENCIES = '';
				if($profile['CURRENCY']) {
					foreach($profile['CURRENCY'] as $ID => $arCurrency) {
						$search  = array('#ID#', '#RATE#', '#PLUS#');
						$replace = array($ID, $arCurrency['RATE'], $arCurrency['PLUS']);

						$CURRENCIES .= "\n\t" . str_replace($search, $replace, $type['XML_CURRENCY']);
					}
				}

				$content = str_replace('#CURRENCIES#', $CURRENCIES . "\n", $content);
			}

			//---------- #CATEGORIES# ----------//
			if(strpos($content, '#CATEGORIES#') !== false) {
				$CATEGORIES = '';
				if($arCategories = $this->getCategories()) {
					foreach($arCategories as $arCategory) {
						$search  = array('#ID#', '#PARENT_ID#', '#NAME#');
						$replace = array(
							 intval($arCategory['ID']),
							 intval($arCategory['IBLOCK_SECTION_ID']),
							 htmlspecialcharsbx($arCategory['NAME']),
						);

						if($arCategory['IBLOCK_SECTION_ID'])
							$CATEGORIES .= "\n\t" . str_replace($search, $replace, $type['XML_CATEGORY_PARENT']);
						else
							$CATEGORIES .= "\n\t" . str_replace($search, $replace, $type['XML_CATEGORY']);
					}
				}

				$content = str_replace('#CATEGORIES#', $CATEGORIES . "\n", $content);
			}


			//---------- #DELIVERY_OPTIONS# ----------//
			if(strpos($content, '#DELIVERY_OPTIONS#') !== false) {
				$delivery = '';
				if($file = $this->getHandlerPath('delivery.php')) {
					require_once $file;
				}

				//���� � ���������� ����� �����, �� ��������� �������� ������
				if(strlen($delivery) == 0) {
					if($arDeliveries = $profile['DELIVERY']) {
						if($arDeliveries['cost']) {
							foreach($arDeliveries['cost'] as $key => $arDelivery) {
								$cost = $arDeliveries['cost'][ $key ];
								$days = $arDeliveries['days'][ $key ];

								$order_before = $arDeliveries['order_before'][ $key ];
								$order_before = ($order_before ? $order_before : '');

								$search  = array('#cost#', '#days#', '#order_before#');
								$replace = array($cost, $days, $order_before);

								$delivery .= "\n\t" . str_replace($search, $replace, $type['XML_DELIVERY_OPTION']);
							}
						}
					}
				}

				$content = str_replace('#DELIVERY_OPTIONS#', $delivery . "\n", $content);
			}
		}//END
		unset($profile, $type, $key, $val, $CURRENCIES, $CATEGORIES, $delivery, $arDeliveries, $arDelivery, $search, $replace, $arCategories, $arCategory, $cost, $days, $order_before);

		$this->content = $content;

		unset($content);
		$this->pushTempBuffer();
	}

	public function writeOffers()
	{
		$arOffers = $this->getOffers();
		$type     = $this->getType();

		foreach($arOffers as $arOffer) {

			$arFields = self::prepareOfferFields($arOffer);

			$content = $type['XML_OFFER'];

			foreach($arFields as $arField) {

				$key = trim($arField['key']);
				$val = $arField['value'];

				//#custom# field prepare
				if($arField['is_custom']) {
					$param_name = $arField['param_name'];
					$param_unit = $arField['param_unit'];
					$param_attr = $arField['param_attr'];

					//������.����
					if($param_name == 'enclosure') {
						if($param_attr) {
							if(is_array($param_attr)) {
								foreach($param_attr as $attr) {
									$val .= "<$key url=\"{$attr['url']}\" type=\"{$attr['type']}\"/>\n\t\t\t";
								}
							}
						}
					}
					//������.������ (�� ���������)
					else {
						if(strlen($val) > 0) {
							if(strlen($param_unit) > 0)
								$val = "<$key name=\"$param_name\" unit=\"$param_unit\">$val</$key>\n\t\t";
							else
								$val = "<$key name=\"$param_name\">$val</$key>\n\t\t";
						}
					}

					$val .= '#custom#';
					$key = 'custom';//!required
				}

				//���������� ������� XML_OFFER
				if(is_array($val)) {
					$strVal = '';
					foreach($val as $v) {
						$strVal .= "<$key>$v</$key>";
					}

					$strKey  = "<$key>#$key#</$key>";
					$content = str_replace($strKey, $strVal, $content);
				}
				elseif($val == '--') {
					//���� ���� ������������
					$content = str_replace('#' . $key . '#', '', $content);
				}
				elseif(strlen($val) > 0) {
					$content = str_replace('#' . $key . '#', $val, $content);
				}
				else {
					//�������� � ����� ������� �� �������
					$content = str_replace('#' . $key . '#', '', $content);

					//������� ������ ���� � ��������� \r, ����� �������� ������ ������ ����� ��������
					$content = preg_replace('#<' . $key . '[^>]*>(.*?)</' . $key . '>#im' . BX_UTF_PCRE_MODIFIER, "\r", $content);

					//������� ������ �������� ���� cbid=""
					$content = preg_replace('#\s\w+\W*\w*=\"\"#im' . BX_UTF_PCRE_MODIFIER, "", $content);
				}
			}

			//�������� ��������� ������ �� �������
			$content = str_replace('#custom#', "\r", $content);

			//������� ������ ������
			$content = preg_replace('/\s*\r+/im' . BX_UTF_PCRE_MODIFIER, "", $content);

			//����� ������� ������ ��������
			$this->content .= "\n\t" . $content;
		}

		$this->content .= "\n";

		unset($type, $arOffers, $arOffer, $content, $arFields, $arField, $key, $val, $strKey, $strVal);

		$this->pushTempBuffer();

		return $this->exportResult;
	}

	public function writeFooter()
	{
		$type          = $this->getType();
		$this->content = $type['XML_FOOTER'];
		$this->pushTempBuffer();

		unset($type);
	}



	protected function getCategories()
	{
		$profile = $this->getOptions();

		$arFilter = array(
			 'IBLOCK_ID'     => $profile['IBLOCK_ID'],
			 'ACTIVE'        => 'Y',
			 'GLOBAL_ACTIVE' => 'Y',
		);

		if($profile['SECTION_ID'])
			$arFilter['=ID'] = $profile['SECTION_ID'];

		$res1 = \CIBlockSection::GetList(
			 array(),
			 $arFilter,
			 false,
			 array('ID', 'NAME', 'IBLOCK_SECTION_ID', 'LEFT_MARGIN', 'RIGHT_MARGIN', 'DEPTH_LEVEL')
		);

		$arSections = array();
		while($arSection = $res1->Fetch()) {
			$arSections[ $arSection['ID'] ] = $arSection;

			$arFilter = array(
				 'ACTIVE'        => 'Y',
				 'IBLOCK_ID'     => $profile['IBLOCK_ID'],
				 '>LEFT_MARGIN'  => $arSection['LEFT_MARGIN'],
				 '<RIGHT_MARGIN' => $arSection['RIGHT_MARGIN'],
				 '>DEPTH_LEVEL'  => $arSection['DEPTH_LEVEL'],
			);
			$res2     = \CIBlockSection::GetList(
				 array('left_margin' => 'asc'),
				 $arFilter,
				 false,
				 array('ID', 'NAME', 'IBLOCK_SECTION_ID')
			);
			while($subSection = $res2->Fetch()) {
				$arSections[ $subSection['ID'] ] = $subSection;
			}
		}


		Export\ProfileTable::update(
			 $profile['ID'],
			 array('TOTAL_SECTIONS' => count($arSections))
		);

		unset($profile, $arFilter, $res1, $res2, $arSection, $subSection);

		return $arSections;
	}

	protected function getOffers()
	{
		$profile = $this->getOptions();

		$items = array();

		$itemsCnt  = 0;
		$offersCnt = 0;

		if($profile['IBLOCK_ID']) {
			$limit = $this->limit();

			$profile['NAV_PARAMS'] = ($limit > 0 ? array('nTopCount' => $limit) : false);

			$params = array(
				 'PROFILE' => $profile,
			);
			$offers = new Export\Offers($params);
			$offers->execute();

			$result = $offers->getResult();

			if($result['ITEMS']) {
				foreach($result['ITEMS'] as $arItem) {
					if($arItem['OFFERS']) {
						foreach($arItem['OFFERS'] as $arOffer) {
							$offersCnt++;

							if($arItem['IBLOCK_SECTION_ID'])
								$arOffer['IBLOCK_SECTION_ID'] = $arItem['IBLOCK_SECTION_ID'];

							if(!$arOffer['PREVIEW_PICTURE'] && $arItem['PREVIEW_PICTURE'])
								$arOffer['PREVIEW_PICTURE'] = $arItem['PREVIEW_PICTURE'];

							if(!$arOffer['DETAIL_PICTURE'] && $arItem['DETAIL_PICTURE'])
								$arOffer['DETAIL_PICTURE'] = $arItem['DETAIL_PICTURE'];

							//��������� ������ � ������
							if($arOffer['ITEM_PRICES']) {
								$items[ $arOffer['ID'] ] = $arOffer;
							}
						}
					}
					else {
						//�� ��������� ��� �������� �������� ����� ��������� ������ ��� ���
						if($this->useCatalog) {
							if($arItem['ITEM_PRICES']) {
								$items[ $arItem['ID'] ] = $arItem;
							}
						}
						else {
							$items[ $arItem['ID'] ] = $arItem;
						}
					}

					$itemsCnt++;
				}
			}

			//ID ���������� ������������ ��������
			$lastID = intval($result['LAST_ELEMENT_ID']);


			//��������� ������� ��� �����
			$this->exportResult = array(
				 'LAST_ITEMS_COUNT'    => intval(count($items)), //����� ������� ������� � �����-����
				 'LAST_ELEMENTS_COUNT' => intval($itemsCnt),     //������� ���� ��������� � �������
				 'LAST_OFFERS_COUNT'   => intval($offersCnt),    //������� ���� �� � �������
				 'LAST_ELEMENT_ID'     => intval($lastID),       //ID ���������� �������� � �������
				 'ALL_ELEMENTS_COUNT'  => intval($result['ALL_ELEMENTS_COUNT']), //������� ���� ��������� � ��������� �� ������� ��� PROGRESS
			);

			//!!!REQUIRED!!!
			$this->_options['LAST_ELEMENT_ID'] = $lastID;
			Export\ProfileTable::update(
				 $profile['ID'],
				 array('LAST_ELEMENT_ID' => $lastID)
			);

			unset($profile, $result, $offers);
		}

		return $items;
	}



	protected function getOptions()
	{
		return $this->_options;
	}

	protected function getType()
	{
		return $this->_type;
	}

	protected function prepareOfferFields($arItem)
	{
		$profile = $this->getOptions();
		$type    = $this->getType();

		$result = array();

		//---------- ���������� ����� �������� ----------//
		if($profile['STOP_WORDS']) {

			if(strlen($arItem['NAME']) > 0)
				$arItem['NAME'] = $this->cutStopWords($arItem['NAME'], $profile['STOP_WORDS']);

			//$arItem['NAME'] = $this->formatName($arItem['NAME']);

			if(strlen($arItem['PREVIEW_TEXT']) > 0) {
				$arItem['PREVIEW_TEXT'] = $this->cutStopWords($arItem['PREVIEW_TEXT'], $profile['STOP_WORDS']);
			}

			if(strlen($arItem['DETAIL_TEXT']) > 0) {
				$arItem['DETAIL_TEXT'] = $this->cutStopWords($arItem['DETAIL_TEXT'], $profile['STOP_WORDS']);
				/*if($arItem['DETAIL_TEXT_TYPE'] == 'html')
					$arItem['DETAIL_TEXT'] = $this->fn_htmlToText($arItem['DETAIL_TEXT']);
				else
					$arItem['DETAIL_TEXT'] = $this->fn_htmlspecialchars($arItem['DETAIL_TEXT']);
				}*/
			}
		}

		if(strlen($arItem['DETAIL_PAGE_URL']) > 0) {
			//$arItem['DETAIL_PAGE_URL'] = $profile['SHOP_URL'] . \CIBlock::ReplaceDetailUrl($arItem['DETAIL_PAGE_URL'], $arItem, true, 'E');
			//$row['DETAIL_PAGE_URL'] = \CIBlock::ReplaceDetailUrl($safeRow['~DETAIL_PAGE_URL'], $safeRow, false, 'E');
			$arItem['DETAIL_PAGE_URL'] = $this->formatUri($profile['SHOP_URL'] . $arItem['DETAIL_PAGE_URL'], $profile['UTM_TAGS']);
		}

		if($arItem['PREVIEW_PICTURE']) {
			$pictureFile = $arItem['PREVIEW_PICTURE'];

			if (strncmp($pictureFile['SRC'], '/', 1) == 0)
				$arItem['PREVIEW_PICTURE'] = $profile['SHOP_URL'] . CHTTP::urnEncode($pictureFile['SRC'], 'utf-8');
			else
				$arItem['PREVIEW_PICTURE'] = $pictureFile['SRC'];

			unset($pictureFile);
			//$arItem['PREVIEW_PICTURE'] = $profile['SHOP_URL'] . $arItem['PREVIEW_PICTURE']['SRC'];
		}

		if($arItem['DETAIL_PICTURE']) {
			$pictureFile = $arItem['DETAIL_PICTURE'];

			if (strncmp($pictureFile['SRC'], '/', 1) == 0)
				$arItem['DETAIL_PICTURE'] = $profile['SHOP_URL'] . CHTTP::urnEncode($pictureFile['SRC'], 'utf-8');
			else
				$arItem['DETAIL_PICTURE'] = $pictureFile['SRC'];

			unset($pictureFile);
			//$arItem['DETAIL_PICTURE'] = $profile['SHOP_URL'] . $arItem['DETAIL_PICTURE']['SRC'];
		}

		if($arItem['CATALOG_WEIGHT'] && $profile['WEIGHT_KOEF']) {
			$arItem['CATALOG_WEIGHT'] = roundEx(doubleval($arItem['CATALOG_WEIGHT'] / $profile['WEIGHT_KOEF']), SALE_WEIGHT_PRECISION);
		}

		/**************************************************
		 * ���� ������������
		 **************************************************/
		if($profile['FIELDS']) {
			foreach($profile['FIELDS'] as $i => $arField) {

				//���� ������� ���������� �������� ����
				$userFunc = '';
				if($arField['USE_FUNCTION'] == 'Y' && $arField['FUNCTION']) {
					$userFunc = trim($arField['FUNCTION']);

					//Format: ApiYaDzen::getDetailText || Api\Export\Ya\Dzen::getDetailText
					preg_match('/([a-z_\\\]+)::([a-z_]+)/is', $userFunc, $matches);

					if($matches[1] && $matches[2] && class_exists($matches[1], true) && method_exists($matches[1], $matches[2])) {
						$userFunc = $userFunc;
					}
					elseif(method_exists(__CLASS__, $userFunc)) {
						$userFunc = __CLASS__ . '::' . $userFunc;
					}
					elseif(!function_exists($arField['FUNCTION'])) {
						$userFunc = '';
					}
				}

				$isCustom = $arField['IS_CUSTOM'];

				$textLength = ($arField['USE_TEXT_LENGTH'] == 'Y' ? intval($arField['TEXT_LENGTH']) : 0);

				$propName = '';
				$propUnit = trim($arField['UNIT_VALUE']);
				$propAttr = array();

				$key   = $arField['CODE'];
				$value = null;


				/**************************************************
				 * ���� ����
				 **************************************************/
				foreach($arField['TYPE'] as $typeKey => $typeId) {
					$typeValue = $arField['VALUE'][ $typeKey ];

					//---------- ���� ----------//
					if($typeId == 'FIELD' || $typeId == 'OFFER_FIELD') {
						$value = $arItem[ $typeValue ];
					}

					//---------- �������� ----------//
					if($typeId == 'PROPERTY' || $typeId == 'OFFER_PROPERTY') {
						if($arProp = $arItem['PROPERTIES'][ $typeValue ]) {
							//$propName  = ($arProp['~NAME'] ? $arProp['~NAME'] : $arProp['NAME']);
							$propName  = $this->fn_htmlspecialchars($arProp['NAME']);
							$propValue = ($arProp['USER_TYPE'] && $arProp['DISPLAY_VALUE'] ? $arProp['DISPLAY_VALUE'] : $arProp['~VALUE']); //DISPLAY_VALUE
							$value     = (is_array($propValue) ? implode(' / ', $propValue) : $propValue);

							//��������� � ������� unit="" ���� <param> �������� �� �������� �������� ��������, �� �� �������� ��������
							if($isCustom && strlen($propUnit) == 0) {
								$propUnit = trim(is_array($arProp['DESCRIPTION']) ? $arProp['DESCRIPTION'][0] : $arProp['DESCRIPTION']);
							}
						}
					}

					//---------- ���� �������� ----------//
					if($typeId == 'PRODUCT') {
						$value = $arItem['PRODUCT'][ $typeValue ];

						if(in_array($typeValue, array('AVAILABLE', 'SUBSCRIPTION', 'VAT_INCLUDED', 'QUANTITY_TRACE', 'CAN_BUY_ZERO'))) {
							$value = ($value == 'Y' ? 'true' : 'false');
						}
					}

					//---------- ������ ----------//
					if($typeId == 'CURRENCY') {
						$value = ($typeValue ? $typeValue : $this->baseCurrency);
					}

					//---------- ���� ----------//
					if($typeId == 'PRICE') {
						$price = $arItem['ITEM_PRICES'][ $arItem['ITEM_PRICE_SELECTED'] ];
						//$measureRatio = $price['MIN_QUANTITY'];

						if($typeValue == 'OLD_PRICE') {
							if($price['RATIO_PRICE'] < $price['RATIO_BASE_PRICE'])
								$typeValue = 'RATIO_BASE_PRICE';
							else
								$typeValue = '';
						}

						$value = strlen($typeValue) > 0 ? $price[ $typeValue ] : '';
					}

					//---------- ����-���� ----------//
					if($typeId == 'IPROPERTY') {
						if($arItem['IPROPERTY_VALUES'])
							$value = $arItem['IPROPERTY_VALUES'][ $typeValue ];
					}

					//---------- ���� ----------//
					if($arField['USE_DATE_FORMAT'] == 'Y' && strlen($value) > 0) {
						if($dateFormat = trim($arField['DATE_FORMAT_VALUE'])) {
							$date    = new Type\DateTime($value);
							$newDate = $date->format($dateFormat);
							$value   = $newDate;
							unset($date, $newDate);
						}
					}
				}


				///////////////////////////////////////////////////
				/// ������.���� ���������� ���� <enclosure>
				///////////////////////////////////////////////////
				if($type['CODE'] == 'ya_zen') {
					if($isCustom) {
						$propName = 'enclosure';
						$propAttr = Api\Export\Ya\Dzen::getDetailMedia($arItem['DETAIL_TEXT'], $arField, $arItem, $profile);
					}
				}



				/**************************************************
				 * ���. ����� ����
				 **************************************************/

				/** ������������ � �������� ���� ������� ����� */
				if($arField['USE_TEXT'] == 'Y') {
					$value = trim($arField['TEXT_VALUE']);
				}


				/** �������� �������� ���� (1|Y|>0|true|��) �� ���������� */
				if($arField['USE_BOOLEAN'] == 'Y') {
					if(is_string($value) && strlen($value) > 0) {
						if(strlen($arField['BOOLEAN_VALUE']) > 0) {
							$expValues = explode('/', trim($arField['BOOLEAN_VALUE']));
						}
						else {
							$expValues = array('true', 'false');
						}

						$valueTrue  = $expValues[0];
						$valueFalse = $expValues[1];

						//� ������� ���� �������� �� ������ �����: PROPERTY_524_VALUE
						if($arField['USE_CONDITIONS'] == 'Y' && $arField['CONDITIONS']) {
							$obCond = $this->obCond;
							if($obCond->Init(BT_COND_MODE_GENERATE, BT_COND_BUILD_CATALOG)) {
								$strEval = $obCond->Generate(
									 $arField['CONDITIONS'],
									 array('FIELD' => '$arItem')
								);

								$value = ($strEval && $strEval != '((1 == 1))' && eval('return ' . $strEval . ';') == 1 ? $valueTrue : $valueFalse);
							}
						}
						else {
							$value = ($value == 'Y' || $value == 1 || $value > 0 || $value == 'true' || ToLower($value) == Loc::getMessage('AYI_YES_VALUE') ? $valueTrue : $valueFalse);
						}

						unset($expValues, $valueTrue, $valueFalse);
					}
				}



				/**************************************************
				 * ��������� ��� ������ �����
				 **************************************************/

				if(is_array($value)) {
					foreach($value as $val) {

						if($userFunc)
							$val = call_user_func_array($userFunc, array($val, $arField, $arItem, $profile));
						else
							$val = htmlspecialcharsbx($val);

						if($textLength)
							$val = substr($val, 0, $textLength);

						$result[ $i ][] = array(
							 'key'        => $key,
							 'value'      => $val,
							 'is_custom'  => $isCustom,
							 'param_name' => $propName,
							 'param_unit' => $propUnit,
							 'param_attr' => $propAttr,
						);
					}
				}
				else {
					if($arField['REQUIRED'] == 'Y' && strlen($value) == 0) {
						$result[ $i ] = array(
							 'key'        => $key,
							 'value'      => '--',
							 'is_custom'  => $isCustom,
							 'param_name' => $propName,
							 'param_unit' => $propUnit,
							 'param_attr' => $propAttr,
						);
					}
					else {

						if($userFunc)
							$value = call_user_func_array($userFunc, array($value, $arField, $arItem, $profile));
						else
							$value = htmlspecialcharsbx($value);

						if($textLength)
							$value = substr($value, 0, $textLength);

						$result[ $i ] = array(
							 'key'        => $key,
							 'value'      => $value,
							 'is_custom'  => $isCustom,
							 'param_name' => $propName,
							 'param_unit' => $propUnit,
							 'param_attr' => $propAttr,
						);
					}
				}
			}
			unset($userFunc, $isCustom, $textLength, $arProp, $propName, $propUnit, $propAttr, $propValue, $key, $value, $i, $arField, $profile, $arItem);
		}

		return $result;
	}

	protected function formatUri($url, $tags = array())
	{
		if($tags && $tags['NAME']) {
			$params = array();
			foreach($tags['NAME'] as $pKey => $pName) {
				$params[] = $pName . '=' . $tags['VALUE'][ $pKey ];
			}

			$url .= (strpos($url, '?') === false ? '?' : '&') . implode('&', $params);
		}

		return $url;
	}


	/////////////////////////////////////////////////////////
	/// Custom protected functions
	/////////////////////////////////////////////////////////

	/** C���-����� */
	protected function cutStopWords($str, $words)
	{
		if($words) {
			//$str = preg_replace('/' . preg_quote($words) . '/im' . BX_UTF_PCRE_MODIFIER, '', $str); //imu
			$str = preg_replace('/' . trim($words) . '/im' . BX_UTF_PCRE_MODIFIER, '', $str); //imu
			unset($words);
		}

		return $str;
	}


	/////////////////////////////////////////////////////////
	/// Profile public functions for fields
	/////////////////////////////////////////////////////////

	public function fn_htmlspecialchars($str, $arField = array(), $arItem = array(), $profile = array())
	{
		$str = trim($str);

		static $search = array("&", "\"", "&#171;", "&#187;", ">", "<", "'");
		static $replace = array("&amp;", "&quot;", "&quot;", "&quot;", "&gt;", "&lt;", "&apos;");

		return str_replace($search, $replace, $str);
	}

	public function fn_htmlToText($desc, $arField = array(), $arItem = array(), $profile = array(), $length = 3000)
	{
		if(!$desc)
			return '';

		$profile = $this->getOptions();

		$arDelete = array();

		//������ ����-�����
		/*if($profile['STOP_WORDS']) {
			$arDelete[] = "/" . $profile['STOP_WORDS'] . "/im" . BX_UTF_PCRE_MODIFIER;
		}*/

		$desc = HTMLToTxt($desc, $profile['SHOP_URL'], $arDelete, $length);
		unset($profile, $arDelete);

		//������ ��� ������ ������
		//$desc = trim(preg_replace('/\n\r/ims', "", strip_tags($desc)));

		//������ ������� ������� ������
		//$desc = trim(preg_replace('/^\s+/ims', "", strip_tags($desc)));

		/*
		//������ ��� ������ � html-����
		$desc = htmlspecialcharsBack($desc);
		$desc = preg_replace('/<[\/\!]*?[^<>]*?>/imu', ' ', $desc);
		$desc = preg_replace('/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:\/~\+#]*[\w\-\@?^=%&amp;\/~\+#])/imu', '', $desc);

		//return ToLower($desc);
		*/

		return htmlspecialcharsbx($desc);
	}

	/**
	 * ������ html-����� � <![CDATA[
	 *
	 * @param     $desc
	 * @param int $length
	 *
	 * @return mixed|string
	 */
	public function fn_htmlToCDATA($desc, $arField = array(), $arItem = array(), $profile = array(), $length = 3000)
	{
		if(!$desc)
			return '';

		//������ ������� ������� ������
		$desc = preg_replace('/^\s+/im' . BX_UTF_PCRE_MODIFIER, "", $desc);

		//������ ��� ������ � ������ ����
		$desc = strip_tags($desc);
		$desc = preg_replace('/<[\/\!]*?[^<>]*?>/im' . BX_UTF_PCRE_MODIFIER, ' ', $desc);
		//$desc = preg_replace('/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:\/~\+#]*[\w\-\@?^=%&amp;\/~\+#])/im'. BX_UTF_PCRE_MODIFIER, '', $desc);

		//������ ��� ������ ������
		$desc = preg_replace('/\n\r/im' . BX_UTF_PCRE_MODIFIER, "", $desc);

		//������� �������� ����� �� ��� <br/>
		$desc = preg_replace('/\n/im' . BX_UTF_PCRE_MODIFIER, "<br/>", trim($desc));

		//�������� ��� mbstring_func_overload 2
		if(!ini_get('mbstring.func_overload'))
			$desc = mb_substr($desc, 0, $length);
		else
			$desc = substr($desc, 0, $length);


		if(strlen($desc) > 0)
			$desc = '<![CDATA[' . $desc . ']]>';
		else
			$desc = '';

		return $desc;
	}
}

?>