<?
$module_id = 'blackbutterfly.snow';
IncludeModuleLangFile($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/'.$module_id.'/options.php');
require_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/'.$module_id.'/CModuleOptions.php');
require_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/'.$module_id.'/include.php');
$showRightsTab = false;

$arTabs = array(
   array(
      'DIV' => 'edit1',
      'TAB' => GetMessage("BBSNOW_SETTINGS"),
      'ICON' => '',
      'TITLE' => GetMessage("BBSNOW_SETTINGS")
   )
);
$arGroups = array(
   'BBSNOW_MAIN' => array('TITLE' => GetMessage("BBSNOW_MAIN"), 'TAB' => 0),
   'BBSNOW_GIRLYANDA' => array('TITLE' => GetMessage("BBSNOW_GIRLYANDA"), 'TAB' => 0),
   'BBSNOW_SCREENSERVER' => array('TITLE' => GetMessage("BBSNOW_SCREENSERVER"), 'TAB' => 0),
);
$arSel = array(
	'REFERENCE_ID' => array(0,1,2,3), 
	'REFERENCE' => array(GetMessage("BBSNOW_STYLE0"),GetMessage("BBSNOW_STYLE1"),GetMessage("BBSNOW_STYLE2"),GetMessage("BBSNOW_STYLE3"))
);
$arOptions = array(
	'JQUERY' => array(
      'GROUP' => 'BBSNOW_MAIN',
      'TITLE' => GetMessage("BBSNOW_JQUERY"),
      'TYPE' => 'CHECKBOX',
      'SORT' => '1'
   ),
   'SNOWSTYLE' => array(
      'GROUP' => 'BBSNOW_MAIN',
      'TITLE' => GetMessage("BBSNOW_STYLE"),
      'TYPE' => 'SELECT',
      'VALUES' => $arSel,
      'SORT' => '2',  
      'NOTES' => GetMessage("BBSNOW_STYLE_DESCRIPTION")
   ),

   'SNOWSPEED' => array(
      'GROUP' => 'BBSNOW_MAIN',
      'TITLE' => GetMessage("BBSNOW_SPEED"),
      'TYPE' => 'STRING',
      'DEFAULT' => '7000',
	  'SIZE' => '80',
      'SORT' => '3',
      'NOTES' => GetMessage("BBSNOW_SPEED_DESCRIPTION")
   ),
	'BBSNOW_GIRLYANDA_ACT' => array(
      'GROUP' => 'BBSNOW_GIRLYANDA',
      'TITLE' => GetMessage("BBSNOW_GIRLYANDA_ACT"),
      'TYPE' => 'CHECKBOX',
      'SORT' => '1'
   ),  
	'BBSNOW_SCREENSERVER_ACT' => array(
      'GROUP' => 'BBSNOW_SCREENSERVER',
      'TITLE' => GetMessage("BBSNOW_SCREENSERVER_ACT"),
      'TYPE' => 'CHECKBOX',
      'SORT' => '1'
   ), 
   
);

/*
Конструктор класса CModuleOptions
$module_id - ID модуля
$arTabs - массив вкладок с параметрами
$arGroups - массив групп параметров
$arOptions - собственно сам массив, содержащий параметры
$showRightsTab - определяет надо ли показывать вкладку с настройками прав доступа к модулю ( true / false )
*/

$opt = new CModuleOptions($module_id, $arTabs, $arGroups, $arOptions, $showRightsTab);
$opt->ShowHTML();

?>