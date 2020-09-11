<?
require_once($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_admin_before.php");
CModule::IncludeModule('kda.propertysort');
IncludeModuleLangFile(__FILE__);

$obJSPopup = new CJSPopup();
$obJSPopup->ShowTitlebar(GetMessage("KDA_SORT_TITLE"));

if (kda_propertysort_demo_expired()) {
	require_once($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_popup_admin.php");
	kda_propertysort_show_demo();
	require_once($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_popup_admin.php");
	die();
}

CModule::IncludeModule("iblock");
IncludeModuleLangFile(__FILE__);
$IBLOCK_ID = (int)$_REQUEST['IBLOCK_ID'];
$IBLOCK_ELEMENT_ID = (int)$_REQUEST['IBLOCK_ELEMENT_ID'];
$IBLOCK_PROPERTY_ID = (int)$_REQUEST['IBLOCK_PROPERTY_ID'];

if($_POST['AJAX']=='Y')
{
	if(is_array($_POST['PROPS']))
	{
		$dbProperty = CIBlockProperty::GetByID($IBLOCK_PROPERTY_ID);
		$arProperty = $dbProperty->Fetch();
	
		$arProps = array();
		$dbRes = CIBlockElement::GetProperty($IBLOCK_ID, $IBLOCK_ELEMENT_ID, array(), array('ID'=>$IBLOCK_PROPERTY_ID));
		while($arProp = $dbRes->Fetch())
		{
			$arProps[$arProp['PROPERTY_VALUE_ID']] = $arProp;
		}

		$arNewProps = array();
		foreach($_POST['PROPS'] as $propID)
		{
			if($arProps[$propID])
			{
				if($arProperty['PROPERTY_TYPE']=='F')
				{
					$arNewProps[] = array(
						'VALUE' => CFile::MakeFileArray($arProps[$propID]['VALUE']),
						'DESCRIPTION' => $arProps[$propID]['DESCRIPTION']
					);
				}
				else
				{
					$arNewProps[] = array(
						'VALUE' => $arProps[$propID]['VALUE'],
						'DESCRIPTION' => $arProps[$propID]['DESCRIPTION']
					);
				}
			}
		}

		CIBlockElement::SetPropertyValuesEx($IBLOCK_ELEMENT_ID, $IBLOCK_ID, array($IBLOCK_PROPERTY_ID => false));
		CIBlockElement::SetPropertyValuesEx($IBLOCK_ELEMENT_ID, $IBLOCK_ID, array($IBLOCK_PROPERTY_ID => $arNewProps));
	}
	die();
}

CModule::IncludeModule('fileman');
$minImageSize = array("W" => 1, "H"=>1);
$maxImageSize = array(
	"W" => COption::GetOptionString("iblock", "list_image_size"),
	"H" => COption::GetOptionString("iblock", "list_image_size"),
);

function GetElementName($ID)
{
	$ID = IntVal($ID);
	static $cache = array();
	if(!array_key_exists($ID, $cache) && $ID > 0)
	{
		$rsElement = CIBlockElement::GetList(array(), array("ID"=>$ID, "SHOW_HISTORY"=>"Y"), false, false, array("ID","IBLOCK_ID","NAME"));
		$cache[$ID] = $rsElement->GetNext();
	}
	return $cache[$ID];
}
function GetSectionName($ID)
{
	$ID = IntVal($ID);
	static $cache = array();
	if(!array_key_exists($ID, $cache) && $ID > 0)
	{
		$rsSection = CIBlockSection::GetList(array(), array("ID"=>$ID), false, array("ID","IBLOCK_ID","NAME"));
		$cache[$ID] = $rsSection->GetNext();
	}
	return $cache[$ID];
}

CJSCore::Init(array('kda_propertysort'));
$arrows = '<a href="javascript:void(0)" class="arrow_up"></a>'.
	'<a href="javascript:void(0)" class="arrow_down"></a>';

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_popup_admin.php");

if (!kda_propertysort_demo_expired()) {
	kda_propertysort_show_demo();
}

$dbRes = CIBlockElement::GetProperty($IBLOCK_ID, $IBLOCK_ELEMENT_ID, array(), array('ID'=>$IBLOCK_PROPERTY_ID));
?><form method="post" action="" name="psortForm" class="property-sort-list">
<?
foreach($_GET as $k=>$v)
{
	echo '<input type="hidden" name="'.$k.'" value="'.htmlspecialcharsEx($v).'">';
}
?>
<div><?
while($arProp = $dbRes->Fetch())
{
	if(strlen($arProp["USER_TYPE"])>0)
		$arUserType = CIBlockProperty::GetUserType($arProp["USER_TYPE"]);
	else
		$arUserType = array();
		
	if(array_key_exists("GetAdminListViewHTML", $arUserType))
	{
		if($arUserType['USER_TYPE']=='HTML')
		{
			$res = $arProp["VALUE"]["TEXT"];
		}
		else
		{
			$res = call_user_func_array($arUserType["GetAdminListViewHTML"],
				array(
					$arProp,
					array(
						"VALUE" => $arProp["VALUE"],
						"DESCRIPTION" => $arProp["DESCRIPTION"]
					),
					array(
						"VALUE" => "",
						"DESCRIPTION" => "",
						"MODE"=>"iblock_element_admin",
						"FORM_NAME"=>"form_sort"
					),
				));
		}
	}
	elseif($arProp['PROPERTY_TYPE']=='F')
		$res = CFileInput::Show('NO_FIELDS['.$arProp['ID'].']', $arProp["VALUE"], array(
			"IMAGE" => "Y",
			"PATH" => "Y",
			"FILE_SIZE" => "Y",
			"DIMENSIONS" => "Y",
			"IMAGE_POPUP" => "Y",
			"MAX_SIZE" => $maxImageSize,
			"MIN_SIZE" => $minImageSize,
			), array(
				'upload' => false,
				'medialib' => false,
				'file_dialog' => false,
				'cloud' => false,
				'del' => false,
				'description' => false,
			)
		);
	elseif($arProp['PROPERTY_TYPE']=='G')
	{
		$t = GetSectionName($arProp["VALUE"]);
		if($t)
			$res = $t['NAME'];
	}
	elseif($arProp['PROPERTY_TYPE']=='E')
	{
		$t = GetElementName($arProp["VALUE"]);
		if($t)
		{
			$res = $t['NAME'];
		}
	}
	elseif($arProp['PROPERTY_TYPE']=='L')
	{
		$res = $arProp["VALUE_ENUM"];
	}
	else
	{
		$res = $arProp["VALUE"];
	}

	?><div class="property-sort-item"><input type="hidden" name="PROPS[]" value="<?=$arProp['PROPERTY_VALUE_ID']?>"><div class="inner"><?=$res.$arrows?></div></div><?
}
?></div>
</form>
<?

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_popup_admin.php");
?>