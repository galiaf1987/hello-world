<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

$IS_AJAX = false;
if($_REQUEST['rsec_ajax_post']=='Y' && $_REQUEST['rsec_mode']=='compare')
{
	$IS_AJAX = true;
	$APPLICATION->RestartBuffer();
	// compare delete
	foreach($_SESSION[$arParams["COMPARE_NAME"]][$arParams["COMPARE_IBLOCK_ID"]]["ITEMS"] as $key => $ar)
	{
		$deleteTmp = ($_REQUEST["DELETE_".$key]=='Y')?'Y':'N';
		if($deleteTmp=='Y')
		{
			unset($_SESSION[$arParams["COMPARE_NAME"]][$arParams["COMPARE_IBLOCK_ID"]]["ITEMS"][$key]);
		}
	}
}

global $rsecCompareFilterGo;
?><?$APPLICATION->IncludeComponent(
	"bitrix:catalog.compare.list", 
	"rs_easycart", 
	array(
		"IBLOCK_TYPE" => $arParams['COMPARE_IBLOCK_TYPE'],
		"IBLOCK_ID" => $arParams['COMPARE_IBLOCK_ID'],
		"AJAX_MODE" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"AJAX_OPTION_HISTORY" => "N",
		"DETAIL_URL" => "",
		"COMPARE_URL" => $arParams['COMPARE_RESULT_PATH'],
		"NAME" => $arParams['COMPARE_NAME'],
		"AJAX_OPTION_ADDITIONAL" => ""
	),
	false
);?><?

