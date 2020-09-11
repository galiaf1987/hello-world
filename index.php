<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("description", "Продажа биметаллических, секционных, монолитных, алюминиевых радиаторов Rifar в Москве. Интернет-магазин Рифар Москва. +7 (495) 131-89-00.");
$APPLICATION->SetPageProperty("NOT_SHOW_NAV_CHAIN", "Y");
$APPLICATION->SetTitle("Главная");
$APPLICATION->SetPageProperty("title", "Интернет-Магазин Рифар Москва - продажа радиаторов Rifar в Москве и области: Биметаллические, алюминиевые, секционные и монолитные радиаторы фирмы Рифар.");
?><div class="around-cert">
 <a href="/images/cert.jpg" class="fancyimage">Официальный представитель продукции "РИФАР" на территории РФ</a>
</div>
 <?$APPLICATION->IncludeComponent(
	"bitrix:news.list",
	"banners",
	Array(
		"ACTIVE_DATE_FORMAT" => "d.m.Y",
		"ADD_SECTIONS_CHAIN" => "Y",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"CACHE_TIME" => "3600",
		"CACHE_TYPE" => "A",
		"CHECK_DATES" => "Y",
		"DETAIL_URL" => "",
		"DISPLAY_BOTTOM_PAGER" => "Y",
		"DISPLAY_TOP_PAGER" => "N",
		"FIELD_CODE" => array(0=>"ID",1=>"CODE",2=>"XML_ID",3=>"NAME",4=>"TAGS",5=>"SORT",6=>"PREVIEW_TEXT",7=>"PREVIEW_PICTURE",8=>"DETAIL_TEXT",9=>"DETAIL_PICTURE",10=>"DATE_ACTIVE_FROM",11=>"ACTIVE_FROM",12=>"DATE_ACTIVE_TO",13=>"ACTIVE_TO",14=>"SHOW_COUNTER",15=>"SHOW_COUNTER_START",16=>"IBLOCK_TYPE_ID",17=>"IBLOCK_ID",18=>"IBLOCK_CODE",19=>"IBLOCK_NAME",20=>"IBLOCK_EXTERNAL_ID",21=>"DATE_CREATE",22=>"CREATED_BY",23=>"CREATED_USER_NAME",24=>"TIMESTAMP_X",25=>"MODIFIED_BY",26=>"USER_NAME",27=>"",),
		"FILTER_NAME" => "",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"IBLOCK_ID" => "3",
		"IBLOCK_TYPE" => "presscenter",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
		"INCLUDE_SUBSECTIONS" => "Y",
		"NEWS_COUNT" => "20",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "Y",
		"PAGER_SHOW_ALWAYS" => "Y",
		"PAGER_TEMPLATE" => ".default",
		"PAGER_TITLE" => "Новости",
		"PARENT_SECTION" => "",
		"PARENT_SECTION_CODE" => "",
		"PREVIEW_TRUNCATE_LEN" => "",
		"PROPERTY_CODE" => array(0=>"LINK",1=>"BANNER_TYPE",2=>"BLANK",3=>"TITLE1",4=>"TITLE2",5=>"TEXT",6=>"",),
		"RSGOPRO_ALONE" => "ALONE",
		"RSGOPRO_BANNER_HEIGHT" => "402",
		"RSGOPRO_BANNER_TYPE" => "BANNER_TYPE",
		"RSGOPRO_BANNER_VIDEO_MP4" => "VIDEO_MP4",
		"RSGOPRO_BANNER_VIDEO_PIC" => "VIDEO_PIC",
		"RSGOPRO_BANNER_VIDEO_WEBM" => "VIDEO_WEBM",
		"RSGOPRO_BLANK" => "BLANK",
		"RSGOPRO_CHANGE_DELAY" => "8000",
		"RSGOPRO_CHANGE_SPEED" => "2000",
		"RSGOPRO_LINK" => "LINK",
		"RSGOPRO_TEXT" => "TEXT",
		"RSGOPRO_TITLE1" => "TITLE1",
		"RSGOPRO_TITLE2" => "TITLE2",
		"SET_STATUS_404" => "N",
		"SET_TITLE" => "Y",
		"SORT_BY1" => "SORT",
		"SORT_BY2" => "TIMESTAMP_X",
		"SORT_ORDER1" => "ASC",
		"SORT_ORDER2" => "ASC"
	)
);?>
<div class="around-3col around-cert">
 <a href="/delivery/" class="btn">Доставка</a> <a href="/payment/" class="btn">Оплата</a> <a href="/action/skidki_na_radiatory_rifar/" class="btn">Скидки</a>
