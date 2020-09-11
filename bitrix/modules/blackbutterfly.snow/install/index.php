<?
IncludeModuleLangFile(__FILE__);
Class blackbutterfly_snow extends CModule {
	const MODULE_ID = 'blackbutterfly.snow';
	var $MODULE_ID = 'blackbutterfly.snow';
	var $MODULE_VERSION = '1.0';
	var $MODULE_VERSION_DATE = '2013-10-03';
	var $MODULE_NAME;
	var $MODULE_DESCRIPTION;

	function __construct()
	{
		$arModuleVersion = array();
		include(dirname(__FILE__)."/version.php");
			$this->MODULE_VERSION = $arModuleVersion["VERSION"];
			$this->MODULE_VERSION_DATE = $arModuleVersion["VERSION_DATE"];
			$this->MODULE_NAME           = GetMessage( 'DD_BM_MODULE_NAME_SNOW' );
			$this->MODULE_DESCRIPTION    = GetMessage( 'DD_BM_MODULE_DESC_SNOW' );
			$this->PARTNER_NAME = GetMessage("DD_BM_MODULE_PARTNER_NAME");
			$this->PARTNER_URI = GetMessage("DD_BM_MODULE_PARTNER_URI");
	}

	/**
	 * Устанавливаем модуль
	 */
	public function DoInstall() {
		RegisterModule(self::MODULE_ID);
		RegisterModuleDependences("main", "OnBeforeEndBufferContent", self::MODULE_ID, "BLACKSnow", "INITSNOW", "100");
		if( $this->InstallDB() and $this->InstallFiles() ) {
			return true;
		} else {
			return false;
		}
	}
	/**
	 * Удаляем модуль
	 */
	public function DoUninstall() {
		UnRegisterModule(self::MODULE_ID);
		UnRegisterModuleDependences("main", "OnBeforeEndBufferContent", self::MODULE_ID, "BLACKSnow", "INITSNOW", "100");
		if( $this->UnInstallDB() and $this->UnInstallFiles() ) {
			return true;
		} else {
			return false;
		}
	}
	/**
	 * Копируем файлы административной части
	 *
	 * @return bool
	 */
	public function InstallFiles() {
		CopyDirFiles($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/". self::MODULE_ID."/install/snow", $_SERVER["DOCUMENT_ROOT"]."/bitrix/js/snow", true, true);
	  	return true;
	}

	/**
	 * Удаляем файлы
	 *
	 * @return bool
	 */
	public function UnInstallFiles() {
		return true;
	}

	/**
	 * Добавляем таблицы в БД
	 *
	 * @return bool
	 */
	public function InstallDB() {
		return true;
	}

	/**
	 * Удаляем таблицы из БД
	 *
	 * @return bool
	 */
	public function UnInstallDB() {
		return true;
	}
}
?>