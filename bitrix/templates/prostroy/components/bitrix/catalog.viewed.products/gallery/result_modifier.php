<?
include __DIR__.'/../../catalog.section/gallery/result_modifier.php';

/*if(!$arParams["IBLOCK_ID"]) $arParams["IBLOCK_ID"] = 1;
if(!$arParams['PRICE_VAT_INCLUDE']) $arParams['PRICE_VAT_INCLUDE'] = 'Y';
if(!$arParams["PRICE_CODE"]) $arParams["PRICE_CODE"] = array('BASE');
$arConvertParams = array('CURRENCY_ID'=>'RUB'); 

$arResult["PRICES"] = CIBlockPriceTools::GetCatalogPrices($arParams["IBLOCK_ID"], $arParams["PRICE_CODE"]);
//var_dump($arResult["PRICES"]);

foreach($arResult['ITEMS'] as $k=>$arItem) {
	//$arResult['ITEMS'][$k]['MIN_PRICE'] = array('PRINT_DISCOUNT_VALUE'=>1);
	//$arResult['ITEMS'][$k]['CAN_BUY'] = true;
var_dump($arItem);die();
	$arItem["PRICES"] = CIBlockPriceTools::GetItemPrices($arParams["IBLOCK_ID"], $arResult["PRICES"], $arItem, $arParams['PRICE_VAT_INCLUDE'], $arConvertParams);
	//var_dump($arItem["PRICES"]);//, $arParams["IBLOCK_ID"], $arResult["PRICES"], $arItem, $arParams['PRICE_VAT_INCLUDE']?$arParams['PRICE_VAT_INCLUDE']:'Y', $arConvertParams);die();
	if (!empty($arItem["PRICES"]))
	{
		foreach ($arItem['PRICES'] as &$arOnePrice)
		{
			if ('Y' == $arOnePrice['MIN_PRICE'])
			{
				$arResult['ITEMS'][$k]['MIN_PRICE'] = $arOnePrice;
				break;
			}
		}
		unset($arOnePrice);
	}
	$arResult['ITEMS'][$k]["CAN_BUY"] = CIBlockPriceTools::CanBuy($arParams["IBLOCK_ID"], $arResult["PRICES"], $arItem);
	
}*/

?>