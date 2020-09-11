<?
global $MESS;
$strPath2Lang = str_replace("\\", "/", __FILE__);
$strPath2Lang = substr($strPath2Lang, 0, strlen($strPath2Lang)-strlen("/install/index.php"));
include(GetLangFileName($strPath2Lang."/lang/", "/install/index.php"));

class aspro_mshop extends CModule {
	const solutionName	= 'mshop';
	const partnerName = 'aspro';
	const moduleClass = 'CMShop';

	var $MODULE_ID = "aspro.mshop";
	var $MODULE_VERSION;
	var $MODULE_VERSION_DATE;
	var $MODULE_NAME;
	var $MODULE_DESCRIPTION;
	var $MODULE_CSS;
	var $MODULE_GROUP_RIGHTS = "Y";

	function aspro_mshop(){
		$arModuleVersion = array();

		$path = str_replace("\\", "/", __FILE__);
		$path = substr($path, 0, strlen($path) - strlen("/index.php"));
		include($path."/version.php");

		$this->MODULE_VERSION = $arModuleVersion["VERSION"];
		$this->MODULE_VERSION_DATE = $arModuleVersion["VERSION_DATE"];
		$this->MODULE_NAME = GetMessage("SCOM_INSTALL_NAME_MSHOP"); 
		$this->MODULE_DESCRIPTION = GetMessage("SCOM_INSTALL_DESCRIPTION_MSHOP");
		$this->PARTNER_NAME = GetMessage("SPER_PARTNER");
		$this->PARTNER_URI = GetMessage("PARTNER_URI");
	}
	
	function checkValid(){
		return true;
	}

	function InstallDB($install_wizard = true){
		global $DB, $DBType, $APPLICATION;

		if(preg_match ( '/.bitrixlabs.ru/' , $_SERVER["HTTP_HOST"])){
			RegisterModuleDependences("main", "OnBeforeProlog", "aspro.mshop", "CMShop", "correctInstall");
		}

		RegisterModule("aspro.mshop"); 
		RegisterModuleDependences("main", "OnBeforeProlog", "aspro.mshop", "CMShop", "ShowPanel");
		
		return true;
	}

	function UnInstallDB($arParams = array()){
		global $DB, $DBType, $APPLICATION;
		
		UnRegisterModule("aspro.mshop");
		
		return true;
	}

	function InstallEvents(){
		RegisterModuleDependences("iblock", "OnAfterIBlockAdd", "aspro.mshop", "CMshopCache", "ClearTagIBlock");
		RegisterModuleDependences("iblock", "OnAfterIBlockUpdate", "aspro.mshop", "CMshopCache", "ClearTagIBlock");
		RegisterModuleDependences("iblock", "OnBeforeIBlockDelete", "aspro.mshop", "CMshopCache", "ClearTagIBlockBeforeDelete");
		RegisterModuleDependences("iblock", "OnAfterIBlockElementAdd", "aspro.mshop", "CMshopCache", "ClearTagIBlockElement");
		RegisterModuleDependences("iblock", "OnAfterIBlockElementUpdate", "aspro.mshop", "CMshopCache", "ClearTagIBlockElement");
		RegisterModuleDependences("iblock", "OnAfterIBlockElementDelete", "aspro.mshop", "CMshopCache", "ClearTagIBlockElement");
		RegisterModuleDependences("iblock", "OnAfterIBlockSectionAdd", "aspro.mshop", "CMshopCache", "ClearTagIBlockSection");
		RegisterModuleDependences("iblock", "OnAfterIBlockSectionUpdate", "aspro.mshop", "CMshopCache", "ClearTagIBlockSection");
		RegisterModuleDependences("iblock", "OnBeforeIBlockSectionDelete", "aspro.mshop", "CMshopCache", "ClearTagIBlockSectionBeforeDelete");

		RegisterModuleDependences("main", "OnBeforeUserRegister", "aspro.mshop", "CMShop", "OnBeforeUserUpdateHandler");
		RegisterModuleDependences("main", "OnBeforeUserAdd", "aspro.mshop", "CMShop", "OnBeforeUserUpdateHandler");
		RegisterModuleDependences("main", "OnBeforeUserUpdate", "aspro.mshop", "CMShop","OnBeforeUserUpdateHandler");
		RegisterModuleDependences("main", "OnEndBufferContent", "aspro.mshop", "CMShop", "InsertCounters");
		RegisterModuleDependences("sale", "OnSaleComponentOrderOneStepPersonType", "aspro.mshop", "CMShop", "OnSaleComponentOrderOneStepPersonTypeHandler");
		RegisterModuleDependences("iblock", "OnAfterIBlockElementUpdate", "aspro.mshop", "CMShop", "DoIBlockAfterSave");
		RegisterModuleDependences("iblock", "OnAfterIBlockElementAdd", "aspro.mshop", "CMShop", "DoIBlockAfterSave");
		RegisterModuleDependences("catalog", "OnPriceAdd", "aspro.mshop", "CMShop", "DoIBlockAfterSave");
		RegisterModuleDependences("catalog", "OnPriceUpdate", "aspro.mshop", "CMShop", "DoIBlockAfterSave");
		RegisterModuleDependences("catalog", "OnProductUpdate", "aspro.mshop", "CMShop", "setStockProduct");
		RegisterModuleDependences("catalog", "OnProductAdd", "aspro.mshop", "CMShop", "setStockProduct");

		RegisterModuleDependences("sender", "onPresetTemplateList", "aspro.mshop", "\Aspro\Solution\CAsproMarketing", "senderTemplateList");

		if(class_exists('\Bitrix\Main\EventManager')){
			$eventManager = \Bitrix\Main\EventManager::getInstance();
			$eventManager->registerEventHandler('sale', 'OnSaleOrderSaved', 'aspro.mshop', 'CMShop', 'BeforeSendEvent', 10);
		}
		
		return true;
	}

