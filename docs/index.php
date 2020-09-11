<?require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');
$APPLICATION->SetPageProperty("title", "Документация на радиаторы Рифар: технический каталог, паспорта, сертификаты - интернет-магазин Рифар Москва");
$APPLICATION->SetPageProperty("description", "Технический каталог, паспорта, сертификаты радиаторов Rifar. Документация в интернет-магазине Рифар Москва. +7 (495) 131-89-00.");
$APPLICATION->SetTitle("Документация");

?>Компания «РИФАР» ответственно относится к выпускаемой продукции. <br>
 Поэтому наряду с техническими испытаниями обязательно проводится сертификация радиаторов отопления. <br>
 <br>
 Мы уверены в качестве нашей продукции. <br>
 <br>
<p>
	 Отопительные приборы изготавливают в соответствии с европейскими техническими нормами&nbsp;
</p>
<p>
	 EN442 и российскими &nbsp;ТУ&nbsp;4935-001-41807387-03, ТУ 4935-002-41807387-05, ТУ 4935-003-41807387-08 ГОСТ 31311-2005&nbsp;
</p>
<p>
	 и требованиями нормативных документов СНИП 41-01-2003.
</p>
 <br>
 <?$APPLICATION->IncludeComponent(
	"bitrix:news.list",
	"files",
	Array(
		"DISPLAY_DATE" => "Y",
		"DISPLAY_NAME" => "Y",
		"DISPLAY_PICTURE" => "Y",
		"DISPLAY_PREVIEW_TEXT" => "Y",
		"AJAX_MODE" => "N",
		"IBLOCK_TYPE" => "",
		"IBLOCK_ID" => "7",
		"NEWS_COUNT" => "1000",
		"SORT_BY1" => "SORT",
		"SORT_ORDER1" => "ASC",
		"SORT_BY2" => "ACTIVE_FROM",
		"SORT_ORDER2" => "DESC",
		"FILTER_NAME" => "",
		"FIELD_CODE" => "",
		"PROPERTY_CODE" => array("FILE"),
		"CHECK_DATES" => "Y",
		"DETAIL_URL" => "",
		"PREVIEW_TRUNCATE_LEN" => "",
		"ACTIVE_DATE_FORMAT" => "d.m.Y",
		"SET_TITLE" => "N",
		"SET_STATUS_404" => "N",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"ADD_SECTIONS_CHAIN" => "N",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"PARENT_SECTION" => "",
		"PARENT_SECTION_CODE" => "",
		"CACHE_TYPE" => "A",
		"CACHE_TIME" => "36000000",
		"CACHE_NOTES" => "",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"DISPLAY_TOP_PAGER" => "N",
		"DISPLAY_BOTTOM_PAGER" => "N",
		"PAGER_TITLE" => "Новости",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_TEMPLATE" => "",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"PROP_CODE_FILE" => "FILE"
	)
);?><br><?
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/footer.php');?>