?><?$APPLICATION->IncludeComponent(
	"bitrix:catalog.section", 
	"rs_easycart", 
	array(
		"IBLOCK_TYPE" => $arParams['COMPARE_IBLOCK_TYPE'],
		"IBLOCK_ID" => $arParams['COMPARE_IBLOCK_ID'],
		"ELEMENT_SORT_FIELD" => "sort",
		"ELEMENT_SORT_ORDER" => "asc",
		"PROPERTY_CODE" => array(
			0 => "CML2_ARTICLE",
			1 => "BRAND",
			2 => "YEAR",
			3 => "OS",
			4 => "WEIGHT",
			5 => "FORUM_MESSAGE_CNT",
			6 => "RSFAVORITE_COUNTER",
			7 => "FORUM_TOPIC_ID",
			8 => "HEIGHT",
			9 => "TICKNESS",
			10 => "WIDTH",
			11 => "DIAGONAL",
			12 => "SOLUTION",
			13 => "INTERNET_ACCESS",
			14 => "INTERFACES",
			15 => "NAVI",
			16 => "CARD",
			17 => "VIDEO",
			18 => "ACCESSORIES",
			19 => "POHOZHIE",
			20 => "BUY_WITH_THIS",
			21 => "YEARS",
			22 => "",
		),
		"META_KEYWORDS" => "",
		"META_DESCRIPTION" => "",
		"BROWSER_TITLE" => "-",
		"INCLUDE_SUBSECTIONS" => "Y",
		"BASKET_URL" => "",
		"ACTION_VARIABLE" => "rsec_action",
		"PRODUCT_ID_VARIABLE" => "rsec_id",
		"SECTION_ID_VARIABLE" => "",
		"PRODUCT_QUANTITY_VARIABLE" => "rsec_quantity",
		"FILTER_NAME" => "rsecCompareFilterGo",
		"CACHE_TYPE" => "A",
		"CACHE_TIME" => "600",
		"CACHE_FILTER" => "Y",
		"CACHE_GROUPS" => "N",
		"SET_TITLE" => "N",
		"SET_STATUS_404" => "N",
		"DISPLAY_COMPARE" => "N",
		"PAGE_ELEMENT_COUNT" => "10",
		"LINE_ELEMENT_COUNT" => "",
		"PRICE_CODE" => array(
			0 => "BASE",
			1 => "WHOLE",
			2 => "RETAIL",
			3 => "EXTPRICE",
			4 => "EXTPRICE2",
		),
		"USE_PRICE_COUNT" => "N",
		"SHOW_PRICE_COUNT" => "N",
		"PRICE_VAT_INCLUDE" => "Y",
		"USE_PRODUCT_QUANTITY" => "Y",
		"DISPLAY_TOP_PAGER" => "N",
		"DISPLAY_BOTTOM_PAGER" => "N",
		"PAGER_TITLE" => "",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_TEMPLATE" => ".default",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "0",
		"PAGER_SHOW_ALL" => "N",
		"OFFERS_CART_PROPERTIES" => array(
		),
		"OFFERS_FIELD_CODE" => array(
			0 => "ID",
			1 => "CODE",
			2 => "XML_ID",
			3 => "NAME",
			4 => "TAGS",
			5 => "SORT",
			6 => "PREVIEW_TEXT",
			7 => "PREVIEW_PICTURE",
			8 => "DETAIL_TEXT",
			9 => "DETAIL_PICTURE",
			10 => "DATE_ACTIVE_FROM",
			11 => "ACTIVE_FROM",
			12 => "DATE_ACTIVE_TO",
			13 => "ACTIVE_TO",
			14 => "SHOW_COUNTER",
			15 => "SHOW_COUNTER_START",
			16 => "IBLOCK_TYPE_ID",
			17 => "IBLOCK_ID",
			18 => "IBLOCK_CODE",
			19 => "IBLOCK_NAME",
			20 => "IBLOCK_EXTERNAL_ID",
			21 => "DATE_CREATE",
			22 => "CREATED_BY",
			23 => "CREATED_USER_NAME",
			24 => "TIMESTAMP_X",
			25 => "MODIFIED_BY",
			26 => "USER_NAME",
			27 => "",
		),
		"OFFERS_PROPERTY_CODE" => array(
			0 => "CML2_ARTICLE",
			1 => "COLOR_DIRECTORY",
			2 => "COLOR2_DIRECTORY",
			3 => "STORAGE",
			4 => "MORE_PHOTO",
			5 => "",
		),
		"OFFERS_SORT_FIELD" => "sort",
		"OFFERS_SORT_ORDER" => "asc",
		"OFFERS_LIMIT" => "0",
		"SECTION_ID" => "",
		"SECTION_CODE" => "",
		"SECTION_URL" => "",
		"DETAIL_URL" => "",
		"CONVERT_CURRENCY" => "N",
		"BY_LINK" => "Y",
		"SECTION_USER_FIELDS" => array(
			0 => "",
			1 => "",
		),
		"ELEMENT_SORT_FIELD2" => "id",
		"ELEMENT_SORT_ORDER2" => "desc",
		"SHOW_ALL_WO_SECTION" => "N",
		"HIDE_NOT_AVAILABLE" => "N",
		"OFFERS_SORT_FIELD2" => "id",
		"OFFERS_SORT_ORDER2" => "desc",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"AJAX_OPTION_HISTORY" => "N",
		"SET_META_KEYWORDS" => "Y",
		"SET_META_DESCRIPTION" => "Y",
		"ADD_SECTIONS_CHAIN" => "N",
		"ADD_PROPERTIES_TO_BASKET" => "N",
		"PRODUCT_PROPS_VARIABLE" => "prop",
		"PARTIAL_PRODUCT_PROPERTIES" => "N",
		"PRODUCT_PROPERTIES" => array(
		),
		"AJAX_OPTION_ADDITIONAL" => "",
		"RS_SECONDARY_ACTION_VARIABLE" => "rsec_comaction",
		"RS_TAB_IDENT" => "rsec_thistab_compare",
		"COMPARE_RESULT_PATH" => $arParams['COMPARE_RESULT_PATH'],
	),
	false
);?><?

if($IS_AJAX)
{
	die();
}