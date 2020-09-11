<?
/********************************************************************************
Simple delivery handler. 
It uses fixed delivery price for any location groups. Needs at least one group of locations to be configured.
********************************************************************************/
CModule::IncludeModule("sale");

//IncludeModuleLangFile($_SERVER["DOCUMENT_ROOT"].'/bitrix/modules/sale/delivery/delivery_simple.php');

class DXDeliverySimple
{
	function Init()
	{
		return array(
			/* Basic description */
			"SID" => "dxsimple",
			"NAME" => 'Доставка курьером',
			"DESCRIPTION" => "",
			"DESCRIPTION_INNER" => "Простой обработчик курьерской доставки. Для функционирования необходимо наличие хотя бы одной группы местоположений. При настройке обработчика указывается фиксированная стоимость доставки для каждой группы местоположений. Для того, чтобы группа не участвовала в обработке, оставьте пустым поле стоимости для этой группы.<br /><a href=\"/bitrix/admin/sale_location_group_admin.php?lang=ru\" target=\"_blank\">Редактировать группы местоположений</a>.",
			"BASE_CURRENCY" => COption::GetOptionString("sale", "default_currency", "RUB"),

			"HANDLER" => __FILE__,
			
			/* Handler methods */
			"DBGETSETTINGS" => array("DXDeliverySimple", "GetSettings"),
			"DBSETSETTINGS" => array("DXDeliverySimple", "SetSettings"),
			"GETCONFIG" => array("DXDeliverySimple", "GetConfig"),
			
			"COMPABILITY" => array("DXDeliverySimple", "Compability"),			
			"CALCULATOR" => array("DXDeliverySimple", "Calculate"),			
			
			/* List of delivery profiles */
			"PROFILES" => array(
				"dxsimple" => array(
					"TITLE" => 'доставка',
					"DESCRIPTION" => 'Срок доставки до 3 дней',
					
					"RESTRICTIONS_WEIGHT" => array(0),
					"RESTRICTIONS_SUM" => array(0),
				),
			)
		);
	}
	
	function GetConfig()
	{
		$arConfig = array(
			"CONFIG_GROUPS" => array(
				"all" => 'Стоимость доставки',
			),
			
			"CONFIG" => array(),
		);
		
		$dbLocationGroups = CSaleLocationGroup::GetList();
		while ($arLocationGroup = $dbLocationGroups->Fetch())
		{
			$arConfig["CONFIG"]["price_".$arLocationGroup["ID"]] = array(
				"TYPE" => "STRING",
				"DEFAULT" => "",
				"TITLE" => GetMessage("SALE_DH_SIMPLE_GROUP_PRICE")." \"".$arLocationGroup["NAME"]."\" (".COption::GetOptionString("sale", "default_currency", "RUB").')',
				"GROUP" => "all",
			);
		}
		
		$arConfig["CONFIG"]["price_min"] = array(
			"TYPE" => "STRING",
			"DEFAULT" => "",
			"TITLE" => "Минимальная цена с которой брать доставку по категориям (".COption::GetOptionString("sale", "default_currency", "RUB").')',
			"GROUP" => "all",
		);

		$arConfig["CONFIG"]["price_max"] = array(
			"TYPE" => "STRING",
			"DEFAULT" => "",
			"TITLE" => "Цена после которой достава бесплатная (".COption::GetOptionString("sale", "default_currency", "RUB").')',
			"GROUP" => "all",
		);
		
		return $arConfig; 
	}
	
	function GetSettings($strSettings)
	{
		return unserialize($strSettings);
	}
	
	function SetSettings($arSettings)
	{
		foreach ($arSettings as $key => $value) 
		{
			if (strlen($value) > 0)
				$arSettings[$key] = doubleval($value);
			else
				unset($arSettings[$key]);
		}
	
		return serialize($arSettings);
	}

	function __GetLocationPrice($LOCATION_ID, $arConfig, $arOrder)
	{
		//var_dump($arOrder);
		//var_dump($arOrder["PRICE"], $arConfig);	
		if($arOrder["PRICE"]>=$arConfig['price_max']['VALUE'] && $arConfig['price_max']['VALUE']>0) return 0;

		$price = false;
		
/*		$dbLocationGroups = CSaleLocationGroup::GetLocationList(array("LOCATION_ID" => $LOCATION_ID));
		while ($arLocationGroup = $dbLocationGroups->Fetch())
		{
			if (
				array_key_exists('price_'.$arLocationGroup["LOCATION_GROUP_ID"], $arConfig) 
				&& 
				strlen($arConfig['price_'.$arLocationGroup["LOCATION_GROUP_ID"]]["VALUE"]) > 0
			)
			{
				$price = $arConfig['price_'.$arLocationGroup["LOCATION_GROUP_ID"]]["VALUE"];
				break;
			}
		}*/
		//var_dump($price);
		$productIds = array();
		foreach($arOrder["ITEMS"] as $arItem) {
			$productIds[]=$arItem["PRODUCT_ID"];
		}
		//var_dump($productIds, $arOrder["PRICE"], $arConfig['price_min']['VALUE']);die();
		if(count($productIds)==0 || $arOrder["PRICE"]<$arConfig['price_min']['VALUE']) return $price;
		
		CModule::IncludeModule('iblock');
		
		$arSections = array();
		$rs = CIBlockSection::GetList(array(), array("IBLOCK_ID"=>36), false, array("ID", "IBLOCK_SECTION_ID", "UF_DELIVERY"));
		while($ar = $rs->Fetch()) {
			$arSections[$ar["ID"]] = $ar;
		}
		
		//if($_SERVER['REMOTE_ADDR']=='31.130.139.96') var_dump($productIds);

		$rs = CIBlockElement::GetList(array(), array("IBLOCK_ID"=>36,  "ID"=>$productIds), false, false, array("IBLOCK_SECTION_ID"));
		while($ar = $rs->Fetch()) {
			$t = $ar["IBLOCK_SECTION_ID"];
			while($t && $arSections[$t]) {
				if($arSections[$t]["UF_DELIVERY"]>0) {
					if($price===false) {
						$price = $arSections[$t]["UF_DELIVERY"];
					} else {
						$price = min($price, $arSections[$t]["UF_DELIVERY"]);
					}
					break;
				} else if($arSections[$t]["UF_DELIVERY"]<0|| $arSections[$t]["UF_DELIVERY"]==="0") {
					$price = 0;
					break 2;
				}
				$t = $arSections[$t]["IBLOCK_SECTION_ID"];
			}
		}

		if($price===false) {
			$price = $arConfig['price_1']["VALUE"];
		}
		
		return $price;
	}
	
	function Calculate($profile, $arConfig, $arOrder, $STEP, $TEMP = false)
	{
		return DXDeliverySimple::__GetLocationPrice($arOrder["LOCATION_TO"], $arConfig, $arOrder);
	}
	
	function Compability($arOrder, $arConfig)
	{
		//echo "<pre>";var_dump($arOrder);echo "</pre>";
		//var_dump(2);die();
		//$price = DXDeliverySimple::__GetLocationPrice($arOrder["LOCATION_TO"], $arConfig);
		
		//if ($price === false)
		//	return array();
		//else
			return array('dxsimple');
	} 
}

AddEventHandler("sale", "onSaleDeliveryHandlersBuildList", array('DXDeliverySimple', 'Init')); 
?>