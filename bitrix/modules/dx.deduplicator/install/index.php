<?
global $MESS;
IncludeModuleLangFile(__FILE__); 

Class dx_deduplicator extends CModule
{
	var $MODULE_ID = "dx.deduplicator";
	var $MODULE_VERSION;
	var $MODULE_VERSION_DATE;
	var $MODULE_NAME;
	var $MODULE_DESCRIPTION;

	function dx_deduplicator()
	{
		$arModuleVersion = array();

		include(__DIR__.'/version.php');

		$this->MODULE_VERSION = $arModuleVersion["VERSION"];
		$this->MODULE_VERSION_DATE = $arModuleVersion["VERSION_DATE"];
		
		$this->PARTNER_NAME = GetMessage("PARTNER_NAME");
		$this->PARTNER_URI = "mailto:gdimon@inbox.ru";

		$this->MODULE_NAME = GetMessage("CC_MODULE_NAME");
		$this->MODULE_DESCRIPTION = GetMessage("CC_MODULE_DESC");
	}

	function InstallDB($arParams = array())
	{
		global $DB, $DBType;
		$DB->RunSQLBatch($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/dx.deduplicator/install/db/".$DBType."/install.sql");
		return true;
	}

	function UnInstallDB($arParams = array())
	{
		return true;
	}

	function InstallEvents()
	{
		RegisterModule($this->MODULE_ID);
		
		//RegisterModuleDependences("main", "OnFileSave", $this->MODULE_ID, "DxDeduplicator", "OnFileSaveHandler", 14000);
		
		return true;
	}

	function UnInstallEvents()
	{
		COption::RemoveOption($this->MODULE_ID);
		
		//UnRegisterModuleDependences("main", "OnFileSave", $this->MODULE_ID, "DxDeduplicator", "OnFileSaveHandler");
		
		UnRegisterModule($this->MODULE_ID);
  
		return true;
	}

	function InstallFiles($arParams = array())
	{
		//CopyDirFiles($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/dx.minify/install/admin", $_SERVER["DOCUMENT_ROOT"]."/bitrix/admin", true, true);
		return true;
	}

	function UnInstallFiles()
	{
		//DeleteDirFiles($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/dx.minify/install/admin/", $_SERVER["DOCUMENT_ROOT"]."/bitrix/admin");
		return true;
	}

	function DoInstall()
	{
		global $DOCUMENT_ROOT, $APPLICATION;
		$this->InstallEvents();
		$this->InstallDB();
		
		CAgent::AddAgent(
			"DxDeduplicator::deduplicate();",	// имя функции
			"dx.deduplicator",					// идентификатор модуля
			"N",							// агент не критичен к кол-ву запусков
			3600,							// интервал запуска - 1 сутки
			"",								// дата первой проверки - текущее
			"Y",							// агент активен
			"",								// дата первого запуска - текущее
			30
		);
		
		$APPLICATION->IncludeAdminFile(GetMessage("RESIZER_INSTALL_TITLE"), $DOCUMENT_ROOT."/bitrix/modules/dx.deduplicator/install/step.php");
	}

	function DoUninstall()
	{
		$this->UnInstallEvents();
		
		CAgent::RemoveAgent("DxDeduplicator::deduplicate();", "dx.deduplicator");
	}
}
?>