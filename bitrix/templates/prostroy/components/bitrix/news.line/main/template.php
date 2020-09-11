<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
$this->setFrameMode(true);

?><div class="presscentermainn clearfix">
	<div class="in clearfix">
		<?
		if( isset($arParams['BLOCK_NAME']) && $arParams['BLOCK_NAME']!='' )
		{
			?><h2 class="title"><?=$arParams['BLOCK_NAME']?></h2><?
		}
		?>
		<?
		$count = count($arResult['ITEMS']);
		foreach($arResult['ITEMS'] as $key => $arItem)
		{
			$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem['IBLOCK_ID'], 'ELEMENT_EDIT'));
			$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem['IBLOCK_ID'], 'ELEMENT_DELETE'), array('CONFIRM' => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));

			$arFileTmp = CFile::ResizeImageGet(
				$arItem['PREVIEW_PICTURE'] ? $arItem['PREVIEW_PICTURE'] : $arItem["DETAIL_PICTURE"],
				array("width" => 214, "height"=>300)
			);

			?><div class="item<?if($count==($key+1)):?> last<?endif;?>" id="<?=$this->GetEditAreaId($arItem['ID']);?>"><?
				?><div class="img"><a href="<?=$arItem['DETAIL_PAGE_URL']?>"><img src="<?=$arFileTmp['src']?>" border="0" alt="<?=$arItem['PREVIEW_PICTURE']['ALT']?>" title="<?=$arItem['PREVIEW_PICTURE']['TITLE']?>" /></a></div><?
				?><div class="data"><?
					?><a class="name" href="<?=$arItem['DETAIL_PAGE_URL']?>" title="<?=$arItem['NAME']?>"><?=$arItem['NAME']?></a>
					<? if($arItem['DISPLAY_ACTIVE_FROM'])
					{
						?><div class="date"><?=$arItem['DISPLAY_ACTIVE_FROM']?></div><?
					} ?>
					</div><?
			?></div><?
		}
	?></div><?
?></div>
