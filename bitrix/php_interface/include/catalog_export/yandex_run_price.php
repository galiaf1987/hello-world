<?
//echo "change price\n";
function change_price($price, $arAvailGroups, $fileName) {
	global $CACHE_MANAGER;
	//var_dump($arAvailGroups);die();
	$rs = CIBlockElement::GetList(array(), array("IBLOCK_ID"=>36, "ACTIVE"=>"Y", "GLOBAL_ACTIVE"=>"Y"), false, false, array("ID", "NAME", "IBLOCK_SECTION_ID", "PROPERTY_PRICE_".$price, "CATALOG_GROUP_1"));
	while($ar = $rs->GetNext()) {
		$newprice = $ar['PROPERTY_PRICE_'.$price.'_VALUE'];
		$koef = $arAvailGroups[(int)$ar['IBLOCK_SECTION_ID']]['UF_PRICE_KOEF'];
		//var_dump($koef);die();
		if($koef && $price == 'GEN') {
			$newprice *= 1 + $koef/100;
		}
		$newprice = round($newprice, 2);
		if($newprice != $ar['CATALOG_PRICE_1'] && $newprice > 0) {
			//var_dump($ar['NAME'], $ar['IBLOCK_SECTION_ID'], $koef, $ar['CATALOG_PRICE_1'], $newprice);
			//var_dump($ar, $arAvailGroups[$ar['IBLOCK_SECTION_ID']], $koef, $newprice);die();
			$arFields = Array(
				"PRICE" => $newprice
			);

			$res = CPrice::GetList(
				array(),
				array(
						"PRODUCT_ID" => $ar["ID"],
						"CATALOG_GROUP_ID" => 1
					),
				false,
				array("nTopCount"=>1),
				array("ID")
			);
			if ($arr = $res->Fetch()) {
				CPrice::Update($arr["ID"], $arFields);
			}
		} /*else if($koef) {
			var_dump($ar['NAME'], $ar['IBLOCK_SECTION_ID'], $koef, $ar['CATALOG_PRICE_1'], $newprice);
		}*/
		//var_dump($ar);die();
		//unset($ar, $arr, $res);
	}
	unset($rs);
	if($arFields) {
		CIBlock::clearIblockTagCache(36);
		$CACHE_MANAGER->ClearByTag('iblock_id_36');
		$CACHE_MANAGER->ClearByTag('iblock_find');
		BXClearCache(true, "/shop/");
		BXClearCache(true, "/cat.el/");
		BXClearCache(true, "/iblock/");
		BXClearCache(true, "/");
	}
	
	$fh = fopen($fileName, 'wb');
	fwrite($fh, $price);
	fclose($fh);
}
if($IBLOCK_ID == 36) {
	$rs = CIBlockElement::GetList(array(), array("IBLOCK_ID"=>36, "ACTIVE"=>"Y", "GLOBAL_ACTIVE"=>"Y", "PROPERTY_PRICE_GEN"=>false), false, false, array("ID", "CATALOG_GROUP_1", "PROPERTY_PRICE_GEN"));
	while($ar = $rs->GetNext()) {
		if(!$ar["PROPERTY_PRICE_GEN_VALUE"]) {
			CIBlockElement::SetPropertyValues($ar["ID"], 36, $ar['CATALOG_PRICE_1'], "PRICE_GEN");
		}
	}
	
		$arAvailGroups2 = array();
		$filter = array("IBLOCK_ID"=>$IBLOCK_ID, "ACTIVE"=>"Y", "IBLOCK_ACTIVE"=>"Y", "GLOBAL_ACTIVE"=>"Y");
		$sectionIterator = CIBlockSection::GetList(array("LEFT_MARGIN"=>"ASC"), $filter, false, array('ID', 'IBLOCK_SECTION_ID', 'UF_PRICE_KOEF'));
		while ($section = $sectionIterator->Fetch())
		{
			$section["ID"] = (int)$section["ID"];
			$section["IBLOCK_SECTION_ID"] = (int)$section["IBLOCK_SECTION_ID"];
			$arAvailGroups2[$section["ID"]] = $section;
		}
		foreach ($arAvailGroups2 as &$value) {
			if($value['UF_PRICE_KOEF']==0) {
				$tmp=$value;
				while($tmp['IBLOCK_SECTION_ID']>0) {
					$tmp = $arAvailGroups2[$tmp['IBLOCK_SECTION_ID']];
					if($tmp['UF_PRICE_KOEF']<>0) {
						$value['UF_PRICE_KOEF'] = $tmp['UF_PRICE_KOEF'];
						break;
					}
				}
			}
		}
	
	change_price($price, $arAvailGroups2, $fileName);
}
//echo "change price ok\n";
?>