</div>
 <?$APPLICATION->IncludeComponent(
	"bitrix:catalog.section.list",
	"main",
	Array(
		"ADD_SECTIONS_CHAIN" => "N",
		"BLOCK_NAME" => "",
		"CACHE_GROUPS" => "Y",
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "A",
		"COMPONENT_TEMPLATE" => "main",
		"COUNT_ELEMENTS" => "Y",
		"IBLOCK_ID" => "1",
		"IBLOCK_TYPE" => "catalog",
		"SECTION_CODE" => "",
		"SECTION_FIELDS" => array(0=>"",1=>"",),
		"SECTION_ID" => "",
		"SECTION_URL" => "",
		"SECTION_USER_FIELDS" => array(0=>"UF_SHOW_ON_MAIN",1=>"",),
		"SHOW_COUNT_LVL1" => "15",
		"SHOW_COUNT_LVL2" => "11",
		"TOP_DEPTH" => "2"
	)
);?> <?$APPLICATION->IncludeComponent(
	"bitrix:news.line",
	"main",
	Array(
		"ACTIVE_DATE_FORMAT" => "d.m.Y",
		"BLOCK_NAME" => "Новости и акции",
		"CACHE_GROUPS" => "N",
		"CACHE_TIME" => "300",
		"CACHE_TYPE" => "A",
		"COMPONENT_TEMPLATE" => "main",
		"COMPOSITE_FRAME_MODE" => "A",
		"COMPOSITE_FRAME_TYPE" => "AUTO",
		"DETAIL_URL" => "",
		"FIELD_CODE" => array(0=>"NAME",1=>"",),
		"IBLOCKS" => array(0=>"4",1=>"5",),
		"IBLOCK_TYPE" => "presscenter",
		"NEWS_COUNT" => "6",
		"SORT_BY1" => "ACTIVE_FROM",
		"SORT_BY2" => "SORT",
		"SORT_ORDER1" => "DESC",
		"SORT_ORDER2" => "ASC"
	)
);?>
<div style="background:#F3F3F3;">
	<div class="text-main">
		<div style="padding: 20px 0">
			<div class="embed-container">
				 <iframe width="560" height="315" src="https://www.youtube.com/embed/p_onFt663vU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</div>
		 <?$APPLICATION->IncludeComponent(
	"bitrix:main.include",
	"",
	Array(
		"AREA_FILE_SHOW" => "file",
		"AREA_FILE_SUFFIX" => "inc",
		"COMPONENT_TEMPLATE" => ".default",
		"EDIT_TEMPLATE" => "",
		"PATH" => "/index_text.php"
	)
);?>
	</div>
</div>
<div class="sorter_and_name clearfix">
	<h3 class="name">Лучшие товары</h3>
	<div class="sorter">
		 <?
