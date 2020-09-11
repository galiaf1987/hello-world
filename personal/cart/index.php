<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("title", "Корзина. Продажа радиаторов Рифар в Москве и Московской области - Интернет-магазин Рифар Москва");
$APPLICATION->SetPageProperty("description", "Корзина интернет-магазина Рифар Москва  +7 (495) 131-89-00.");
$APPLICATION->SetTitle("Корзина");
if($_REQUEST["coupon"]) $_SESSION["coupon"]=$_REQUEST["coupon"];
?>

<div class="pmenu">
<?$APPLICATION->IncludeComponent("bitrix:menu", "personal", array(
	"ROOT_MENU_TYPE" => "personal",
	"MENU_CACHE_TYPE" => "A",
	"MENU_CACHE_TIME" => "3600",
	"MENU_CACHE_USE_GROUPS" => "Y",
	"MENU_CACHE_GET_VARS" => array(
	),
	"MAX_LEVEL" => "1",
	"CHILD_MENU_TYPE" => "",
	"USE_EXT" => "N",
	"DELAY" => "N",
	"ALLOW_MULTI_SELECT" => "N",
	"SEPARATORS_PLACE" => array(
		0 => "2",
		1 => "5",
		2 => "",
	)
	),
	false
);?>
</div>

<div class="pcontent">
<?$APPLICATION->IncludeComponent(
	"bitrix:sale.basket.basket", 
	"gopro", 
	array(
		"COLUMNS_LIST" => array(
			0 => "NAME",
			1 => "DELETE",
			2 => "PRICE",
			3 => "QUANTITY",
			4 => "SUM",
		),
		"PATH_TO_ORDER" => "/personal/order/make/",
		"HIDE_COUPON" => "Y",
		"PRICE_VAT_SHOW_VALUE" => "N",
		"COUNT_DISCOUNT_4_ALL_QUANTITY" => "N",
		"USE_PREPAYMENT" => "N",
		"QUANTITY_FLOAT" => "N",
		"SET_TITLE" => "Y",
		"ACTION_VARIABLE" => "action",
		"OFFERS_PROPS" => array(
			0 => "COLOR_DIRECTORY",
			1 => "COLOR2_DIRECTORY",
			2 => "STORAGE",
		),
		"PROP_ARTICLE" => "CML2_ARTICLE",
		"PROP_SKU_ARTICLE" => "CML2_ARTICLE",
		"AJAX_MODE" => "Y",
		"COMPONENT_TEMPLATE" => "gopro",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"CORRECT_RATIO" => "N",
		"AUTO_CALCULATION" => "Y",
		"ACCESSORIES_IBLOCK" => "-",
		"PROP_ACCESSORIES" => "-",
		"COMPOSITE_FRAME_MODE" => "A",
		"COMPOSITE_FRAME_TYPE" => "AUTO",
		"USE_GIFTS" => "Y",
		"GIFTS_PLACE" => "BOTTOM",
		"GIFTS_BLOCK_TITLE" => "Выберите один из подарков",
		"GIFTS_HIDE_BLOCK_TITLE" => "N",
		"GIFTS_TEXT_LABEL_GIFT" => "Подарок",
		"GIFTS_PRODUCT_QUANTITY_VARIABLE" => "quantity",
		"GIFTS_PRODUCT_PROPS_VARIABLE" => "prop",
		"GIFTS_SHOW_OLD_PRICE" => "N",
		"GIFTS_SHOW_DISCOUNT_PERCENT" => "Y",
		"GIFTS_SHOW_NAME" => "Y",
		"GIFTS_SHOW_IMAGE" => "Y",
		"GIFTS_MESS_BTN_BUY" => "Выбрать",
		"GIFTS_MESS_BTN_DETAIL" => "Подробнее",
		"GIFTS_PAGE_ELEMENT_COUNT" => "4",
		"GIFTS_CONVERT_CURRENCY" => "N",
		"GIFTS_HIDE_NOT_AVAILABLE" => "N"
	),
	false
);?>
</div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>