<?
require_once($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
CModule::IncludeModule('iblock');

$a = floatval($_REQUEST["FORM"]["A"]);
$b = floatval($_REQUEST["FORM"]["B"]);
$s = floatval($_REQUEST["FORM"]["S"]);
$h = floatval($_REQUEST["FORM"]["H"]);
$h1 = floatval($_REQUEST["FORM"]["H1"]);

$k0 = floatval($_REQUEST["FORM"]["K0"]);
$k1 = floatval($_REQUEST["FORM"]["K1"]);
$k2 = floatval($_REQUEST["FORM"]["K2"]);

$type = intval($_REQUEST["FORM"]["TYPE"]);

$id2type = array(
	1=>array(142,78),
	2=>array(1,78)
);

$type = isset($id2type[$type])?$id2type[$type]:0;


$arFilter = array(
	"IBLOCK_ID"=>1,
	"NAME"=>"% 1 секция%",
	"SECTION_ID"=>$type,
	"INCLUDE_SUBSECTIONS"=>"Y"
);

if($h1<0.57) {
	$arFilter["<PROPERTY_HEIGHT"] = 300;
} else if($h1>=0.76) {
	$arFilter[">PROPERTY_HEIGHT"] = 500;
} else {
	$arFilter["><PROPERTY_HEIGHT"] = array(300,500);
}

$rsEl = CIBlockElement::GetList(array(), $arFilter, false, false, array("ID", "NAME", "IBLOCK_SECTION_ID", "PROPERTY_HEIGHT", "PROPERTY_POWER"));

$first = true;

?>
<form name="MODEL">
<ul class="list">
	<?while($arEl = $rsEl->GetNext()):
		$arSc = CIBlockSection::GetByID($arEl["IBLOCK_SECTION_ID"])->GetNext();
		$arSc["IMG"] = CFile::GetFileArray($arSc["PICTURE"]);
		?>
		<li>
			<img width="180" alt="<?=$arSc["NAME"]?>" src="<?=$arSc["IMG"]["SRC"]?>">
			<p>
				<input type="radio" id="labeled_<?=$arSc["ID"]?>" value="<?=$arSc["ID"]?>" name="labeled" data-name="<?=$arSc["NAME"]?>" data-url="<?=$arSc["SECTION_PAGE_URL"]?>" data-img="<?=$arSc["IMG"]["SRC"]?>" data-q="<?=intval($arEl["PROPERTY_POWER_VALUE"])?>"<?if($first):?> checked=""<?endif;?>>
				<label for="labeled_<?=$arSc["ID"]?>"><span><?=$arSc["NAME"]?></span></label>
			</p>
			<a target="_blank" alt="Подробнее о модели" title="Подробнее о модели" href="<?=$arSc["SECTION_PAGE_URL"]?>"></a>
		</li>
		<?
		$first = false;
	endwhile;?>
</ul>
</form>
<script>
	$(".step-5 .next").fadeIn(200);
</script>