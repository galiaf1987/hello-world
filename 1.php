<?require_once($_SERVER['DOCUMENT_ROOT'] . "/bitrix/modules/main/include/prolog_before.php");
global $arrFilter;
$arrFilter['PROPERTY_SPECIALOFFER']=3;

Cmodule::IncludeModule('sale');
CModule::IncludeModule('catalog');
CModule::IncludeModule('iblock');

//CCatalog::PreGenerateXML("yandex");
//CCatalogExport::PreGenerateExport(1);

// $rs = CIBlockElement::GetList(array(), array("IBLOCK_ID"=>1, "PROPERTY_BRAND"=>"brand1"), false, false, array("ID", "PROPERTY_BRAND"));
// while($ar = $rs->GetNext()) {
// 	CIBlockElement::SetPropertyValuesEx($ar['ID'], $ar['IBLOCK_ID'], array('BRAND'=>'rifar'));
// }

// echo 'ok';

// $user = new CUser;
// $user->Authorize(1);