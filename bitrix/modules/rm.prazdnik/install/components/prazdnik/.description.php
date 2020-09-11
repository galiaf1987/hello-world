<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

$arComponentDescription = array(
	"NAME" => GetMessage("RM_COMPONENT_NAME"),
	"DESCRIPTION" => GetMessage("RM_COMPONENT_DESCRIPTION"),
	"ICON" => "/images/icon.gif",
	"CACHE_PATH" => "Y",
	"SORT" => 30,
	"PATH" => array(
		"ID" => "RM",
		"NAME" => GetMessage("RM"),
		"CHILD" => array(
			"ID" => "RM_PRAZD",
			"NAME" => GetMessage("RM_GROUP"),
			"SORT" => 30,
		),
	),
);
?>