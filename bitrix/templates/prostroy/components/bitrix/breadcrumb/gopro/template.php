<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

//delayed function must return a string
if(empty($arResult))
	return "";

global $APPLICATION;

$strReturn .= '<ul class="breadcrumb">';

$itemSize = count($arResult);

/*if(preg_match('@^/catalog/@', $APPLICATION->GetCurDir())) {
	$lastLink = true;
} else {
	$lastLink = false;
}*/
//$lastLink = false;
$curDir = $APPLICATION->GetCurDir();

for($index = 0; $index < $itemSize; $index++)
{
	$title = htmlspecialcharsex($arResult[$index]["TITLE"]);

	if($index > 0)
		$strReturn .= '<li><span> / </span></li>';

	$nextRef = ($index < $itemSize-1 && $arResult[$index+1]["LINK"] <> "" ? ' itemref="bx_breadcrumb_'.($index+1).'"' : '');
	$child = ($index > 0? ' itemprop="child"' : '');

	if($arResult[$index]["LINK"] <> "" && ($index != $itemSize-1 || $arResult[$index]["LINK"] != $curDir) )
	{
		$strReturn .= '<li';
		if($index==($itemSize-1) && $arResult[$index]["LINK"] == $curDir) {
			$strReturn .= ' class="last"';
		}
		$strReturn .= ' id="bx_breadcrumb_'.$index.'" itemscope itemtype="http://data-vocabulary.org/Breadcrumb"'.$child.$nextRef.'">
				<a href="'.$arResult[$index]["LINK"].'" title="'.$title.'" itemprop="url"><span itemprop="title">'.$title.'</span></a>
			</li>';
	}
	else
	{
		$strReturn .= '<li>'.$title.'</li>';
	}
}

$strReturn .= '</ul>';

return $strReturn;
