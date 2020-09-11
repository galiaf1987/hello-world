<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
?><?$APPLICATION->IncludeComponent(
	"dx:highloadblock.view",
	"brand",
	Array(
		"BLOCK_ID" => "2",
		"XML_ID" => $_REQUEST['XML_ID'],
		"LIST_URL" => "/brands/",
		"SET_404"=>"Y"
	)
);?><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>