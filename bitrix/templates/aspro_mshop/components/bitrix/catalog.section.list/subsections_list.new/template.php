<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->setFrameMode(true);

$sumCols = 0;
?>
<div class="subcats-list bs-row clearfix">
<?foreach($arResult["SECTIONS"] as $arItem):
	if(count($arItem["SECTIONS"])>6 && $sumCols == 0) {
		$cols = 2;
	} else {
		$cols = 1;
	}
?>
		<div class="col-sm-2 text-center subcats-list__item">
			<?if($arParams["SHOW_SECTION_LIST_PICTURES"] != "N"):?>	
				<?if($arItem["PICTURE"]["SRC"]):?>
					<?$img = CFile::ResizeImageGet($arItem["PICTURE"]["ID"], array( "width" => 158, "height" => 158 ), BX_RESIZE_IMAGE_EXACT, true );?>
					<a href="<?=$arItem["SECTION_PAGE_URL"]?>" class="thumb"><img src="<?=$img["src"]?>" alt="<?=($arItem["PICTURE"]["ALT"] ? $arItem["PICTURE"]["ALT"] : $arItem["NAME"])?>" title="<?=($arItem["PICTURE"]["TITLE"] ? $arItem["PICTURE"]["TITLE"] : $arItem["NAME"])?>" class="iomg-responsive" /></a>
				<?elseif($arItem["~PICTURE"]):?>
					<?$img = CFile::ResizeImageGet($arItem["~PICTURE"], array( "width" => 158, "height" => 158 ), BX_RESIZE_IMAGE_EXACT, true );?>
					<a href="<?=$arItem["SECTION_PAGE_URL"]?>" class="thumb"><img src="<?=$img["src"]?>" alt="<?=($arItem["PICTURE"]["ALT"] ? $arItem["PICTURE"]["ALT"] : $arItem["NAME"])?>" title="<?=($arItem["PICTURE"]["TITLE"] ? $arItem["PICTURE"]["TITLE"] : $arItem["NAME"])?>" class="iomg-responsive" /></a>
				<?else:?>
					<a href="<?=$arItem["SECTION_PAGE_URL"]?>" class="thumb"><img src="<?=SITE_TEMPLATE_PATH?>/images/no_photo_medium.png" alt="<?=$arItem["NAME"]?>" title="<?=$arItem["NAME"]?>" class="iomg-responsive" height="90" /></a>
				<?endif;?>
			<?endif;?>
		</div>
		<div class="col-sm-<?= $cols == 2 ? 10 : 4 ?> subcats-list__item">
			<div class="bs-row mt-0">
				<div class="col-xs-12 subcats-list__title">
					<a href="<?=$arItem["SECTION_PAGE_URL"]?>"><span><?=$arItem["NAME"]?>&nbsp;</span><?=($arItem["ELEMENT_CNT"] ? '<span class="grey">('.$arItem["ELEMENT_CNT"].')</span>' : '')?></a>
					<?$arSection = CIBlockSection::GetList(array(), array("IBLOCK_ID" => $arResult["SECTION"]["IBLOCK_ID"], "ID" => $arItem["ID"]), true, array("ID", "IBLOCK_ID", $arParams["SECTIONS_LIST_PREVIEW_PROPERTY"]))->Fetch();?>
					<?if($arSection[$arParams["SECTIONS_LIST_PREVIEW_PROPERTY"]]):?>
						<div class="preview-text"><?=$arSection[$arParams["SECTIONS_LIST_PREVIEW_PROPERTY"]]?></div>
					<?elseif($arItem["DESCRIPTION"]&&false):?>
						<div class="preview-text"><?=$arItem["DESCRIPTION"]?></div>
					<?endif;?>
				</div>
				<?if($arItem["SECTIONS"]){?>
				<?foreach( $arItem["SECTIONS"] as $arSubItem ){
				if($arSubItem["PICTURE"]) {
					$img = CFile::ResizeImageGet($arSubItem["PICTURE"]["ID"], array( "width" => 25, "height" => 20 ), BX_RESIZE_IMAGE_EXACT, true );
				} else {
					$img = false;
				}
				?>
				<div class="<?= $cols == 2 ? 'col-sm-6' : 'col-xs-12' ?> subcats-list__subtitle">
					<a href="<?=$arSubItem["SECTION_PAGE_URL"]?>"><?if($img):?><img src="<?=$img['src']?>" alt="" /> <?endif;?><?=$arSubItem["NAME"]?><? echo $arSubItem["ELEMENT_CNT"]?'&nbsp;('.$arSubItem["ELEMENT_CNT"].')':'';?></a>
				</div>
				<? } ?>
				<? } ?>
			</div>
		</div>
	<? $sumCols += $cols; ?>
	<?if($sumCols>=2): $sumCols = 0; ?><div class="clearfix"></div><?endif;?>
