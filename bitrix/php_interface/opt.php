<?

class DXOpt {
	function getNavChain($arSec) {
		$cache = new CPHPCache();
		$cache_time = 3600;
		$cache_id = $arSec['ID'].'-'.$arSec['LEFT_MARGIN'].'-'.$arSec['RIGHT_MARGIN'];
		$cache_path = '/dxopt.getnavchain';
		if ($cache_time > 0 && $cache->InitCache($cache_time, $cache_id, $cache_path)) {
			$res = $cache->GetVars();
		} elseif($cache->StartDataCache()) {
			$nav = CIBlockSection::GetList(array('LEFT_MARGIN'=>'ASC'), array('IBLOCK_ID'=>$arSec['IBLOCK_ID'], '<=LEFT_BORDER'=>$arSec['LEFT_MARGIN'], '>=RIGHT_BORDER'=>$arSec['RIGHT_MARGIN'], 'CHECK_PERMISSIONS'=>'N'), false, array('ID', 'NAME', 'CODE', 'SECTION_PAGE_URL', 'UF_DELIVERY', 'UF_DELIVERY_PRC', 'UF_DELIVERY_FREE', 'UF_SALES_NOTES', 'UF_DELIVERY_SROK', 'UF_SHOW_OLD_PRICE', 'UF_BASKET_DISCOUNT', 'UF_MOUNTING'));
			while($arSectionPath = $nav->GetNext()){
				$res[]=$arSectionPath;
			}
			$cache->EndDataCache($res);
		}
		return $res;
	}
	function htmlTidy($html) {
		$config = array(
			'indent'         => true,
			'output-xhtml'   => true,
			'wrap'           => 200
		);

		// Tidy
		$tidy = new tidy;
		$tidy->parseString($html, $config, 'utf8');
		$tidy->cleanRepair();
		return trim($tidy);
	}
}

?>