	function UnInstallEvents(){
		UnRegisterModuleDependences("iblock", "OnAfterIBlockAdd", "aspro.mshop", "CMshopCache", "ClearTagIBlock");
		UnRegisterModuleDependences("iblock", "OnAfterIBlockUpdate", "aspro.mshop", "CMshopCache", "ClearTagIBlock");
		UnRegisterModuleDependences("iblock", "OnBeforeIBlockDelete", "aspro.mshop", "CMshopCache", "ClearTagIBlockBeforeDelete");
		UnRegisterModuleDependences("iblock", "OnAfterIBlockElementAdd", "aspro.mshop", "CMshopCache", "ClearTagIBlockElement");
		UnRegisterModuleDependences("iblock", "OnAfterIBlockElementUpdate", "aspro.mshop", "CMshopCache", "ClearTagIBlockElement");
		UnRegisterModuleDependences("iblock", "OnAfterIBlockElementDelete", "aspro.mshop", "CMshopCache", "ClearTagIBlockElement");
		UnRegisterModuleDependences("iblock", "OnAfterIBlockSectionAdd", "aspro.mshop", "CMshopCache", "ClearTagIBlockSection");
		UnRegisterModuleDependences("iblock", "OnAfterIBlockSectionUpdate", "aspro.mshop", "CMshopCache", "ClearTagIBlockSection");
		UnRegisterModuleDependences("iblock", "OnBeforeIBlockSectionDelete", "aspro.mshop", "CMshopCache", "ClearTagIBlockSectionBeforeDelete");
		
		UnRegisterModuleDependences("main", "OnBeforeUserRegister", "aspro.mshop", "CMShop", "OnBeforeUserUpdateHandler");
		UnRegisterModuleDependences("main", "OnBeforeUserAdd", "aspro.mshop", "CMShop", "OnBeforeUserUpdateHandler");
		UnRegisterModuleDependences("main", "OnBeforeUserUpdate", "aspro.mshop", "CMShop","OnBeforeUserUpdateHandler");
		UnRegisterModuleDependences("main", "OnBeforeProlog", "aspro.mshop", "CMShop", "ShowPanel");
		UnRegisterModuleDependences("main", "OnEndBufferContent", "aspro.mshop", "CMShop", "InsertCounters");
		UnRegisterModuleDependences("sale", "OnSaleComponentOrderOneStepPersonType", "aspro.mshop", "CMShop", "OnSaleComponentOrderOneStepPersonTypeHandler");
		UnRegisterModuleDependences("iblock", "OnAfterIBlockElementUpdate", "aspro.mshop", "CMShop", "DoIBlockAfterSave");
		UnRegisterModuleDependences("iblock", "OnAfterIBlockElementAdd", "aspro.mshop", "CMShop", "DoIBlockAfterSave");
		UnRegisterModuleDependences("catalog", "OnPriceAdd", "aspro.mshop", "CMShop", "DoIBlockAfterSave");
		UnRegisterModuleDependences("catalog", "OnPriceUpdate", "aspro.mshop", "CMShop", "DoIBlockAfterSave");
		UnRegisterModuleDependences("catalog", "OnProductUpdate", "aspro.mshop", "CMShop", "setStockProduct");
		UnRegisterModuleDependences("catalog", "OnProductAdd", "aspro.mshop", "CMShop", "setStockProduct");

		UnRegisterModuleDependences("sender", "onPresetTemplateList", "aspro.mshop", "\Aspro\Solution\CAsproMarketing", "senderTemplateList");

		if(class_exists('\Bitrix\Main\EventManager')){
			$eventManager = \Bitrix\Main\EventManager::getInstance();
			$eventManager->unregisterEventHandler('sale', 'OnSaleOrderSaved', 'aspro.mshop', 'CMShop', 'BeforeSendEvent', 10);
		}
		
		return true;
	}
	
	function removeDirectory($dir){
		if($objs = glob($dir."/*")){
			foreach($objs as $obj){
				if(is_dir($obj)){
					CMShop::removeDirectory($obj);
				}
				else{
					if(!unlink($obj)){
						if(chmod($obj, 0777)){
							unlink($obj);
						}
					}
				}
			}
		}
		if(!rmdir($dir)){
			if(chmod($dir, 0777)){
				rmdir($dir);
			}
		}
	}