<?endforeach;?>
</div>
<?return?>
<div class="articles-list sections wrap_md">
	<?foreach($arResult["SECTIONS"] as $arItem):?>
		<?
		$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
		$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
		?>
		<div class="item iblock section_item_inner" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
			<?if($arParams["SHOW_SECTION_LIST_PICTURES"] != "N"):?>	
				<?if($arItem["PICTURE"]["SRC"]):?>
					<?$img = CFile::ResizeImageGet($arItem["PICTURE"]["ID"], array( "width" => 120, "height" => 120 ), BX_RESIZE_IMAGE_EXACT, true );?>
					<div class="left-data">
						<a href="<?=$arItem["SECTION_PAGE_URL"]?>" class="thumb"><img src="<?=$img["src"]?>" alt="<?=($arItem["PICTURE"]["ALT"] ? $arItem["PICTURE"]["ALT"] : $arItem["NAME"])?>" title="<?=($arItem["PICTURE"]["TITLE"] ? $arItem["PICTURE"]["TITLE"] : $arItem["NAME"])?>" /></a>
					</div>
				<?elseif($arItem["~PICTURE"]):?>
					<?$img = CFile::ResizeImageGet($arItem["~PICTURE"], array( "width" => 120, "height" => 120 ), BX_RESIZE_IMAGE_EXACT, true );?>
					<div class="left-data">
						<a href="<?=$arItem["SECTION_PAGE_URL"]?>" class="thumb"><img src="<?=$img["src"]?>" alt="<?=($arItem["PICTURE"]["ALT"] ? $arItem["PICTURE"]["ALT"] : $arItem["NAME"])?>" title="<?=($arItem["PICTURE"]["TITLE"] ? $arItem["PICTURE"]["TITLE"] : $arItem["NAME"])?>" /></a>
					</div>
				<?else:?>
					<div class="left-data">
						<a href="<?=$arItem["SECTION_PAGE_URL"]?>" class="thumb"><img src="<?=SITE_TEMPLATE_PATH?>/images/no_photo_medium.png" alt="<?=$arItem["NAME"]?>" title="<?=$arItem["NAME"]?>" height="90" /></a>
					</div>
				<?endif;?>
			<?endif;?>
			<div class="right-data section_info <?=( $arParams["SHOW_SECTION_LIST_PICTURES"] == "N" ? "no_img" : "")?>">
				<div class="item-title">
					<a href="<?=$arItem["SECTION_PAGE_URL"]?>"><span><?=$arItem["NAME"]?>&nbsp;</span><?=($arItem["ELEMENT_CNT"] ? '<span class="grey">('.$arItem["ELEMENT_CNT"].')</span>' : '')?></a>
				</div>
				<?if($arItem["SECTIONS"]){?>
					<ul>
						<?foreach( $arItem["SECTIONS"] as $arSubItem ){?>
							<li class="sect"><a href="<?=$arSubItem["SECTION_PAGE_URL"]?>"><?=$arSubItem["NAME"]?><? echo $arSubItem["ELEMENT_CNT"]?'&nbsp;('.$arSubItem["ELEMENT_CNT"].')':'';?></a></li>
						<?}?>
					</ul>
				<?}?>
				<?$arSection = CIBlockSection::GetList(array(), array("IBLOCK_ID" => $arResult["SECTION"]["IBLOCK_ID"], "ID" => $arItem["ID"]), true, array("ID", "IBLOCK_ID", $arParams["SECTIONS_LIST_PREVIEW_PROPERTY"]))->Fetch();?>
				<?if($arSection[$arParams["SECTIONS_LIST_PREVIEW_PROPERTY"]]):?>
					<div class="preview-text"><?=$arSection[$arParams["SECTIONS_LIST_PREVIEW_PROPERTY"]]?></div>
				<?elseif($arItem["DESCRIPTION"]&&false):?>
					<div class="preview-text"><?=$arItem["DESCRIPTION"]?></div>
				<?endif;?>
			</div>
		</div>
	<?endforeach;?>
</div>
<?if($arResult["SECTION"]["DESCRIPTION"]):?>
	<hr class="long"/>
	<div class="main_description"><?=$arResult["SECTION"]["DESCRIPTION"]?></div>
