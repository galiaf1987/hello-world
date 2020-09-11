<?if(!defined("B_PROLOG_INCLUDED")||B_PROLOG_INCLUDED!==true)die();
$this->setFrameMode(true);

$first = false;
if($arResult["GROUPED_ITEMS"]):
?><table class="groupedprops"><?
endif;
	foreach($arResult["GROUPED_ITEMS"] as $arrValue)
	{
		if(is_array($arrValue["PROPERTIES"]) && count($arrValue["PROPERTIES"])>0)
		{
			?><tr><?
				?><th colspan="2"<?if(!$first):?> class="first"<?endif;?>><?=$arrValue["GROUP"]["NAME"]?></th><?
			?></tr><?
			$first = true;
			foreach($arrValue["PROPERTIES"] as $property)
			{
				?><tr><?
					?><td><div class="line"><span><?=$property["NAME"]?></span></div></td><?
					?><td><?
						if( is_array($property["DISPLAY_VALUE"]) )
						{
							?><div class="val"><?=implode('&nbsp;/&nbsp;', $property["DISPLAY_VALUE"] )?></div><?
						} else {
							?><div class="val"><?=$property["DISPLAY_VALUE"]?></div><?
						}
					?></td><?
				?></tr><?
			}
		}
	}
if($arResult["GROUPED_ITEMS"]):
?></table><?
endif;
?><table class="3cols w100 otherxars"><?
	if(is_array($arResult["NOT_GROUPED_ITEMS"]) && count($arResult["NOT_GROUPED_ITEMS"])>0)
	{
		$tables = array(0,1,2);
		?><tr class="3cols"><?
		foreach($tables as $table) {
			?><td><table class="groupedprops"><?
			$t=0;
		foreach($arResult["NOT_GROUPED_ITEMS"] as $property)
		{
			if($t++%3!=$table) continue;
			?><tr><?
				?><td><div class="line"><span><?=$property["NAME"]?></span></div></td><?
				?><td><?
					if( is_array($property["DISPLAY_VALUE"]) )
					{
						?><div class="val"><?=implode('&nbsp;/&nbsp;', $property["DISPLAY_VALUE"] )?></div><?
					} else {
						?><div class="val"><?=$property["DISPLAY_VALUE"]?></div><?
					}
				?></td><?
			?></tr><?
		}
			?></td></table><?
		}
		?></tr><?
	}
?></table>