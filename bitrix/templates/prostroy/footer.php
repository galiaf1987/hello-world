<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
IncludeTemplateLangFile(__FILE__);

if(!defined('ERROR_404')) {
	if ((!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off') || $_SERVER['SERVER_PORT'] == 443){ //Получаем протокол сайта.
		$protocol = 'https://';
	} else {
		$protocol = 'http://';
	}

	$title = $APPLICATION->GetPageProperty('title');
	if(!$title) {
		$title = $APPLICATION->GetTitle();
	}

	$img = $APPLICATION->GetPageProperty('og:image');
	if(!$img) {
		$img = '/bitrix/templates/prostroy/img/logonew.png';
	}
	$img = $protocol.$_SERVER['HTTP_HOST'].$img;

	$url = $APPLICATION->GetPageProperty('og:url');
	if(!$url) {
		$url = $APPLICATION->GetCurPage(false);
	}
	$url = $protocol.$_SERVER['HTTP_HOST'].$url;

	$APPLICATION->AddHeadString('<meta property="og:title" content="'.$title.'"/>');
	$APPLICATION->AddHeadString('<meta property="og:type" content="website"/>');
	$APPLICATION->AddHeadString('<meta property="og:image" content="'.$img.'"/>');
	$APPLICATION->AddHeadString('<meta property="og:url" content="'.$url.'"/>');
	$APPLICATION->AddHeadString('<meta property="og:description" content="'.$APPLICATION->GetPageProperty('description').'"/>');
	//og:title 	Заголовок вашей статьи, но без брэндинга.
	//og:site_name 	Название вашего сайта (но не его адрес)
	//og:url 	URL как уникальный идентификатор вашей статьи. Он должен совпадать с каноническим URL, используемым для SEO, и он не должен включать в себя какие-либо переменные сессии, параметры идентификации пользователя или счетчики.
	//og:description 	Детальное описание контента, обычно 2 – 4 предложения.
}

					?><div class="social-pre-footer"><?
					?><div class="clear"></div><div class="share-social"><div class="vcenter">Поделиться: </div>

					<script type="text/javascript" src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js" charset="utf-8"></script>
					<script type="text/javascript" src="//yastatic.net/share2/share.js" charset="utf-8"></script>
					<div class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,gplus,twitter" data-counter=""></div>

					<?/*<script type="text/javascript" src="//yastatic.net/share/share.js" charset="utf-8"></script><div class="yashare-auto-init pull-left" data-yashareL10n="ru" data-yashareType="none" data-yashareQuickServices="vkontakte,facebook,twitter"></div>*/?>

					</div><?
					?><div class="zavod"><noindex>Официальный сайт завода-производителя: <a href="//rifar.ru/">rifar.ru</a></noindex></div><?
					?></div><?
				?></div><?
			?></div><?
		?></div><!-- /content --><?
	?></div><!-- /body --><?
	// scripts
	?><script type="text/javascript">RSGoPro_SetSet();</script><?
	?><div id="footer" class="footer"><!-- footer --><?
		if(!$IS_PRINT):
		?><div class="centering"><?
			?><div class="centeringin line1 clearfix"><?
				?><div class="block one"><?
					?><div class="logo"><?
						?><a href="<?=SITE_DIR?>"><?
							$APPLICATION->IncludeFile(
								SITE_TEMPLATE_PATH."/include_areas/footer_logo.php",
								Array(),
								Array("MODE"=>"html")
							);
						?></a><?
					?></div><?
					?><div class="contacts clearfix"><?
						?><div class="phone1"><?
							?><a class="fancyajax fancybox.ajax recall" href="/recall/" title="<?=GetMessage('RSGOPRO.RECALL')?>"><i class="icon pngicons"></i><?=GetMessage('RSGOPRO.RECALL')?></a><?
							?><div class="phone"><?
								$APPLICATION->IncludeFile(
									SITE_TEMPLATE_PATH."/include_areas/footer_phone1.php",
									Array(),
									Array("MODE"=>"html")
								);
							?></div><?
						?></div><?
						?><div class="phone2"><?
							?><a class="fancyajax fancybox.ajax feedback" href="/feedback/" title="<?=GetMessage('RSGOPRO.FEEDBACK')?>"><i class="icon pngicons"></i><?=GetMessage('RSGOPRO.FEEDBACK')?></a><?
							?><div class="phone"><?
								$APPLICATION->IncludeFile(
									SITE_TEMPLATE_PATH."/include_areas/footer_phone2.php",
									Array(),
									Array("MODE"=>"html")
								);
							?></div>
								<div class="address"><?
									$APPLICATION->IncludeFile(
										SITE_TEMPLATE_PATH."/include_areas/footer_address.php",
										Array(),
										Array("MODE"=>"html")
									);
								?></div><?
						?></div><?
					?></div><?
				?></div><?
				?><div class="block two"><?
				$APPLICATION->IncludeComponent(
	"bitrix:menu",
	"infootercatalog",
	array(
		"CACHE_SELECTED_ITEMS" => "N",
		"ROOT_MENU_TYPE" => "footercatalog",
		"MENU_CACHE_TYPE" => "A",
		"MENU_CACHE_TIME" => "3600",
		"MENU_CACHE_USE_GROUPS" => "Y",
		"MENU_CACHE_GET_VARS" => array(
		),
		"MAX_LEVEL" => "1",
		"CHILD_MENU_TYPE" => "",
		"USE_EXT" => "Y",
		"DELAY" => "N",
		"ALLOW_MULTI_SELECT" => "N",
		"BLOCK_TITLE" => "ТОВАРЫ",
		"LVL1_COUNT" => "6",
		"LVL2_COUNT" => "0",
		"ELLIPSIS_NAMES" => "N",
		"COMPONENT_TEMPLATE" => "infootercatalog"
	),
	false
);
				?></div><?
				?><div class="block three"><?
					$APPLICATION->IncludeComponent(
						"bitrix:menu",
						"infooter",
						Array(
							"CACHE_SELECTED_ITEMS" => "N",
							"ROOT_MENU_TYPE" => "footer",
							"MAX_LEVEL" => "1",
							"CHILD_MENU_TYPE" => "",
							"USE_EXT" => "N",
							"MENU_CACHE_TYPE" => "A",
							"MENU_CACHE_TIME" => "3600",
							"MENU_CACHE_USE_GROUPS" => "Y",
							"MENU_CACHE_GET_VARS" => array(),
							"BLOCK_TITLE" => "Дополнительно",
						)
					);
				?></div><?
				?><div class="block four"><?
					?><div class="sovservice"><?
						$APPLICATION->IncludeFile(
							SITE_TEMPLATE_PATH."/include_areas/footer_socservice.php",
							Array(),
							Array("MODE"=>"html")
						);
					?></div><?
					?><div class="subscribe" style="margin-bottom:25px;"><?
						$APPLICATION->IncludeComponent(
							"bitrix:subscribe.form",
							"footer",
							array(
								"USE_PERSONALIZATION" => "Y",
								"SHOW_HIDDEN" => "N",
								"PAGE" => "/personal/subscribe/",
								"CACHE_TYPE" => "A",
								"CACHE_TIME" => "36000000",
							),
							false
						);
					?></div><?
					?><div style="text-align:center;"><?
						?><iframe src="https://yandex.ru/sprav/widget/rating-badge/243693795803" width="150" height="50" frameborder="0"></iframe><?
					?></div><?
				?></div><?
			?></div><?
		?></div><?
		endif;
		?><div class="line2"><?
			?><div class="centering"><?
				?><div class="centeringin clearfix"><?
					?><div class="sitecopy">
						<?= date('Y') ?>
						<?
							$APPLICATION->IncludeFile(
								SITE_TEMPLATE_PATH."/include_areas/footer_sitecopy.php",
								Array(),
								Array("MODE"=>"html")
							);
						?>
					</div><?
					?><div class="developercopy"><?
						/****************************************************************************************/
						/* Удаление ссылки на разработчика является грубым нарушением лицензионного соглашения и может являться причиной отказа в оказании технической поддержки. */
						/****************************************************************************************/
						?>Powered by <noindex><a href="//redsign.ru/" target="_blank">ALFA Systems</a></noindex><?
					?></div><?
				?></div><?
			?></div><?
		?></div><?
	?></div><!-- /footer --><?
	?><div id="fixedcomparelist"><?
		$APPLICATION->IncludeComponent(
			"bitrix:catalog.compare.list",
			"session",
			array(
				"IBLOCK_TYPE" => "catalog",
				"IBLOCK_ID" => "1",
				"NAME" => "CATALOG_COMPARE_LIST",
			),
			false
		);
	?></div><?
	if(!$IS_PRINT):
	$APPLICATION->IncludeComponent(
		"redsign:easycart",
		"gopro",
		array(
			"USE_VIEWED" => "Y",
			"USE_COMPARE" => "Y",
			"USE_BASKET" => "Y",
			"USE_FAVORITE" => "Y",
			"VIEWED_COUNT" => "10",
			"FAVORITE_COUNT" => "10",
			"COMPARE_NAME" => "CATALOG_COMPARE_LIST",
			"TEMPLATE_THEME" => "red",
			"Z_INDEX" => "991",
			"MAX_WIDTH" => "1240",
			"USE_ONLINE_CONSUL" => "Y",
			"ONLINE_CONSUL_LINK" => "#",
			"INCLUDE_JQUERY" => "N",
			"INCLUDE_JQUERY_COOKIE" => "N",
			"INCLUDE_JQUERY_STICKY" => "N",
			"ADD_BODY_PADDING" => "Y",
			"ON_UNIVERSAL_AJAX_HANDLER" => "Y",
			"UNIVERSAL_AJAX_FINDER" => "action=ADD2BASKET",
			"COMPARE_IBLOCK_TYPE" => "catalog",
			"COMPARE_IBLOCK_ID" => "1",
			"COMPARE_RESULT_PATH" => "/catalog/compare/",
			"UNIVERSAL_AJAX_FINDER_COMPARE" => "action=ADD_TO_COMPARE_LIST",
			"UNIVERSAL_AJAX_FINDER_BASKET" => "action=ADD2BASKET",
			"UNIVERSAL_AJAX_FINDER_FAVORITE" => "action=add2favorite",
			"UNIVERSAL_AJAX_FINDER_COMPARE_ADD" => "action=ADD_TO_COMPARE_LIST",
			"UNIVERSAL_AJAX_FINDER_COMPARE_REMOVE" => "action=DELETE_FROM_COMPARE_LIST"
		),
		false
	);
	endif;
	?><div style="display:none;">AlfaSystems GoPro GP261D21</div><?
	?><?
	?><!-- Traffic tracking code -->
<script type="text/javascript">
(function(w, p) {
var a, s;
(w[p] = w[p] || []).push({
counter_id: 427397236
});
a = document.createElement('script'); a.type = 'text/javascript'; a.async = true;
a.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'autocontext.begun.ru/analytics.js';
s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(a, s);
})(window, 'begun_analytics_params');
</script><?
if(!$IS_PRINT):
	?><!-- BEGIN JIVOSITE CODE {literal} -->
<script type='text/javascript'>
(function(){ var widget_id = 'H7uZbvWTpO';
var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);})();</script>
<!-- {/literal} END JIVOSITE CODE --><?
?><script type="text/javascript" src="//cdn.callbackhunter.com/cbh.js?hunter_code=e83cb9b533139249c7e204c361a93879" charset="UTF-8"></script><?
endif;
?>

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(53366464, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/53366464" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
</body><?
?></html>
