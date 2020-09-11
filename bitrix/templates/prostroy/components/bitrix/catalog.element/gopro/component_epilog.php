<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true) die();

if(!CModule::IncludeModule('redsign.devfunc'))
	return;

// accessories
$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH.'/omponents/bitrix/catalog.section/light/style.css',true);
$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH.'/omponents/bitrix/catalog.section/light/script.js',true);

// grouped props
$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH.'/omponents/redsign/grupper.list/gopro/style.css',true);

// set
$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH.'/omponents/bitrix/catalog.set.constructor/gopro/style.css',true);
$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH.'/omponents/bitrix/catalog.set.constructor/gopro/script.js',true);

$this->initComponentTemplate();
$this->__template->SetViewTarget('header_h1');?>
   <noindex><a rel="nofollow" href="?print=Y" class="btn-print"><i class="icn-print"></i> Распечатать</a></noindex>
<?$this->__template->EndViewTarget();

//if($_SERVER["REMOTE_ADDR"]=="31.130.139.96") {
	$rs = CIBlockElement::GetList(array(), array("IBLOCK_ID"=>$arParams["IBLOCK_ID"], "ID"=>$arResult["ID"]), false, array("nTopCount"=>1), array("DETAIL_PAGE_URL"));
	$ar = $rs->GetNext();
	if($_SERVER["REDIRECT_URL"] && $_SERVER["REDIRECT_URL"]!=$ar["DETAIL_PAGE_URL"]) {
		LocalRedirect($ar["DETAIL_PAGE_URL"]);
	}
//}
if($arResult['FIRST_PIC_DETAIL']) {
	$APPLICATION->SetPageProperty('og:image', $arResult['FIRST_PIC_DETAIL']['SRC']);
}
