<?$IS_AJAX = isset($_SERVER['HTTP_X_REQUESTED_WITH']) || isset($_REQUEST['AJAX_CALL']) && 'Y' == $_REQUEST['AJAX_CALL'];
if ($IS_AJAX) {
	require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
} else {
	require($_SERVER['DOCUMENT_ROOT'].'/bitrix/header.php');
	$APPLICATION->SetTitle("Мы всегда на связи");
}
echo '<link href="'.SITE_DIR.'nasvyazi/style.css?'.randString(10,array('1234567890')).'" type="text/css" rel="stylesheet" />';
?><div class="nasvyazi">
	<div class="block left">
		<span style="font-weight:bold;font-family:Opensanslight,Arial,Helvetica,sans-serif;">Контактный центр</span><br />
		<a href="tel:+74954109155" style="color:#EE8131;">8-495-231-89-00</a><br />
		<br />
		<span style="font-weight:bold;font-family:Opensanslight,Arial,Helvetica,sans-serif;">ВЫ МОЖЕТЕ НАПИСАТЬ НАМ ПИСЬМО</span><br />
		<a href="mailto:rifar.moscow@yandex.ru" style="color:#EE8131;">rifar.moscow@yandex.ru</a><br />
		или воспользоваться формой <a href="/feedback/" class="fancyajax fancybox.ajax" title="Обратная связь">обратной связи</a><br />
		<br />
		<span style="line-height:25px;font-weight:bold;font-family:Opensanslight,Arial,Helvetica,sans-serif;">ПРИСОЕДИНЯЙСЯ</span><br />
		<a href="#facebook"><img src="/bitrix/templates/prostroy/img/icon_fb.png" border="0" alt=""></a> &nbsp; 
		<a href="#vkontakte"><img src="/bitrix/templates/prostroy/img/icon_vk.png" border="0" alt=""></a> &nbsp; 
		<a href="#twitter"><img src="/bitrix/templates/prostroy/img/icon_tw.png" border="0" alt=""></a> &nbsp; 
	</div>
	<div class="block center">
		<a class="fancyajax fancybox.ajax recall" href="/recall/" title="Обратный звонок"><i class="icon pngicons"></i>Обратный звонок</a>
	</div>
<?/*
	<div class="block center"><?
		$APPLICATION->IncludeComponent(
			"bitrix:catalog.store.list",
			"nasvyazi",
			Array(
				"CACHE_TIME" => $arParams["CACHE_TIME"],
				"PHONE" => $arParams["PHONE"],
				"SCHEDULE" => $arParams["SCHEDULE"],
				"MIN_AMOUNT" => $arParams["MIN_AMOUNT"],
				"TITLE" => $arParams["TITLE"],
				"SET_TITLE" => $arParams["SET_TITLE"],
				"PATH_TO_ELEMENT" => $arResult["PATH_TO_ELEMENT"],
				"PATH_TO_LISTSTORES" => $arResult["PATH_TO_LISTSTORES"],
				"MAP_TYPE" => $arParams["MAP_TYPE"],
			)
		);
	?></div>
	<div class="block right">
		<span style="font-weight:bold;font-family:Opensanslight,Arial,Helvetica,sans-serif;">ОСТАВИТЬ ОТЗЫВ</span><br />
		<a href="#">Сказать спасибо</a><br />
		<a href="#">Поделиться идеей</a><br />
		<a href="#">Отправить претензию</a><br />
		<br />
		<span style="font-weight:bold;font-family:Opensanslight,Arial,Helvetica,sans-serif;">СЛУЖБА КЛИЕНТСКИХ ВПЕЧАТЛЕНИЙ</span><br />
		<a href="#">Линия качества</a><br />
		<a href="#">Публичные стандарты</a><br />
		<a href="#">Оцените качество обслуживания</a><br />
	</div>
*/?>
</div>

<?if(!$IS_AJAX):?>
<?require($_SERVER['DOCUMENT_ROOT'].'/bitrix/footer.php');?>

<?endif;?>