<?
	include __DIR__.'/../../catalog.section/gallery/result_modifier.php';

	CModule::IncludeModule('iblock');

	$nArItems = array();
	$cache = array();
	foreach($arResult["ITEMS"] as $arItem) {
		if(isset($cache[$arItem["IBLOCK_SECTION_ID"]])) {
			$pid = $cache[$arItem["IBLOCK_SECTION_ID"]];
		} else {
			$rs =  CIBlockSection::GetNavChain($arItem["IBLOCK_ID"], $arItem["IBLOCK_SECTION_ID"]);
			$ar = $rs->GetNext();
			$cache[$arItem["IBLOCK_SECTION_ID"]] = $pid = $ar["ID"];
		}
		if($pid==249) {
			$nArItems[]=$arItem;
		}
	}
	$arResult["ITEMS"] = $nArItems;
?>