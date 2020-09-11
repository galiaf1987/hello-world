<?
CModule::AddAutoloadClasses(
	'blackbutterfly.snow',
	array(
		'BLACKSnow' => 'classes/general/blacksnow.php',
	)
);
Class Csnow
{
	function OnBuildGlobalMenu(&$aGlobalMenu, &$aModuleMenu)
	{
		if($GLOBALS['APPLICATION']->GetGroupRight("main") < "R")
			return;

		$MODULE_ID = 'blackbutterfly.snow';
		$aMenu = array(
			//"parent_menu" => "global_menu_services",
			"parent_menu" => "global_menu_settings",
			"section" => $MODULE_ID,
			"sort" => 50,
			"text" => "snow",
			"title" => "",
//			"url" => "partner_modules.php?module=".$MODULE_ID,
			"icon" => "",
			"page_icon" => "",
			"items_id" => $MODULE_ID."_items",
			"more_url" => array(),
			"items" => array()
		);

		//$aModuleMenu[] = $aMenu;
	}
}
?>