<?
class DXSitemap{	private $SiteMap;	private $IndSiteMap;	public $module_id = "byteeightlab.sitemap";	function OpenSitemap($type=""){		$doc = new domDocument("1.0", "utf-8");		if($type=="index") $root = $doc->createElement("sitemapindex");		else $root = $doc->createElement("urlset");		$root->setAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');		$doc->appendChild($root);			return $doc;	}
	function AddField(&$doc,$loc,$lastmod=false,$changefreq="daily",$priority="0.5"){		$arrchangefreq = array("always","hourly","daily","weekly","monthly","yearly","never");		$loc = trim($loc);		if($loc!=''){			if(!$lastmod) $lastmod = date("c",time()-(date("H",time())*60*60+date("i",time())*60+date("s",time())));			else $lastmod = date("c",MakeTimeStamp($lastmod));			if($doc->lastChild->localName=='sitemapindex'){				$sitemap = $doc->createElement("sitemap");				$loc = $doc->createElement("loc",$loc); 				$sitemap->appendChild($loc);				$lastmod = $doc->createElement("lastmod",$lastmod); 				$sitemap->appendChild($lastmod);				$doc->lastChild->appendChild($sitemap);					} else {				if(!isset($arrchangefreq[$changefreq])) $changefreq = "daily";				if(trim($priority)!='') { 					$priority = number_format(floatval($priority),1,'.',''); 					if($priority>=1||$priority<=0||$priority=='') $priority = '0.5';				} else $priority = '0.5';							$url = $doc->createElement("url");				$loc = $doc->createElement("loc",$loc); 				$url->appendChild($loc);				$lastmod = $doc->createElement("lastmod",$lastmod); 				$url->appendChild($lastmod);				$changefreq = $doc->createElement("changefreq",$changefreq); 				$url->appendChild($changefreq);				$priority = $doc->createElement("priority",$priority); 				$url->appendChild($priority);								$doc->lastChild->appendChild($url);						}		}	}	function CloseSitemap(&$doc,$name) {		$doc->save($_SERVER["DOCUMENT_ROOT"].$name); unset($doc);	}
	function StartGenerate() {		$INDEX = true;		$today = date("c",time()-(date("H",time())*60*60+date("i",time())*60+date("s",time())));		if($INDEX) $this->IndSiteMap = $this->OpenSitemap("index");		$this->SiteMap = $this->OpenSitemap();	}		function FinishGenerate() {		$URL = 'http://'.$_SERVER['HTTP_HOST'];		$NAME = 'sitemap';		$PATH = '/';		$POSTFIX = '_';		$INDEX = true;		if($INDEX){			if($this->SiteMap->lastChild->childNodes->length>0){				$this->SiteMapName = $PATH.$NAME.$POSTFIX.$this->IndSiteMap->lastChild->childNodes->length.'.xml';				$this->CloseSitemap($this->SiteMap,$this->SiteMapName);				$this->AddField($this->IndSiteMap,$URL.$this->SiteMapName);				}			$this->CloseSitemap($this->IndSiteMap,$PATH.$NAME.'.xml');		}else if($this->SiteMap->lastChild->childNodes->length>0){			$this->CloseSitemap($this->SiteMap,$PATH.$NAME.'.xml');				}	}		function GenerateElementIB($IBLOCK_ID, $LAST_MOD = "TIMESTAMP_X", $CHANGEFREQ = "daily", $PRIORITY = 0.5) {		$URL = 'http://'.$_SERVER['HTTP_HOST'];				CModule::IncludeModule('iblock');								$arSort = $arFilter = $arSelect = Array();								$arSort["SORT"] = "ASC";				$arFilter["IBLOCK_ID"] = $IBLOCK_ID;				$arFilter["ACTIVE"] = "Y";				$arFilter["ACTIVE_DATE"] = "Y";								$arSelect[] = "DETAIL_PAGE_URL";				if($LAST_MOD) $arSelect[] = $LAST_MOD;								$res = CIBlockElement::GetList($arSort,$arFilter,false,false,$arSelect);				while($ob = $res->GetNextElement()) {					$arFields = $ob->GetFields();					if($LAST_MOD) $LASTMOD = $arFields[$LAST_MOD];					else $LASTMOD = false;					$this->AddField($this->SiteMap,$URL.$arFields["DETAIL_PAGE_URL"],$LASTMOD,$CHANGEFREQ,$PRIORITY);					$this->CheckFileSize();				}		}		function GenerateSectionIB($IBLOCK_ID, $LAST_MOD = "TIMESTAMP_X", $CHANGEFREQ = "daily", $PRIORITY = 0.5) {		$URL = 'http://'.$_SERVER['HTTP_HOST'];				CModule::IncludeModule('iblock');								$arSort = $arFilter = $arSelect = Array();								$arSort["LEFT_MARGIN"] = "ASC";				$arFilter["IBLOCK_ID"] = $IBLOCK_ID;				$arFilter["ACTIVE"] = "Y";				$arFilter["ACTIVE_DATE"] = "Y";								$arSelect[] = "SECTION_PAGE_URL";				if($LAST_MOD) $arSelect[] = $LAST_MOD;								$res = CIBlockSection::GetList($arSort,$arFilter,false,$arSelect);				while($ob = $res->GetNextElement()) {					$arFields = $ob->GetFields();					if($LAST_MOD) $LASTMOD = $arFields[$LAST_MOD];					else $LASTMOD = false;					$this->AddField($this->SiteMap,$URL.$arFields["SECTION_PAGE_URL"],$LASTMOD,$CHANGEFREQ,$PRIORITY);					$this->CheckFileSize();				}	}		function CheckFileSize() {		$URL = 'http://'.$_SERVER['HTTP_HOST'];		$NAME = 'sitemap';		$PATH = '/';		$POSTFIX = '_';		$INDEX = true;					if($INDEX&&(mb_strlen($this->SiteMap->saveXML(),'8bit')>1000000||$this->SiteMap->lastChild->childNodes->length>10000)){						$this->SiteMapName = $PATH.$NAME.$POSTFIX.$this->IndSiteMap->lastChild->childNodes->length.'.xml';						$this->CloseSitemap($this->SiteMap,$this->SiteMapName);						$this->AddField($this->IndSiteMap,$URL.$this->SiteMapName);						$this->SiteMap = $this->OpenSitemap();					}		}		function GenerateFromMenu($ROOT_MENU_TYPE = 'tpanel', $CHANGEFREQ = "daily", $PRIORITY = 0.5) {			CModule::IncludeModule('iblock');				$IB2LASTMOD = array();			$rsIBlocks = CIBlock::GetList(Array(), Array(), false);		while($arIBlock = $rsIBlocks->Fetch()) {			if($arIBlock["LIST_PAGE_URL"]) {				$arIBlock["LIST_PAGE_URL"] = str_replace('#SITE_DIR#', SITE_DIR, $arIBlock["LIST_PAGE_URL"]);				$arEl = CIBlockElement::GetList(array("TIMESTAMP_X"=>"DESC"), array("IBLOCK_ID"=>$arIBlock["ID"], "ACTIVE"=>"Y", "ACTIVE_DATE"=>"Y"), false, array("nTopCount"=>1), array("TIMESTAMP_X"))->Fetch();				if($arEl && $arEl["TIMESTAMP_X"]) {					$IB2LASTMOD[$arIBlock["LIST_PAGE_URL"]] = $arEl["TIMESTAMP_X"];				}			}		}		$URL = 'http://'.$_SERVER['HTTP_HOST'];				$menu = new CMenu($ROOT_MENU_TYPE);		$menu->Init($curDir = '/', true, false);		$menu->RecalcMenu($arParams["ALLOW_MULTI_SELECT"] = false, $arParams["CACHE_SELECTED_ITEMS"] = false);		foreach($menu->arMenu as $m) {			if($IB2LASTMOD[$m[1]]) {				$LASTMOD = $IB2LASTMOD[$m[1]];			} else if($m[1] && file_exists($_SERVER['DOCUMENT_ROOT'].$m[1])) {				if(is_dir($_SERVER['DOCUMENT_ROOT'].$m[1]) && file_exists($_SERVER['DOCUMENT_ROOT'].$m[1].'index.php')) {					$LASTMOD = filemtime($_SERVER['DOCUMENT_ROOT'].$m[1].'index.php');				} else {					$LASTMOD = filemtime($_SERVER['DOCUMENT_ROOT'].$m[1]);				}				$LASTMOD = ConvertTimeStamp($LASTMOD);			} else {				$LASTMOD = false;			}			$this->AddField($this->SiteMap,$URL.$m[1],$LASTMOD,$CHANGEFREQ,$PRIORITY);			$this->CheckFileSize();		}		//var_dump($menu);die();	}
/*		$STATIC = (array) json_decode(COption::GetOptionString($this->module_id,'STATIC','[]'));
		foreach($STATIC as $value) {			$value = (array) $value;			$this->AddField($this->SiteMap,$value['LOC'],$value['LASTMOD'],$value['CHANGEFREQ'],$value['PRIORITY']);						if($INDEX&&(mb_strlen($this->SiteMap->saveXML(),'8bit')>10000000||$this->SiteMap->lastChild->childNodes->length>40000)){				$this->SiteMapName = $PATH.$NAME.$POSTFIX.$this->IndSiteMap->lastChild->childNodes->length.'.xml';				$this->CloseSitemap($this->SiteMap,$this->SiteMapName);				$this->AddField($this->IndSiteMap,$URL.$this->SiteMapName);				$this->SiteMap = $this->OpenSitemap();			}		}	
		
		$IBLOCK = (array) json_decode(COption::GetOptionString($this->module_id,'IBLOCK','[]'));		if(count($IBLOCK)>0){			CModule::IncludeModule("iblock");			foreach($IBLOCK as $value) {				$value = (array) $value;
				$value['LOC'] = trim(preg_replace("/[^a-zA-Z0-9_]/","",$value['LOC']));
				if($value['LOC']=='') $value['LOC'] = "DETAIL_PAGE_URL";				
				$value['LASTMOD_CODE'] = trim(preg_replace("/[^a-zA-Z0-9_]/","",$value['LASTMOD_CODE']));
				if($value['LASTMOD_CODE']=='') $value['LASTMOD_CODE'] = "DATE_ACTIVE_FROM";
				if(trim($value['LASTMOD'])!='') $value['LASTMOD'] = FormatDate("d.m.Y H:i:s",MakeTimeStamp($value['LASTMOD']));
				else unset($value['LASTMOD']);				
								
				$arSort = $arFilter = $arSelect = Array();				
				
				$arSelect[] = $value['LOC'];
				if(!isset($value['LASTMOD'])) $arSelect[] = $value['LASTMOD_CODE'];
				
				if(isset($value['SORT'])){
					$value['SORT'] = trim(preg_replace("/[^a-zA-Z0-9_\,=]/","",$value['SORT']));
					$value['SORT'] = explode(',',$value['SORT']);
					foreach($value['SORT'] as $sort){
						$sort = explode('=',$sort);
						if(isset($sort[1])) if($sort[0]!=''&&$sort[1]!='') $arSort[$sort[0]] = $sort[1];
					}
				}

				$arFilter['IBLOCK_ID'] = intval($value['IBLOCK']);
				
				if(isset($value['FILTER'])){
					$value['FILTER'] = trim(preg_replace("/[^a-zA-Z0-9_\,=]/","",$value['FILTER']));
					$value['FILTER'] = explode(',',$value['FILTER']);
					foreach($value['FILTER'] as $filter){
						$filter = explode('=',$filter);
						if(isset($filter[1])) if($filter[0]!=''&&$filter[1]!='') $arFilter[$filter[0]] = $filter[1];
					}
				}
				
				$res = CIBlockElement::GetList($arSort,$arFilter,false,false,$arSelect);
				while($ob = $res->GetNextElement()){ $arFields = $ob->GetFields();
					if(!isset($value['LASTMOD'])) $LASTMOD = $arFields[$value['LASTMOD_CODE']];
					else $LASTMOD = $value['LASTMOD'];
					$this->AddField($this->SiteMap,$URL.$arFields[$value['LOC']],$LASTMOD,$value['CHANGEFREQ'],$value['PRIORITY']);
					if($INDEX&&(mb_strlen($this->SiteMap->saveXML(),'8bit')>10000000||$this->SiteMap->lastChild->childNodes->length>40000)){
						$this->SiteMapName = $PATH.$NAME.$POSTFIX.$this->IndSiteMap->lastChild->childNodes->length.'.xml';
						$this->CloseSitemap($this->SiteMap,$this->SiteMapName);
						$this->AddField($this->IndSiteMap,$URL.$this->SiteMapName);
						$this->SiteMap = $this->OpenSitemap();
					}		
				}
			}
		}*/
}