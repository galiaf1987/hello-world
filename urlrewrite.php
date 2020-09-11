<?
$arUrlRewrite = array(
	array(
		"CONDITION" => "#^/bitrix/services/ymarket/#",
		"RULE" => "",
		"ID" => "",
		"PATH" => "/bitrix/services/ymarket/index.php",
	),
	array(
		"CONDITION" => "#^/otoplenie.store/catalog/#",
		"RULE" => "",
		"ID" => "bitrix:catalog",
		"PATH" => "/otoplenie.store/catalog/index.php",
	),
	array(
		"CONDITION" => "#^/otoplenie.store/sale/#",
		"RULE" => "",
		"ID" => "bitrix:news",
		"PATH" => "/otoplenie.store/sale/index.php",
	),
	array(
		"CONDITION" => "#^/otoplenie.store/news/#",
		"RULE" => "",
		"ID" => "bitrix:news",
		"PATH" => "/otoplenie.store/news/index.php",
	),
	array(
		"CONDITION" => "#^/communication/forum/#",
		"RULE" => "",
		"ID" => "bitrix:forum",
		"PATH" => "/communication/forum/index.php",
	),
	array(
		"CONDITION" => "#^/communication/blog/#",
		"RULE" => "",
		"ID" => "bitrix:blog",
		"PATH" => "/communication/blog/index.php",
	),
	array(
		"CONDITION" => "#^/personal/delivery/#",
		"RULE" => "",
		"ID" => "bitrix:sale.personal.profile",
		"PATH" => "/personal/delivery/index.php",
	),
	array(
		"CONDITION" => "#^/brands/([^/]+)/.*#",
		"RULE" => "XML_ID=\$1",
		"ID" => "",
		"PATH" => "/brands/detail.php",
	),
	array(
		"CONDITION" => "#^/content/gallery/#",
		"RULE" => "",
		"ID" => "bitrix:photogallery_user",
		"PATH" => "/content/gallery/index.php",
	),
	array(
		"CONDITION" => "#^/content/photo/#",
		"RULE" => "",
		"ID" => "bitrix:photogallery",
		"PATH" => "/content/photo/index.php",
	),
	array(
		"CONDITION" => "#^/catalog/#",
		"RULE" => "",
		"ID" => "bitrix:catalog",
		"PATH" => "/catalog/index.php",
	),
	array(
		"CONDITION" => "#^/useful/#",
		"RULE" => "",
		"ID" => "bitrix:news",
		"PATH" => "/useful/index.php",
	),
	array(
		"CONDITION" => "#^/action/#",
		"RULE" => "",
		"ID" => "bitrix:news",
		"PATH" => "/action/index.php",
	),
	array(
		"CONDITION" => "#^/news/#",
		"RULE" => "",
		"ID" => "bitrix:news",
		"PATH" => "/news/index.php",
	),
);

?>