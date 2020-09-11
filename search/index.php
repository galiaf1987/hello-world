<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Поиск");?>

<?$APPLICATION->IncludeComponent(
	"bitrix:search.page", 
	"gopro", 
	array(
		"RESTART" => "Y",
		"NO_WORD_LOGIC" => "N",
		"CHECK_DATES" => "Y",
		"USE_TITLE_RANK" => "N",
		"DEFAULT_SORT" => "rank",
		"FILTER_NAME" => "",
		"arrFILTER" => array(
		),
		"SHOW_WHERE" => "N",
		"SHOW_WHEN" => "N",
		"PAGE_RESULT_COUNT" => "10",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"AJAX_OPTION_HISTORY" => "N",
		"CACHE_TYPE" => "A",
		"CACHE_TIME" => "3600",
		"DISPLAY_TOP_PAGER" => "Y",
		"DISPLAY_BOTTOM_PAGER" => "Y",
		"PAGER_TITLE" => "Результаты поиска",
		"PAGER_SHOW_ALWAYS" => "Y",
		"PAGER_TEMPLATE" => "gopro",
		"USE_LANGUAGE_GUESS" => "N",
		"TAGS_SORT" => "NAME",
		"TAGS_PAGE_ELEMENTS" => "150",
		"TAGS_PERIOD" => "",
		"TAGS_URL_SEARCH" => "",
		"TAGS_INHERIT" => "Y",
		"FONT_MAX" => "50",
		"FONT_MIN" => "10",
		"COLOR_NEW" => "000000",
		"COLOR_OLD" => "C8C8C8",
		"PERIOD_NEW_TAGS" => "",
		"SHOW_CHAIN" => "Y",
		"COLOR_TYPE" => "Y",
		"WIDTH" => "100%",
		"USE_SUGGEST" => "N",
		"PROPCODE_MORE_PHOTO" => "MORE_PHOTO",
		"PROPCODE_SKU_MORE_PHOTO" => "SKU_MORE_PHOTO",
		"IBLOCK_ID" => array(
			0 => "1",
		),
		"PRICE_CODE" => array(
			0 => "BASE",
			1 => "RETAIL",
		),
		"SKU_PRICE_SORT_ID" => "1",
		"PRICE_VAT_INCLUDE" => "N",
		"OFFERS_FIELD_CODE" => array(
			0 => "PREVIEW_PICTURE",
			1 => "DETAIL_PICTURE",
			2 => "",
		),
		"OFFERS_PROPERTY_CODE" => array(
			0 => "CML2_LINK",
			1 => "COLOR_DIRECTORY",
			2 => "CML2_ARTICLE",
			3 => "COLOR2_DIRECTORY",
			4 => "STORAGE",
			5 => "",
		),
		"CONVERT_CURRENCY" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"USE_PRODUCT_QUANTITY" => "N",
		"PRODUCT_QUANTITY_VARIABLE" => "squan",
		"COMPONENT_TEMPLATE" => "gopro"
	),
	false
);?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>