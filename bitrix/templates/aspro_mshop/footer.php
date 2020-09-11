							<?if(isset($_SERVER["HTTP_X_REQUESTED_WITH"]) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == "xmlhttprequest") die();?>
							<?IncludeTemplateLangFile(__FILE__);?>
							<?if(CSite::InDir(SITE_DIR.'help/') || CSite::InDir(SITE_DIR.'company/') || CSite::InDir(SITE_DIR.'info/')):?>
								</div>
							<?endif;?>
			<?if(!$isFrontPage && !$isContactsPage):?>
							</div>
						</div>
					</section>
				</div>
			<?endif;?>
		</div><?// <div class="wrapper">?>
		<footer id="footer" <?=($isFrontPage ? 'class="main"' : '')?>>
			<div class="footer_inner">
				<div class="wrapper_inner">
					<div class="footer_top">
						<div class="wrap_md">
							<div class="iblock sblock">
								<?$APPLICATION->IncludeComponent(
									"bitrix:subscribe.form",
									"mshop",
									array(
										"AJAX_MODE" => "N",
										"SHOW_HIDDEN" => "N",
										"ALLOW_ANONYMOUS" => "Y",
										"SHOW_AUTH_LINKS" => "N",
										"CACHE_TYPE" => "A",
										"CACHE_TIME" => "86400",
										"CACHE_NOTES" => "",
										"SET_TITLE" => "N",
										"AJAX_OPTION_JUMP" => "N",
										"AJAX_OPTION_STYLE" => "Y",
										"AJAX_OPTION_HISTORY" => "N",
										"AJAX_OPTION_ADDITIONAL" => "",
										"LK" => "Y",
										"COMPONENT_TEMPLATE" => "mshop",
										"USE_PERSONALIZATION" => "Y",
										"PAGE" => SITE_DIR."personal/subscribe/",
									),
									false
								);?>
							</div>
							<div class="iblock phones">
								<div class="wrap_md">
									<div class="empty_block iblock">
										<?$APPLICATION->IncludeFile(SITE_DIR."include/address.php", Array(), Array("MODE" => "html"));?>
									</div>
									<div class="phone_block iblock">
										<span class="phone_wrap">
											<span class="icons"></span>
											<span><?$APPLICATION->IncludeFile(SITE_DIR."include/phone.php", Array(), Array("MODE" => "html", "NAME" => GetMessage("PHONE")));?></span>
										</span>
										<span class="order_wrap_btn">
											<span class="callback_btn"><?=GetMessage('CALLBACK')?></span>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="footer_bottom">
						<div class="wrap_md">
							<div class="iblock menu_block">
								<div class="wrap_md">
									<div class="iblock copy_block">
										<div class="copyright">
											<?$APPLICATION->IncludeFile(SITE_DIR."include/copyright.php", Array(), Array("MODE" => "html", "NAME"  => GetMessage("COPYRIGHT")));?>
										</div>
										<span class="pay_system_icons">
											<?$APPLICATION->IncludeFile(SITE_DIR."include/pay_system_icons.php", Array(), Array("MODE" => "html", "NAME" => GetMessage("PHONE")));?>
										</span>
									</div>
									<div class="iblock all_menu_block">
										<?$APPLICATION->IncludeComponent("bitrix:menu", "bottom_submenu_top", array(
											"ROOT_MENU_TYPE" => "bottom",
											"MENU_CACHE_TYPE" => "Y",
											"MENU_CACHE_TIME" => "86400",
											"MENU_CACHE_USE_GROUPS" => "N",
											"MENU_CACHE_GET_VARS" => array(),
											"MAX_LEVEL" => "1",
											"USE_EXT" => "N",
											"DELAY" => "N",
											"ALLOW_MULTI_SELECT" => "N"
											),false
										);?>
										<div class="wrap_md">
											<div class="iblock submenu_block">
												<?$APPLICATION->IncludeComponent("bitrix:menu", "bottom_submenu", array(
													"ROOT_MENU_TYPE" => "bottom_company",
													"MENU_CACHE_TYPE" => "Y",
													"MENU_CACHE_TIME" => "86400",
													"MENU_CACHE_USE_GROUPS" => "N",
													"MENU_CACHE_GET_VARS" => array(),
													"MAX_LEVEL" => "1",
													"USE_EXT" => "N",
													"DELAY" => "N",
													"ALLOW_MULTI_SELECT" => "N"
													),false
												);?>
											</div>
											<div class="iblock submenu_block">
												<?$APPLICATION->IncludeComponent("bitrix:menu", "bottom_submenu", array(
													"ROOT_MENU_TYPE" => "bottom_info",
													"MENU_CACHE_TYPE" => "Y",
													"MENU_CACHE_TIME" => "86400",
													"MENU_CACHE_USE_GROUPS" => "N",
													"MENU_CACHE_GET_VARS" => array(),
													"MAX_LEVEL" => "1",
													"USE_EXT" => "N",
													"DELAY" => "N",
													"ALLOW_MULTI_SELECT" => "N"
													),false
												);?>
											</div>
											<div class="iblock submenu_block">
												<?$APPLICATION->IncludeComponent("bitrix:menu", "bottom_submenu", array(
													"ROOT_MENU_TYPE" => "bottom_help",
													"MENU_CACHE_TYPE" => "Y",
													"MENU_CACHE_TIME" => "86400",
													"MENU_CACHE_USE_GROUPS" => "N",
													"MENU_CACHE_GET_VARS" => array(),
													"MAX_LEVEL" => "1",
													"USE_EXT" => "N",
													"DELAY" => "N",
													"ALLOW_MULTI_SELECT" => "N"
													),false
												);?>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="iblock social_block">
								<div class="wrap_md">
									<div class="empty_block iblock"></div>
									<div class="social_wrapper iblock">
										<div class="social">
											<?include($_SERVER['DOCUMENT_ROOT'].SITE_DIR.'include/social.info.mshop.default.php');?>
										</div>
										<div class="social ya-share-wrap">
											<script src="https://yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
											<script src="https://yastatic.net/share2/share.js"></script>
											<div class="ya-share-badge">Поделиться:</div>
											<div class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,moimir,twitter"></div>
										</div>
									</div>
								</div>
								<div id="bx-composite-banner"></div>
							</div>
						</div>
					</div>
					<?$APPLICATION->IncludeFile(SITE_DIR."include/bottom_include1.php", Array(), Array("MODE" => "text", "NAME" => GetMessage("ARBITRARY_1"))); ?>
					<?$APPLICATION->IncludeFile(SITE_DIR."include/bottom_include2.php", Array(), Array("MODE" => "text", "NAME" => GetMessage("ARBITRARY_2"))); ?>
				</div>
			</div>
		</footer>
		<?
		if(!CSite::inDir(SITE_DIR."index.php")){
			if(strlen($APPLICATION->GetPageProperty('title')) > 1){
				$title = $APPLICATION->GetPageProperty('title');
			}
			else{
				$title = $APPLICATION->GetTitle();
			}

			$APPLICATION->SetPageProperty("title", $title.' | '.$arSite['SITE_NAME']);
		}
		else{
			if(strlen($APPLICATION->GetPageProperty('title')) > 1){
				$title =  $APPLICATION->GetPageProperty('title');
			}
			else{
				$title =  $APPLICATION->GetTitle();
			}
			if(!empty($title)){
				$APPLICATION->SetPageProperty("title", $title);
			}
			else{
				$APPLICATION->SetPageProperty("title", $arSite['SITE_NAME']);
			}
		}
		?>
		<div id="content_new"></div>

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(57690268, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/57690268" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->


<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-158763087-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-158763087-1');
</script>

	</body>
</html>