	function InstallFiles(){
		CopyDirFiles(__DIR__.'/admin/', $_SERVER['DOCUMENT_ROOT'].'/bitrix/admin', true);
		CopyDirFiles(__DIR__.'/css/', $_SERVER['DOCUMENT_ROOT'].'/bitrix/css/'.self::partnerName.'.'.self::solutionName, true, true);
		CopyDirFiles(__DIR__.'/js/', $_SERVER['DOCUMENT_ROOT'].'/bitrix/js/'.self::partnerName.'.'.self::solutionName, true, true);
		CopyDirFiles(__DIR__.'/images/', $_SERVER['DOCUMENT_ROOT'].'/bitrix/images/'.self::partnerName.'.'.self::solutionName, true, true);

		CopyDirFiles($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/aspro.mshop/install/components", $_SERVER["DOCUMENT_ROOT"]."/bitrix/components", true, true);
		CopyDirFiles($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/aspro.mshop/install/wizards", $_SERVER["DOCUMENT_ROOT"]."/bitrix/wizards", true, true);

		$this->InstallGadget();

		if(preg_match('/.bitrixlabs.ru/', $_SERVER["HTTP_HOST"])){
			@set_time_limit(0);
			require_once($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/fileman/include.php");
			CFileMan::DeleteEx(array("s1", "/bitrix/modules/aspro.mshop/install/wizards"));
			CFileMan::DeleteEx(array("s1", "/bitrix/modules/aspro.mshop/install/gadgets"));
		}

		return true;
	}

	function InstallPublic(){
	}

	function UnInstallFiles(){
		DeleteDirFilesEx("/bitrix/wizards/aspro/mshop/");

		DeleteDirFiles(__DIR__.'/admin/', $_SERVER['DOCUMENT_ROOT'].'/bitrix/admin');
		DeleteDirFilesEx('/bitrix/css/'.self::partnerName.'.'.self::solutionName.'/');
		DeleteDirFilesEx('/bitrix/js/'.self::partnerName.'.'.self::solutionName.'/');
		DeleteDirFilesEx('/bitrix/images/'.self::partnerName.'.'.self::solutionName.'/');

		$this->UnInstallGadget();

		return true;
	}

	function InstallGadget(){
		CopyDirFiles(__DIR__.'/gadgets/', $_SERVER['DOCUMENT_ROOT'].'/bitrix/gadgets/', true, true);

		$gadget_id = strtoupper(self::solutionName);
		$gdid = $gadget_id."@".rand();
		if(class_exists('CUserOptions')){
			$arUserOptions = CUserOptions::GetOption('intranet', '~gadgets_admin_index', false, false);
			if(is_array($arUserOptions) && isset($arUserOptions[0])){
				foreach($arUserOptions[0]['GADGETS'] as $tempid => $tempgadget){
					$p = strpos($tempid, '@');
					$gadget_id_tmp = ($p === false ? $tempid : substr($tempid, 0, $p));

					if($gadget_id_tmp == $gadget_id){
						return false;
					}
					if($tempgadget['COLUMN'] == 0){
						++$arUserOptions[0]['GADGETS'][$tempid]['ROW'];
					}
				}
				$arUserOptions[0]['GADGETS'][$gdid] = array('COLUMN' => 0, 'ROW' => 0);
				CUserOptions::SetOption('intranet', '~gadgets_admin_index', $arUserOptions, false, false);
			}
		}

		return true;
	}

	function UnInstallGadget(){
		$gadget_id = strtoupper(self::solutionName);
		if(class_exists('CUserOptions')){
			$arUserOptions = CUserOptions::GetOption('intranet', '~gadgets_admin_index', false, false);
			if(is_array($arUserOptions) && isset($arUserOptions[0])){
				foreach($arUserOptions[0]['GADGETS'] as $tempid => $tempgadget){
					$p = strpos($tempid, '@');
					$gadget_id_tmp = ($p === false ? $tempid : substr($tempid, 0, $p));

					if($gadget_id_tmp == $gadget_id){
						unset($arUserOptions[0]['GADGETS'][$tempid]);
					}
				}
				CUserOptions::SetOption('intranet', '~gadgets_admin_index', $arUserOptions, false, false);
			}
		}

		DeleteDirFilesEx('/bitrix/gadgets/'.self::partnerName.'/'.self::solutionName.'/');

		return true;
	}

	function DoInstall(){
		global $APPLICATION, $step;

		$this->InstallFiles();
		$this->InstallDB(false);
		$this->InstallEvents();
		$this->InstallPublic();

		$APPLICATION->IncludeAdminFile(GetMessage("SCOM_INSTALL_TITLE"), $_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/aspro.mshop/install/step.php");
	}

	function DoUninstall(){
		global $APPLICATION, $step;

		$this->UnInstallDB();
		$this->UnInstallFiles();
		$this->UnInstallEvents();
		$APPLICATION->IncludeAdminFile(GetMessage("SCOM_UNINSTALL_TITLE"), $_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/aspro.mshop/install/unstep.php");
	}
}
?>