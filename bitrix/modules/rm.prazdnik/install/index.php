<?
IncludeModuleLangFile(__FILE__);

class rm_prazdnik extends CModule
{
	var $MODULE_ID = "rm.prazdnik";
	var $MODULE_VERSION;
	var $MODULE_VERSION_DATE;
	var $MODULE_NAME;
	var $MODULE_DESCRIPTION;

	function rm_prazdnik()
	{        		
		$arModuleVersion = array();
		$path = str_replace("\\", "/", __FILE__);
		$path = substr($path, 0, strlen($path) - strlen("/index.php"));
		include($path."/version.php");

		$this->MODULE_VERSION = $arModuleVersion["VERSION"];
		$this->MODULE_VERSION_DATE = $arModuleVersion["VERSION_DATE"];
		$this->PARTNER_NAME = GetMessage("RM_COMPANY_NAME");
		$this->PARTNER_URI = "http://rmmgroup.ru/";
		$this->MODULE_NAME = GetMessage("RM_MODULE_NAME");
		$this->MODULE_DESCRIPTION = GetMessage("RM_MODULE_DESCRIPTION");
		return true;
	}

	function DoInstall()
	{
		CopyDirFiles(
			$_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/rm.prazdnik/install/components",
			$_SERVER["DOCUMENT_ROOT"]."/bitrix/components/rm", true, true);
		RegisterModule($this->MODULE_ID);
	}

	function DoUninstall()
	{
		UnRegisterModule($this->MODULE_ID);
		DeleteDirFilesEx("/bitrix/components/rm/prazdnik");
	}
}
?>