<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->setFrameMode(true);

if(!empty($arResult))
{
	?><div class="tpanel_menu clearfix mobile_hide"><?
		foreach($arResult as $arItem)
		{
			if($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1) 
				continue;
			
			if($arItem["SELECTED"])
			{
				?><a href="<?=$arItem["LINK"]?>" class="<?if($arItem["PARAMS"]["class"]):?><?=$arItem["PARAMS"]["class"]?> <?endif;?>selected"><?=$arItem["TEXT"]?></a><?
			} else {
				?><a href="<?=$arItem["LINK"]?>"<?if($arItem["PARAMS"]["class"]):?> class="<?=$arItem["PARAMS"]["class"]?>"<?endif;?>><?=$arItem["TEXT"]?></a><?
			}
		}
	?></div><?
}
