<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->setFrameMode(true);

if(!$arResult['ITEMS']) return;
?>
	<div class="<?=$arParams['CLASS']?> products-gallery">
	<?if($arParams["TITLE"]):?><div class="title"><?=$arParams["TITLE"]?></div><?endif;?>
	<div class="jcarousel-wrapper">
		<div class="jcarousel <?=$arParams['CAROUSEL_CLASS']?>" <?=$arParams['~CAROUSEL_ATTR']?>>
		<?include __DIR__.'/../light/template.php';?>
		<?/*$intSectionID = $APPLICATION->IncludeComponent(
			'bitrix:catalog.section',
			'light',
			array(
				'IBLOCK_TYPE' => $arParams['IBLOCK_TYPE'],
				'IBLOCK_ID' => $arParams['IBLOCK_ID'],
				'ELEMENT_SORT_FIELD' => $arParams['ELEMENT_SORT_FIELD'],
				'ELEMENT_SORT_ORDER' => $arParams['ELEMENT_SORT_ORDER'],
				'ELEMENT_SORT_FIELD2' => $arParams['ELEMENT_SORT_FIELD2'],
				'ELEMENT_SORT_ORDER2' => $arParams['ELEMENT_SORT_ORDER2'],
				'PROPERTY_CODE' => $arParams['LIST_PROPERTY_CODE'],
				'META_KEYWORDS' => $arParams['LIST_META_KEYWORDS'],
				'META_DESCRIPTION' => $arParams['LIST_META_DESCRIPTION'],
				'BROWSER_TITLE' => $arParams['LIST_BROWSER_TITLE'],
				'INCLUDE_SUBSECTIONS' => $arParams['INCLUDE_SUBSECTIONS'],
				'BASKET_URL' => $arParams['BASKET_URL'],
				'ACTION_VARIABLE' => $arParams['ACTION_VARIABLE'],
				'PRODUCT_ID_VARIABLE' => $arParams['PRODUCT_ID_VARIABLE'],
				'SECTION_ID_VARIABLE' => $arParams['SECTION_ID_VARIABLE'],
				'PRODUCT_QUANTITY_VARIABLE' => $arParams['PRODUCT_QUANTITY_VARIABLE'],
				'PRODUCT_PROPS_VARIABLE' => $arParams['PRODUCT_PROPS_VARIABLE'],
				'FILTER_NAME' => 'analogFilter',
				'CACHE_TYPE' => $arParams['CACHE_TYPE'],
				'CACHE_TIME' => $arParams['CACHE_TIME'],
				'CACHE_FILTER' => $arParams['CACHE_FILTER'],
				'CACHE_GROUPS' => $arParams['CACHE_GROUPS'],
				'SET_TITLE' => $arParams['SET_TITLE'],
				'SET_STATUS_404' => $arParams['SET_STATUS_404'],
				'DISPLAY_COMPARE' => $arParams['USE_COMPARE'],
				'PAGE_ELEMENT_COUNT' => $arParams['PAGE_ELEMENT_COUNT'],
				'LINE_ELEMENT_COUNT' => $arParams['LINE_ELEMENT_COUNT'],
				'PRICE_CODE' => $arParams['PRICE_CODE'],
				'USE_PRICE_COUNT' => $arParams['USE_PRICE_COUNT'],
				'SHOW_PRICE_COUNT' => $arParams['SHOW_PRICE_COUNT'],

				'PRICE_VAT_INCLUDE' => $arParams['PRICE_VAT_INCLUDE'],
				'USE_PRODUCT_QUANTITY' => $arParams['USE_PRODUCT_QUANTITY'],
				'ADD_PROPERTIES_TO_BASKET' => (isset($arParams['ADD_PROPERTIES_TO_BASKET']) ? $arParams['ADD_PROPERTIES_TO_BASKET'] : ''),
				'PARTIAL_PRODUCT_PROPERTIES' => (isset($arParams['PARTIAL_PRODUCT_PROPERTIES']) ? $arParams['PARTIAL_PRODUCT_PROPERTIES'] : ''),
				'PRODUCT_PROPERTIES' => $arParams['PRODUCT_PROPERTIES'],

				'DISPLAY_TOP_PAGER' => $arParams['DISPLAY_TOP_PAGER'],
				'DISPLAY_BOTTOM_PAGER' => $arParams['DISPLAY_BOTTOM_PAGER'],
				'PAGER_TITLE' => $arParams['PAGER_TITLE'],
				'PAGER_SHOW_ALWAYS' => $arParams['PAGER_SHOW_ALWAYS'],
				'PAGER_TEMPLATE' => $arParams['PAGER_TEMPLATE'],
				'PAGER_DESC_NUMBERING' => $arParams['PAGER_DESC_NUMBERING'],
				'PAGER_DESC_NUMBERING_CACHE_TIME' => $arParams['PAGER_DESC_NUMBERING_CACHE_TIME'],
				'PAGER_SHOW_ALL' => $arParams['PAGER_SHOW_ALL'],

				'OFFERS_CART_PROPERTIES' => $arParams['OFFERS_CART_PROPERTIES'],
				'OFFERS_FIELD_CODE' => $arParams['LIST_OFFERS_FIELD_CODE'],
				'OFFERS_PROPERTY_CODE' => $arParams['LIST_OFFERS_PROPERTY_CODE'],
				'OFFERS_SORT_FIELD' => $arParams['OFFERS_SORT_FIELD'],
				'OFFERS_SORT_ORDER' => $arParams['OFFERS_SORT_ORDER'],
				'OFFERS_SORT_FIELD2' => $arParams['OFFERS_SORT_FIELD2'],
				'OFFERS_SORT_ORDER2' => $arParams['OFFERS_SORT_ORDER2'],
				'OFFERS_LIMIT' => $arParams['LIST_OFFERS_LIMIT'],

				'SECTION_ID' => $arResult['VARIABLES']['SECTION_ID'],
				'SECTION_CODE' => $arResult['VARIABLES']['SECTION_CODE'],
				'SECTION_URL' => $arResult['FOLDER'].$arResult['URL_TEMPLATES']['section'],
				'DETAIL_URL' => $arResult['FOLDER'].$arResult['URL_TEMPLATES']['element'],
				'CONVERT_CURRENCY' => $arParams['CONVERT_CURRENCY'],
				'CURRENCY_ID' => $arParams['CURRENCY_ID'],
				'HIDE_NOT_AVAILABLE' => $arParams['HIDE_NOT_AVAILABLE'],
				// goPro params
				'PROP_MORE_PHOTO' => $arParams['PROP_MORE_PHOTO'],
				'PROP_ARTICLE' => $arParams['PROP_ARTICLE'],
				'PROP_ACCESSORIES' => $arParams['PROP_ACCESSORIES'],
				'USE_FAVORITE' => $arParams['USE_FAVORITE'],
				'USE_SHARE' => $arParams['USE_SHARE'],
				'SHOW_ERROR_EMPTY_ITEMS' => $arParams['SHOW_ERROR_EMPTY_ITEMS'],
				'PROP_SKU_MORE_PHOTO' => $arParams['PROP_SKU_MORE_PHOTO'],
				'PROP_SKU_ARTICLE' => $arParams['PROP_SKU_ARTICLE'],
				'PROPS_ATTRIBUTES' => $arParams['PROPS_ATTRIBUTES'],
				// store
				'USE_STORE' => $arParams['USE_STORE'],
				'USE_MIN_AMOUNT' => $arParams['USE_MIN_AMOUNT'],
				'MIN_AMOUNT' => $arParams['MIN_AMOUNT'],
				'MAIN_TITLE' => $arParams['MAIN_TITLE'],
				// some...
				'BY_LINK' => 'Y',
				// seo
				"ADD_SECTIONS_CHAIN" => "N",
				"SET_BROWSER_TITLE" => "N",
				"SET_META_KEYWORDS" => "N",
				"SET_META_DESCRIPTION" => "N",
				"ADD_ELEMENT_CHAIN" => "N",
				
				'VIEW' => 'showcase'
			),
			$component,
			array('HIDE_ICONS'=>'Y')
		);*/?>
		</div>
		<a href="#" class="jcarousel-control-prev">&lsaquo;</a>
		<a href="#" class="jcarousel-control-next">&rsaquo;</a>
	</div>
	</div>