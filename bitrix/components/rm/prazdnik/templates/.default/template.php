<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<div style="position: absolute; top: <?=$arParams["RM_PTOP"]?>pt; left: <?=$arParams["RM_PLEFT"]?>pt;">
	<a href="http://<?=$arParams["RM_URL"]?>" target="_blank" title="<?=$arParams["RM_URL_TITLE"]?>">
	<? if(isset($arParams["PATH_TO_IMAGE"])&&$arParams["PATH_TO_IMAGE"]==''):?>	
		<img src="<?=$arParams["PRAZDNIK"]?>" border="0" alt="<?=$arParams["RM_URL_TITLE"]?>">
	<?else:?>		
		<img src="<?=$arParams["PATH_TO_IMAGE"]?>" border="0" alt="<?=$arParams["RM_URL_TITLE"]?>">
	<?endif?>			
	</a>
</div>

