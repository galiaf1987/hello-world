<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

$arPrazdnik = array(
	"/bitrix/components/rm/prazdnik/images/9may.gif" => GetMessage("PR1"),
	"/bitrix/components/rm/prazdnik/images/8marta.png" => GetMessage("PR2"),
	"/bitrix/components/rm/prazdnik/images/elka.png" => GetMessage("PR3"),
);

$arComponentParameters = array(
	"GROUPS" => array(
	),
	"PARAMETERS" => array(

		"CACHE_TIME"  =>  Array("DEFAULT"=>36000000),
		"RM_URL" => array(
			"PARENT" => "DATA_SOURCE",
			"NAME" => GetMessage("RM_URL"),
			"TYPE" => "STRING",
			"DEFAULT" => "",
		),
		"RM_URL_TITLE" => array(
			"PARENT" => "DATA_SOURCE",
			"NAME" => GetMessage("RM_URL_TITLE"),
			"TYPE" => "STRING",
			"DEFAULT" => GetMessage("FRAZA"),
		),
		"PATH_TO_IMAGE" => array(
			"PARENT" => "DATA_SOURCE",
			"NAME" => GetMessage("PATH_TO_IMAGE"),
			"TYPE" => "STRING",
			"DEFAULT" => "",
		),		
		"RM_PTOP" => array(
			"PARENT" => "VISUAL",
			"NAME" => GetMessage("RM_PTOP"),
			"TYPE" => "STRING",
			"DEFAULT" => "0",
		),
			"RM_PLEFT" => array(
			"PARENT" => "VISUAL",
			"NAME" => GetMessage("RM_PLEFT"),
			"TYPE" => "STRING",
			"DEFAULT" => "0",
		),	
		
	),
);
		$arComponentParameters["PARAMETERS"]["PRAZDNIK"] = array(
			"PARENT" => "VISUAL",
			"NAME" => GetMessage("PRAZDNIK"),
			"TYPE" => "LIST",
			"VALUES" => $arPrazdnik,
			"DEFAULT" => "/bitrix/components/rm/prazdnik/images/9may.gif",
		);
?>
