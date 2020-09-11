<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();?><?
IncludeModuleLangFile(__FILE__);

$psTitle = GetMessage("VAMPIRUS.YANDEX_TITLE");
$psDescription = GetMessage("VAMPIRUS.YANDEX_DESCRIPTION");

$arPSCorrespondence = array(
		"SHOULD_PAY" => array(
				"NAME" => GetMessage("VAMPIRUS.YANDEX_SHOULD_PAY"),
				"DESCR" => GetMessage("VAMPIRUS.YANDEX_SHOULD_PAY_DESCR"),
				"VALUE" => "SHOULD_PAY",
				"TYPE" => "ORDER"
			),
		"ORDER_ID" => array(
				"NAME" => GetMessage("VAMPIRUS.YANDEX_ORDER_ID"),
				"DESCR" => GetMessage("VAMPIRUS.YANDEX_ORDER_ID_DESCR"),
				"VALUE" => "ID",
				"TYPE" => "ORDER"
			),
		"CURRENCY" => array(
				"NAME" => GetMessage("VAMPIRUS.YANDEX_CURRENCY"),
				"DESCR" => GetMessage("VAMPIRUS.YANDEX_CURRENCY_DESCR"),
				"VALUE" => "CURRENCY",
				"TYPE" => "ORDER"
			),
		"DOMAIN" => array(
				"NAME" => GetMessage("VAMPIRUS.YANDEX_DOMAIN"),
				"DESCR" => GetMessage("VAMPIRUS.YANDEX_DOMAIN_DESCR",Array('#DOMAIN#'=>$_SERVER['SERVER_NAME'])),
				"VALUE" => "",
				"TYPE" => ""
			),
		"CARD" => array(
				"NAME" => GetMessage("VAMPIRUS.YANDEX_CARD"),
				"DESCR" => GetMessage("VAMPIRUS.YANDEX_CARD_DESCR"),
				"VALUE" => "0",
				"TYPE" => ""
			),
	);
?>