<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

global $APPLICATION;

//if ($arResult['IPROPERTY_VALUES']['SECTION_META_TITLE'] === $arResult['IPROPERTY_VALUES']['SECTION_PAGE_TITLE']) {
  //$APPLICATION->SetPageProperty('title', $arResult['NAME'] . ' - купить, цена в Москве | Otoplenie Store');
//}
if (!isset($arResult['IPROPERTY_VALUES']['SECTION_META_KEYWORDS'])) {
  $APPLICATION->SetPageProperty('keywords', $arResult['NAME'] . ', интернет магазин Otoplenie Store');
}
if (!isset($arResult['IPROPERTY_VALUES']['SECTION_META_DESCRIPTION'])) {
  $APPLICATION->SetPageProperty('description', 'Купить ' . strtolower($arResult['NAME']) . ' недорого, по доступной цене в Москве. Доставка, гарантия на товар. Интернет магазин Otoplenie Store.');
}

?>
