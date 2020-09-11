<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

$APPLICATION->AddHeadScript($templateFolder.'/script.js');

include($_SERVER["DOCUMENT_ROOT"].$templateFolder."/functions.php");

?><div class="basket"><?

	if(strlen($arResult['ERROR_MESSAGE'])<=0)
	{
		if(is_array($arResult['WARNING_MESSAGE']) && !empty($arResult['WARNING_MESSAGE']))
		{
			foreach($arResult['WARNING_MESSAGE'] as $v)
				echo ShowError($v);
		}

		if($arParams['USE_GIFTS'] === 'Y' && $arParams['GIFTS_PLACE'] === 'TOP')
		{
			$APPLICATION->IncludeComponent(
				"bitrix:sale.gift.basket",
				"gopro",
				array(
					"SHOW_PRICE_COUNT" => 1,
					"PRODUCT_SUBSCRIPTION" => 'N',
					'PRODUCT_ID_VARIABLE' => 'id',
					"PARTIAL_PRODUCT_PROPERTIES" => 'N',
					"USE_PRODUCT_QUANTITY" => 'N',
					"ACTION_VARIABLE" => "actionGift",
					"ADD_PROPERTIES_TO_BASKET" => "Y",

					"BASKET_URL" => $APPLICATION->GetCurPage(),
					"APPLIED_DISCOUNT_LIST" => $arResult["APPLIED_DISCOUNT_LIST"],
					"FULL_DISCOUNT_LIST" => $arResult["FULL_DISCOUNT_LIST"],

					"TEMPLATE_THEME" => $arParams["TEMPLATE_THEME"],
					"PRICE_VAT_INCLUDE" => $arParams["PRICE_VAT_SHOW_VALUE"],
					"CACHE_GROUPS" => $arParams["CACHE_GROUPS"],

					'BLOCK_TITLE' => $arParams['GIFTS_BLOCK_TITLE'],
					'HIDE_BLOCK_TITLE' => $arParams['GIFTS_HIDE_BLOCK_TITLE'],
					'TEXT_LABEL_GIFT' => $arParams['GIFTS_TEXT_LABEL_GIFT'],
					'PRODUCT_QUANTITY_VARIABLE' => $arParams['GIFTS_PRODUCT_QUANTITY_VARIABLE'],
					'PRODUCT_PROPS_VARIABLE' => $arParams['GIFTS_PRODUCT_PROPS_VARIABLE'],
					'SHOW_OLD_PRICE' => $arParams['GIFTS_SHOW_OLD_PRICE'],
					'SHOW_DISCOUNT_PERCENT' => $arParams['GIFTS_SHOW_DISCOUNT_PERCENT'],
					'SHOW_NAME' => $arParams['GIFTS_SHOW_NAME'],
					'SHOW_IMAGE' => $arParams['GIFTS_SHOW_IMAGE'],
					'MESS_BTN_BUY' => $arParams['GIFTS_MESS_BTN_BUY'],
					'MESS_BTN_DETAIL' => $arParams['GIFTS_MESS_BTN_DETAIL'],
					'PAGE_ELEMENT_COUNT' => 12/*$arParams['GIFTS_PAGE_ELEMENT_COUNT']*/,
					'CONVERT_CURRENCY' => $arParams['GIFTS_CONVERT_CURRENCY'],
					'HIDE_NOT_AVAILABLE' => $arParams['GIFTS_HIDE_NOT_AVAILABLE'],

					"LINE_ELEMENT_COUNT" => $arParams['GIFTS_PAGE_ELEMENT_COUNT'],
				),
				false
			);
		}

		?><form method="post" action="<?=POST_FORM_ACTION_URI?>" name="basket_form" id="basket_form"><?
			?><div id="basket_form_container"><?
				?><div class="bx_ordercart"><?

					include($_SERVER["DOCUMENT_ROOT"].$templateFolder."/basket_items.php");
					include($_SERVER["DOCUMENT_ROOT"].$templateFolder."/basket_items_delayed.php");
					include($_SERVER["DOCUMENT_ROOT"].$templateFolder."/basket_items_subscribed.php");
					include($_SERVER["DOCUMENT_ROOT"].$templateFolder."/basket_items_not_available.php");

				?></div><?
			?></div><?
			?><input class="nonep hiddensubmit" type="submit" name="BasketRefresh" value="<?=GetMessage('SALE_ACCEPT')?>" /><?
			?><input type="hidden" name="BasketOrder" value="BasketOrder" /><?
		?></form><?

		if($arParams['USE_GIFTS'] === 'Y' && $arParams['GIFTS_PLACE'] === 'BOTTOM')
		{
		?>
		<div style="margin-top: 35px;"><? $APPLICATION->IncludeComponent(
			"bitrix:sale.gift.basket",
			"gopro",
			array(
				"SHOW_PRICE_COUNT" => 1,
				"PRODUCT_SUBSCRIPTION" => 'N',
				'PRODUCT_ID_VARIABLE' => 'id',
				"PARTIAL_PRODUCT_PROPERTIES" => 'N',
				"USE_PRODUCT_QUANTITY" => 'N',
				"ACTION_VARIABLE" => "actionGift",
				"ADD_PROPERTIES_TO_BASKET" => "Y",

				"BASKET_URL" => $APPLICATION->GetCurPage(),
				"APPLIED_DISCOUNT_LIST" => $arResult["APPLIED_DISCOUNT_LIST"],
				"FULL_DISCOUNT_LIST" => $arResult["FULL_DISCOUNT_LIST"],

				"TEMPLATE_THEME" => $arParams["TEMPLATE_THEME"],
				"PRICE_VAT_INCLUDE" => $arParams["PRICE_VAT_SHOW_VALUE"],
				"CACHE_GROUPS" => $arParams["CACHE_GROUPS"],

				'BLOCK_TITLE' => $arParams['GIFTS_BLOCK_TITLE'],
				'HIDE_BLOCK_TITLE' => $arParams['GIFTS_HIDE_BLOCK_TITLE'],
				'TEXT_LABEL_GIFT' => $arParams['GIFTS_TEXT_LABEL_GIFT'],
				'PRODUCT_QUANTITY_VARIABLE' => $arParams['GIFTS_PRODUCT_QUANTITY_VARIABLE'],
				'PRODUCT_PROPS_VARIABLE' => $arParams['GIFTS_PRODUCT_PROPS_VARIABLE'],
				'SHOW_OLD_PRICE' => $arParams['GIFTS_SHOW_OLD_PRICE'],
				'SHOW_DISCOUNT_PERCENT' => $arParams['GIFTS_SHOW_DISCOUNT_PERCENT'],
				'SHOW_NAME' => $arParams['GIFTS_SHOW_NAME'],
				'SHOW_IMAGE' => $arParams['GIFTS_SHOW_IMAGE'],
				'MESS_BTN_BUY' => $arParams['GIFTS_MESS_BTN_BUY'],
				'MESS_BTN_DETAIL' => $arParams['GIFTS_MESS_BTN_DETAIL'],
				'PAGE_ELEMENT_COUNT' => 12/*$arParams['GIFTS_PAGE_ELEMENT_COUNT']*/,
				'CONVERT_CURRENCY' => $arParams['GIFTS_CONVERT_CURRENCY'],
				'HIDE_NOT_AVAILABLE' => $arParams['GIFTS_HIDE_NOT_AVAILABLE'],

				"LINE_ELEMENT_COUNT" => $arParams['GIFTS_PAGE_ELEMENT_COUNT'],
			),
			false
		); ?>
		</div><?
		}

	} else {
		ShowError($arResult['ERROR_MESSAGE']);
	}

?></div><?
?><script>$('html').removeClass('hidedefaultwaitwindow');</script>
