<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $templateData */
/** @var @global CMain $APPLICATION */
use Bitrix\Main\Loader;

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

if (isset($templateData['TEMPLATE_LIBRARY']) && !empty($templateData['TEMPLATE_LIBRARY'])){
	$loadCurrency = false;
	if (!empty($templateData['CURRENCIES']))
		$loadCurrency = Loader::includeModule('currency');
	CJSCore::Init($templateData['TEMPLATE_LIBRARY']);
	if ($loadCurrency){?>
	<script type="text/javascript">
		BX.Currency.setCurrencies(<? echo $templateData['CURRENCIES']; ?>);
	</script>
	<?}
}?>
