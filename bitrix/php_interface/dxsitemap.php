<?
class DXSitemap{
	function AddField(&$doc,$loc,$lastmod=false,$changefreq="daily",$priority="0.5"){
	function StartGenerate() {
/*		$STATIC = (array) json_decode(COption::GetOptionString($this->module_id,'STATIC','[]'));
		foreach($STATIC as $value) {
		
		$IBLOCK = (array) json_decode(COption::GetOptionString($this->module_id,'IBLOCK','[]'));
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