<?else:?>
	<?$arSection = CIBlockSection::GetList(array(), array( "IBLOCK_ID" => $arResult["SECTION"]["IBLOCK_ID"], "ID" => $arResult["ID"] ), false, array( "ID", "UF_SECTION_DESCR"))->GetNext();?>
	<?if ($arSection["UF_SECTION_DESCR"]):?>
		<hr class="long"/>
		<div class="main_description"><?=$arSection["UF_SECTION_DESCR"]?></div>
	<?endif;?>
<?endif;?>
<style>

.subcats-list {
	border-top: 1px solid #e5e5e5;
	padding: 0px 0px 0px;
	margin: 41px 0px 18px;
}
.subcats-list__title {
	margin-bottom: 5px;
}
.subcats-list__title a {
	font-weight: bold;
	margin-bottom: 5px;
	font-size: 130%;
}

.subcats-list__subtitle {
	padding: 5px;
	border-bottom: 1px solid #eee;
	margin-bottom: 5px;
}
.subcats-list__item {
	margin-top: 30px;
}

.mt-0 {
	margin-top: 0;
}

.bs-row img,
[class*=col-] img {
	vertical-align: middle;
}

[class*=col-],
.bs-row
{
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
.img-responsive {
  max-width: 100%;
  height: auto;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}
.text-justify {
  text-align: justify;
}
.text-nowrap {
  white-space: nowrap;
}
.text-lowercase {
  text-transform: lowercase;
}
.text-uppercase {
  text-transform: uppercase;
}
.text-capitalize {
  text-transform: capitalize;
}


.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
.container-fluid {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.bs-row {
  margin-right: -15px;
  margin-left: -15px;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {
  float: left;
}
.col-xs-12 {
  width: 100%;
}
.col-xs-11 {
  width: 91.66666667%;
}
.col-xs-10 {
  width: 83.33333333%;
}
.col-xs-9 {
  width: 75%;
}
.col-xs-8 {
  width: 66.66666667%;
}
.col-xs-7 {
  width: 58.33333333%;
}
.col-xs-6 {
  width: 50%;
}
.col-xs-5 {
  width: 41.66666667%;
}
.col-xs-4 {
  width: 33.33333333%;
}
.col-xs-3 {
  width: 25%;
}
.col-xs-2 {
  width: 16.66666667%;
}
.col-xs-1 {
  width: 8.33333333%;
}
.col-xs-pull-12 {
  right: 100%;
}
.col-xs-pull-11 {
  right: 91.66666667%;
}
.col-xs-pull-10 {
  right: 83.33333333%;
}
.col-xs-pull-9 {
  right: 75%;
}
.col-xs-pull-8 {
  right: 66.66666667%;
}
.col-xs-pull-7 {
  right: 58.33333333%;
}
.col-xs-pull-6 {
  right: 50%;
}
.col-xs-pull-5 {
  right: 41.66666667%;
}
.col-xs-pull-4 {
  right: 33.33333333%;
}
.col-xs-pull-3 {
  right: 25%;
}
.col-xs-pull-2 {
  right: 16.66666667%;
}
.col-xs-pull-1 {
  right: 8.33333333%;
}
.col-xs-pull-0 {
  right: auto;
}
.col-xs-push-12 {
  left: 100%;
}
.col-xs-push-11 {
  left: 91.66666667%;
}
.col-xs-push-10 {
  left: 83.33333333%;
}
.col-xs-push-9 {
  left: 75%;
}
.col-xs-push-8 {
  left: 66.66666667%;
}
.col-xs-push-7 {
  left: 58.33333333%;
}
.col-xs-push-6 {
  left: 50%;
}
.col-xs-push-5 {
  left: 41.66666667%;
}
.col-xs-push-4 {
  left: 33.33333333%;
}
.col-xs-push-3 {
  left: 25%;
}
.col-xs-push-2 {
  left: 16.66666667%;
}
.col-xs-push-1 {
  left: 8.33333333%;
}
.col-xs-push-0 {
  left: auto;
}
.col-xs-offset-12 {
  margin-left: 100%;
}
.col-xs-offset-11 {
  margin-left: 91.66666667%;
}
.col-xs-offset-10 {
  margin-left: 83.33333333%;
}
.col-xs-offset-9 {
  margin-left: 75%;
}
.col-xs-offset-8 {
  margin-left: 66.66666667%;
}
.col-xs-offset-7 {
  margin-left: 58.33333333%;
}
.col-xs-offset-6 {
  margin-left: 50%;
}
.col-xs-offset-5 {
  margin-left: 41.66666667%;
}
.col-xs-offset-4 {
  margin-left: 33.33333333%;
}
.col-xs-offset-3 {
  margin-left: 25%;
}
.col-xs-offset-2 {
  margin-left: 16.66666667%;
}
.col-xs-offset-1 {
  margin-left: 8.33333333%;
}
.col-xs-offset-0 {
  margin-left: 0;
}
@media (min-width: 768px) {
  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
    float: left;
  }
  .col-sm-12 {
    width: 100%;
  }
  .col-sm-11 {
    width: 91.66666667%;
  }
  .col-sm-10 {
    width: 83.33333333%;
  }
  .col-sm-9 {
    width: 75%;
  }
  .col-sm-8 {
    width: 66.66666667%;
  }
  .col-sm-7 {
    width: 58.33333333%;
  }
  .col-sm-6 {
    width: 50%;
  }
  .col-sm-5 {
    width: 41.66666667%;
  }
  .col-sm-4 {
    width: 33.33333333%;
  }
  .col-sm-3 {
    width: 25%;
  }
  .col-sm-2 {
    width: 16.66666667%;
  }
  .col-sm-1 {
    width: 8.33333333%;
  }
  .col-sm-pull-12 {
    right: 100%;
  }
  .col-sm-pull-11 {
    right: 91.66666667%;
  }
  .col-sm-pull-10 {
    right: 83.33333333%;
  }
  .col-sm-pull-9 {
    right: 75%;
  }
  .col-sm-pull-8 {
    right: 66.66666667%;
  }
  .col-sm-pull-7 {
    right: 58.33333333%;
  }
  .col-sm-pull-6 {
    right: 50%;
  }
  .col-sm-pull-5 {
    right: 41.66666667%;
  }
  .col-sm-pull-4 {
    right: 33.33333333%;
  }
  .col-sm-pull-3 {
    right: 25%;
  }
  .col-sm-pull-2 {
    right: 16.66666667%;
  }
  .col-sm-pull-1 {
    right: 8.33333333%;
  }
  .col-sm-pull-0 {
    right: auto;
  }
  .col-sm-push-12 {
    left: 100%;
  }
  .col-sm-push-11 {
    left: 91.66666667%;
  }
  .col-sm-push-10 {
    left: 83.33333333%;
  }
  .col-sm-push-9 {
    left: 75%;
  }
  .col-sm-push-8 {
    left: 66.66666667%;
  }
  .col-sm-push-7 {
    left: 58.33333333%;
  }
  .col-sm-push-6 {
    left: 50%;
  }
  .col-sm-push-5 {
    left: 41.66666667%;
  }
  .col-sm-push-4 {
    left: 33.33333333%;
  }
  .col-sm-push-3 {
    left: 25%;
  }
  .col-sm-push-2 {
    left: 16.66666667%;
  }
  .col-sm-push-1 {
    left: 8.33333333%;
  }
  .col-sm-push-0 {
    left: auto;
  }
  .col-sm-offset-12 {
    margin-left: 100%;
  }
  .col-sm-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-sm-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-sm-offset-9 {
    margin-left: 75%;
  }
  .col-sm-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-sm-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-sm-offset-6 {
    margin-left: 50%;
  }
  .col-sm-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-sm-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-sm-offset-3 {
    margin-left: 25%;
  }
  .col-sm-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-sm-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-sm-offset-0 {
    margin-left: 0;
  }
}
@media (min-width: 992px) {
  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
    float: left;
  }
  .col-md-12 {
    width: 100%;
  }
  .col-md-11 {
    width: 91.66666667%;
  }
  .col-md-10 {
    width: 83.33333333%;
  }
  .col-md-9 {
    width: 75%;
  }
  .col-md-8 {
    width: 66.66666667%;
  }
  .col-md-7 {
    width: 58.33333333%;
  }
  .col-md-6 {
    width: 50%;
  }
  .col-md-5 {
    width: 41.66666667%;
  }
  .col-md-4 {
    width: 33.33333333%;
  }
  .col-md-3 {
    width: 25%;
  }
  .col-md-2 {
    width: 16.66666667%;
  }
  .col-md-1 {
    width: 8.33333333%;
  }
  .col-md-pull-12 {
    right: 100%;
  }
  .col-md-pull-11 {
    right: 91.66666667%;
  }
  .col-md-pull-10 {
    right: 83.33333333%;
  }
  .col-md-pull-9 {
    right: 75%;
  }
  .col-md-pull-8 {
    right: 66.66666667%;
  }
  .col-md-pull-7 {
    right: 58.33333333%;
  }
  .col-md-pull-6 {
    right: 50%;
  }
  .col-md-pull-5 {
    right: 41.66666667%;
  }
  .col-md-pull-4 {
    right: 33.33333333%;
  }
  .col-md-pull-3 {
    right: 25%;
  }
  .col-md-pull-2 {
    right: 16.66666667%;
  }
  .col-md-pull-1 {
    right: 8.33333333%;
  }
  .col-md-pull-0 {
    right: auto;
  }
  .col-md-push-12 {
    left: 100%;
  }
  .col-md-push-11 {
    left: 91.66666667%;
  }
  .col-md-push-10 {
    left: 83.33333333%;
  }
  .col-md-push-9 {
    left: 75%;
  }
  .col-md-push-8 {
    left: 66.66666667%;
  }
  .col-md-push-7 {
    left: 58.33333333%;
  }
  .col-md-push-6 {
    left: 50%;
  }
  .col-md-push-5 {
    left: 41.66666667%;
  }
  .col-md-push-4 {
    left: 33.33333333%;
  }
  .col-md-push-3 {
    left: 25%;
  }
  .col-md-push-2 {
    left: 16.66666667%;
  }
  .col-md-push-1 {
    left: 8.33333333%;
  }
  .col-md-push-0 {
    left: auto;
  }
  .col-md-offset-12 {
    margin-left: 100%;
  }
  .col-md-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-md-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-md-offset-9 {
    margin-left: 75%;
  }
  .col-md-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-md-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-md-offset-6 {
    margin-left: 50%;
  }
  .col-md-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-md-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-md-offset-3 {
    margin-left: 25%;
  }
  .col-md-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-md-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-md-offset-0 {
    margin-left: 0;
  }
}
@media (min-width: 1200px) {
  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
    float: left;
  }
  .col-lg-12 {
    width: 100%;
  }
  .col-lg-11 {
    width: 91.66666667%;
  }
  .col-lg-10 {
    width: 83.33333333%;
  }
  .col-lg-9 {
    width: 75%;
  }
  .col-lg-8 {
    width: 66.66666667%;
  }
  .col-lg-7 {
    width: 58.33333333%;
  }
  .col-lg-6 {
    width: 50%;
  }
  .col-lg-5 {
    width: 41.66666667%;
  }
  .col-lg-4 {
    width: 33.33333333%;
  }
  .col-lg-3 {
    width: 25%;
  }
  .col-lg-2 {
    width: 16.66666667%;
  }
  .col-lg-1 {
    width: 8.33333333%;
  }
  .col-lg-pull-12 {
    right: 100%;
  }
  .col-lg-pull-11 {
    right: 91.66666667%;
  }
  .col-lg-pull-10 {
    right: 83.33333333%;
  }
  .col-lg-pull-9 {
    right: 75%;
  }
  .col-lg-pull-8 {
    right: 66.66666667%;
  }
  .col-lg-pull-7 {
    right: 58.33333333%;
  }
  .col-lg-pull-6 {
    right: 50%;
  }
  .col-lg-pull-5 {
    right: 41.66666667%;
  }
  .col-lg-pull-4 {
    right: 33.33333333%;
  }
  .col-lg-pull-3 {
    right: 25%;
  }
  .col-lg-pull-2 {
    right: 16.66666667%;
  }
  .col-lg-pull-1 {
    right: 8.33333333%;
  }
  .col-lg-pull-0 {
    right: auto;
  }
  .col-lg-push-12 {
    left: 100%;
  }
  .col-lg-push-11 {
    left: 91.66666667%;
  }
  .col-lg-push-10 {
    left: 83.33333333%;
  }
  .col-lg-push-9 {
    left: 75%;
  }
  .col-lg-push-8 {
    left: 66.66666667%;
  }
  .col-lg-push-7 {
    left: 58.33333333%;
  }
  .col-lg-push-6 {
    left: 50%;
  }
  .col-lg-push-5 {
    left: 41.66666667%;
  }
  .col-lg-push-4 {
    left: 33.33333333%;
  }
  .col-lg-push-3 {
    left: 25%;
  }
  .col-lg-push-2 {
    left: 16.66666667%;
  }
  .col-lg-push-1 {
    left: 8.33333333%;
  }
  .col-lg-push-0 {
    left: auto;
  }
  .col-lg-offset-12 {
    margin-left: 100%;
  }
  .col-lg-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-lg-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-lg-offset-9 {
    margin-left: 75%;
  }
  .col-lg-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-lg-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-lg-offset-6 {
    margin-left: 50%;
  }
  .col-lg-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-lg-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-lg-offset-3 {
    margin-left: 25%;
  }
  .col-lg-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-lg-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-lg-offset-0 {
    margin-left: 0;
  }
}
</style>