global $alfaCTemplate, $alfaCSortType, $alfaCSortToo, $alfaCOutput;
$APPLICATION->IncludeComponent('redsign:catalog.sorter', 'gopro', array(
	'ALFA_ACTION_PARAM_NAME' => 'alfaction',
	'ALFA_ACTION_PARAM_VALUE' => 'alfavalue',
	'ALFA_CHOSE_TEMPLATES_SHOW' => 'Y',
	'ALFA_CNT_TEMPLATES' => '3',
	'ALFA_DEFAULT_TEMPLATE' => 'showcase',
	'ALFA_CNT_TEMPLATES_0' => 'Список',
	'ALFA_CNT_TEMPLATES_NAME_0' => 'table',
	'ALFA_CNT_TEMPLATES_1' => 'Галерея',
	'ALFA_CNT_TEMPLATES_NAME_1' => 'gallery',
	'ALFA_CNT_TEMPLATES_2' => 'Витрина',
	'ALFA_CNT_TEMPLATES_NAME_2' => 'showcase',
	'ALFA_SORT_BY_SHOW' => 'N',
	'ALFA_OUTPUT_OF_SHOW' => 'N',
	'AJAXPAGESID' => 'ajaxpages_main',
	),
	false
);
?>
	</div>
</div>
<div id="ajaxpages_main" class="ajaxpages_main">
	 <?
