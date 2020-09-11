<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
CModule::IncludeModule('iblock');


/*$rs = CIBlockSection::GetList(array(), array("IBLOCK_ID"=>36, ">UF_BASKET_DISCOUNT"=>0));
var_dump($rs->GetNext());*/

//var_dump(COption::SetOptionString(CMShop::moduleID, "SITE_INSTALLED", "Y", "s2"));

/*$rs = CIBlockElement::GetList(array(), array("IBLOCK_ID"=>36, "SECTION_ID"=>922, "INCLUDE_SUBSECTIONS"=>"Y"), false, false, array("ID", "NAME", "PROPERTY_WBP"));
while($ar = $rs->GetNext()) {
	var_dump($ar["NAME"]);
	CCatalogProduct::Update($ar["ID"], array("QUANTITY"=>0));
}*/

/*$CIBlockElement = new CIBlockElement;
$rs = CIBlockElement::GetList(array(), array("IBLOCK_ID"=>1), false, false, array("ID", "NAME"));
while($ar = $rs->GetNext()) {
	CIBlockElement:: SetPropertyValues($ar["ID"], 1, $ar["ID"], "CODE");
	//var_dump($ar);die();
}*/

?> 
123

 <?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>