<?php
IncludeModuleLangFile(__FILE__);

class CKDAPropertySort {

	public static function OnAdminTabControlBeginHandler(&$form)
	{
		if($GLOBALS["APPLICATION"]->GetCurPage() == "/bitrix/admin/iblock_element_edit.php"
			|| $GLOBALS["APPLICATION"]->GetCurPage() == "/bitrix/admin/cat_product_edit.php")
		{
			CModule::IncludeModule('iblock');
			$IBLOCK_ID = (int)$_REQUEST["IBLOCK_ID"];
			$ID = (int)$_REQUEST["ID"];
			if($ID > 0)
			{
				$arPropertyID = array();
				$dbRes = CIBlockProperty::GetList(array(), Array("IBLOCK_ID"=>$IBLOCK_ID, "MULTIPLE"=>"Y"));
				while($arProp = $dbRes->Fetch())
				{
					if(!in_array($arProp['PROPERTY_TYPE'], array('L', 'G')) && !in_array($arProp['PROPERTY_TYPE'].':'.$arProp['USER_TYPE'], array('S:video', 'N:Sequence')))
					{
						$arPropertyID[] = (int)$arProp['ID'];
					}
				}
				
				$arProps = array();
				$dbRes = CIBlockElement::GetProperty($IBLOCK_ID, $ID, array(), Array("ID"=>$arPropertyID));
				while($arr = $dbRes->Fetch())
				{
					if(isset($arProps[$arr['ID']])) $arProps[$arr['ID']]++;
					else $arProps[$arr['ID']] = 1;
				}
				
				$arPropertyID = array();
				foreach($arProps as $k=>$v)
				{
					if($v > 1) $arPropertyID[] = $k;
				}

				CJSCore::Init(array('kda_propertysort'));
				$form->sEpilogContent .= '<script type="text/javascript">'.
					'var KDA_SORT_LINK = "'.GetMessage('KDA_SORT_LINK').'";'. 
					'BX.ready(function(){PRSortBtn.Show({IBLOCK_ID:'.(int)$_REQUEST['IBLOCK_ID'].', IBLOCK_ELEMENT_ID:'.(int)$_REQUEST['ID'].', PROP_ID:['.implode(',', $arPropertyID).'], LANG_ID:"'.SITE_ID.'"})});'.
					'</script>';
			}
		}
	}
}