global $APPLICATION,$JSON, $bastFilter;
$bastFilter = array("PROPERTY_BEST"=>6);
$IS_SORTERCHANGE = 'N';
if($_REQUEST['AJAX_CALL']=='Y' && $_REQUEST['sorterchange']=='ajaxpages_main')
{
	$IS_SORTERCHANGE = 'Y';
	$JSON['TYPE'] = 'OK';
}
$IS_AJAXPAGES = 'N';
if($_REQUEST['ajaxpages']=='Y' && $_REQUEST['ajaxpagesid']=='ajaxpages_main')
{
	$IS_AJAXPAGES = 'Y';
	$JSON['TYPE'] = 'OK';
}
?> <?$APPLICATION->IncludeComponent(
	"bitrix:catalog.section",
	"gopro",
	Array(
		"ACTION_VARIABLE" => "action",
		"ADD_PROPERTIES_TO_BASKET" => "N",
		"ADD_SECTIONS_CHAIN" => "N",
		"AJAXPAGESID" => "ajaxpages_main",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "N",
		"BASKET_URL" => "/personal/cart/",
		"BROWSER_TITLE" => "-",
		"CACHE_FILTER" => "Y",
		"CACHE_GROUPS" => "N",
		"CACHE_TIME" => "3600",
		"CACHE_TYPE" => "A",
		"COLUMNS5" => "Y",
		"CONVERT_CURRENCY" => "N",
		"DETAIL_URL" => "",
		"DISPLAY_BOTTOM_PAGER" => "Y",
		"DISPLAY_COMPARE" => "Y",
		"DISPLAY_TOP_PAGER" => "Y",
		"DONT_SHOW_LINKS" => "N",
		"ELEMENT_SORT_FIELD" => "sort",
		"ELEMENT_SORT_FIELD2" => "timestamp_x",
		"ELEMENT_SORT_ORDER" => "asc",
		"ELEMENT_SORT_ORDER2" => "asc",
		"FILTER_NAME" => "bastFilter",
		"HIDE_NOT_AVAILABLE" => "N",
		"IBLOCK_ID" => "1",
		"IBLOCK_TYPE" => "catalog",
		"INCLUDE_SUBSECTIONS" => "A",
		"IS_AJAXPAGES" => $IS_AJAXPAGES,
		"IS_SORTERCHANGE" => $IS_SORTERCHANGE,
		"LINE_ELEMENT_COUNT" => "3",
		"MAIN_TITLE" => "Наличие на складах",
		"MESS_BTN_ADD_TO_BASKET" => "В корзину",
		"MESS_BTN_BUY" => "Купить",
		"MESS_BTN_DETAIL" => "Подробнее",
		"MESS_BTN_SUBSCRIBE" => "Подписаться",
		"MESS_NOT_AVAILABLE" => "Нет в наличии",
		"META_DESCRIPTION" => "",
		"META_KEYWORDS" => "",
		"MIN_AMOUNT" => "10",
		"OFFERS_CART_PROPERTIES" => array(),
		"OFFERS_FIELD_CODE" => array(0=>"ID",1=>"CODE",2=>"XML_ID",3=>"NAME",4=>"TAGS",5=>"SORT",6=>"PREVIEW_TEXT",7=>"PREVIEW_PICTURE",8=>"DETAIL_TEXT",9=>"DETAIL_PICTURE",10=>"DATE_ACTIVE_FROM",11=>"ACTIVE_FROM",12=>"DATE_ACTIVE_TO",13=>"ACTIVE_TO",14=>"SHOW_COUNTER",15=>"SHOW_COUNTER_START",16=>"IBLOCK_TYPE_ID",17=>"IBLOCK_ID",18=>"IBLOCK_CODE",19=>"IBLOCK_NAME",20=>"IBLOCK_EXTERNAL_ID",21=>"DATE_CREATE",22=>"CREATED_BY",23=>"CREATED_USER_NAME",24=>"TIMESTAMP_X",25=>"MODIFIED_BY",26=>"USER_NAME",27=>"",),
		"OFFERS_LIMIT" => "0",
		"OFFERS_PROPERTY_CODE" => array(0=>"CML2_ARTICLE",1=>"COLOR_DIRECTORY",2=>"COLOR2_DIRECTORY",3=>"STORAGE",4=>"MORE_PHOTO",5=>"",),
		"OFFERS_SORT_FIELD" => "sort",
		"OFFERS_SORT_FIELD2" => "id",
		"OFFERS_SORT_ORDER" => "asc",
		"OFFERS_SORT_ORDER2" => "asc",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "Y",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_TEMPLATE" => "gopro",
		"PAGER_TITLE" => "Товары",
		"PAGE_ELEMENT_COUNT" => "5",
		"PARTIAL_PRODUCT_PROPERTIES" => "N",
		"PRICE_CODE" => array(0=>"BASE",),
		"PRICE_VAT_INCLUDE" => "Y",
		"PRODUCT_ID_VARIABLE" => "id",
		"PRODUCT_PROPERTIES" => array(),
		"PRODUCT_PROPS_VARIABLE" => "prop",
		"PRODUCT_QUANTITY_VARIABLE" => "quantity",
		"PRODUCT_SUBSCRIPTION" => "N",
		"PROPERTY_CODE" => array(0=>"CML2_ARTICLE",1=>"BRAND",2=>"YEAR",3=>"OS",4=>"WEIGHT",5=>"FORUM_MESSAGE_CNT",6=>"RSFAVORITE_COUNTER",7=>"FORUM_TOPIC_ID",8=>"HEIGHT",9=>"TICKNESS",10=>"WIDTH",11=>"DIAGONAL",12=>"SOLUTION",13=>"INTERNET_ACCESS",14=>"INTERFACES",15=>"NAVI",16=>"CARD",17=>"VIDEO",18=>"ACCESSORIES",19=>"POHOZHIE",20=>"BUY_WITH_THIS",21=>"YEARS",22=>"",),
		"PROPS_ATTRIBUTES" => array(0=>"COLOR_DIRECTORY",1=>"SKU_FASOVKA",2=>"SKU_SIZE",),
		"PROP_ACCESSORIES" => "ACCESSORIES",
		"PROP_ARTICLE" => "CML2_ARTICLE",
		"PROP_MORE_PHOTO" => "MORE_PHOTO",
		"PROP_SKU_ARTICLE" => "CML2_ARTICLE",
		"PROP_SKU_MORE_PHOTO" => "MORE_PHOTO",
		"SECTION_CODE" => "",
		"SECTION_ID" => "",
		"SECTION_ID_VARIABLE" => "SECTION_ID",
		"SECTION_URL" => "",
		"SECTION_USER_FIELDS" => array(0=>"",1=>"",),
		"SET_META_DESCRIPTION" => "N",
		"SET_META_KEYWORDS" => "N",
		"SET_STATUS_404" => "N",
		"SET_TITLE" => "Y",
		"SHOW_ALL_WO_SECTION" => "Y",
		"SHOW_DISCOUNT_PERCENT" => "N",
		"SHOW_ERROR_EMPTY_ITEMS" => "Y",
		"SHOW_OLD_PRICE" => "N",
		"SHOW_PRICE_COUNT" => "1",
		"TEMPLATE_THEME" => "",
		"USE_FAVORITE" => "Y",
		"USE_MIN_AMOUNT" => "Y",
		"USE_PRICE_COUNT" => "N",
		"USE_PRODUCT_QUANTITY" => "Y",
		"USE_SHARE" => "Y",
		"USE_STORE" => "Y",
		"VIEW" => $alfaCTemplate
	)
);?>
</div>
<?
if($IS_AJAXPAGES=='Y' || $IS_SORTERCHANGE=='Y')
{
	$APPLICATION->RestartBuffer();
	if(SITE_CHARSET!='utf-8')
	{
		$data = $APPLICATION->ConvertCharsetArray($JSON, SITE_CHARSET, 'utf-8');
		$json_str_utf = json_encode($data);
		$json_str = $APPLICATION->ConvertCharset($json_str_utf, 'utf-8', SITE_CHARSET);
		echo $json_str;
	} else {
		echo json_encode($JSON);
	}
	die();
}
?>
<?/*$APPLICATION->IncludeComponent(
	"bitrix:news.list",
	"brands",
	Array(
		"DISPLAY_DATE" => "Y",
		"DISPLAY_NAME" => "Y",
		"DISPLAY_PICTURE" => "Y",
		"DISPLAY_PREVIEW_TEXT" => "Y",
		"AJAX_MODE" => "N",
		"IBLOCK_TYPE" => "presscenter",
		"IBLOCK_ID" => "6",
		"NEWS_COUNT" => "10000",
		"SORT_BY1" => "ACTIVE_FROM",
		"SORT_ORDER1" => "DESC",
		"SORT_BY2" => "SORT",
		"SORT_ORDER2" => "ASC",
		"FILTER_NAME" => "",
		"FIELD_CODE" => array(),
		"PROPERTY_CODE" => array("BRAND"),
		"CHECK_DATES" => "Y",
		"DETAIL_URL" => "",
		"PREVIEW_TRUNCATE_LEN" => "",
		"ACTIVE_DATE_FORMAT" => "d.m.Y",
		"SET_STATUS_404" => "N",
		"SET_TITLE" => "Y",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
		"ADD_SECTIONS_CHAIN" => "Y",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"PARENT_SECTION" => "",
		"PARENT_SECTION_CODE" => "",
		"INCLUDE_SUBSECTIONS" => "Y",
		"CACHE_TYPE" => "A",
		"CACHE_TIME" => "36000000",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"PAGER_TEMPLATE" => ".default",
		"DISPLAY_TOP_PAGER" => "N",
		"DISPLAY_BOTTOM_PAGER" => "N",
		"PAGER_TITLE" => "Новости",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"AJAX_OPTION_HISTORY" => "N",
		"BRAND_PAGE" => "/brands/",
		"BRAND_CODE" => "BRAND",
		"SECTIONS_CODE" => "SECTIONS",
		"CATALOG_FILTER_NAME" => "arrFilter",
		"CATALOG_IBLOCK_ID" => "1",
		"CATALOG_BRAND_CODE" => "BRAND",
		"SHOW_BOTTOM_SECTIONS" => "Y",
		"ADD_STYLES_FOR_MAIN" => "Y",
		"COUNT_ITEMS" => "0",
	),
false
);*/?>
<?$APPLICATION->IncludeComponent(
	"bitrix:highloadblock.list",
	"mainbrands",
	Array(
		"BLOCK_ID" => "2",
		"COMPONENT_TEMPLATE" => ".default",
		"DETAIL_URL" => "/brands/#XML_ID#/"
	),
false,
Array(
	'ACTIVE_COMPONENT' => 'N'
)
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>