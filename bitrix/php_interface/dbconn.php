<?
define("DBPersistent", false);
$DBType = "mysql";
$DBHost = "db";
$DBLogin = "bitrix";
$DBPassword = "123";
$DBName = "bitrix";
$DBDebug = false;
$DBDebugToFile = false;
define("MYSQL_TABLE_TYPE", "INNODB");
define("BX_USE_MYSQLI", true);

define("DELAY_DB_CONNECT", true);
define("CACHED_b_file", 0);
define("CACHED_b_file_bucket_size", 1);
define("CACHED_b_lang", 3600);
define("CACHED_b_option", 3600);
define("CACHED_b_lang_domain", 3600);
define("CACHED_b_site_template", 3600);
define("CACHED_b_event", 3600);
define("CACHED_b_agent", 3660);
define("CACHED_menu", 3600);

define("BX_UTF", true);
define("BX_FILE_PERMISSIONS", 0644);
define("BX_DIR_PERMISSIONS", 0755);
@umask(~BX_DIR_PERMISSIONS);
define("BX_DISABLE_INDEX_PAGE", false);

define("BX_COMP_MANAGED_CACHE", true);
?>