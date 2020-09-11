<?if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();
IncludeTemplateLangFile(__FILE__);

// check prostroy module install
if (!IsModuleInstalled('redsign.prostroy')) {
    echo '<span style="color:red;">' . GetMessage('RSGOPRO.ERROR_NOT_INSTALLED_GOPRO') . '</span>';
    die();
}
// /check prostroy module install

// init devfunc
if (CModule::IncludeModule('redsign.devfunc')) {
    RSDevFunc::Init(array('jsfunc'));
} else {
    echo '<span style="color:red;">' . GetMessage('RSGOPRO.ERROR_NOT_INSTALLED_DEVFUNC') . '</span>';
    die();
}

// is main page
$IS_MAIN = 'N';
if ($APPLICATION->GetCurPage(true) == SITE_DIR . 'index.php')
    $IS_MAIN = 'Y';

$IS_SELECTION = ($APPLICATION->GetCurPage(true) == SITE_DIR . 'selection/index.php');

// is catalog page
$IS_CATALOG = 'Y';
if (strpos($APPLICATION->GetCurPage(true), SITE_DIR . 'catalog/') === false)
    $IS_CATALOG = 'N';

// is personal page
$IS_PERSONAL = 'Y';
if (strpos($APPLICATION->GetCurPage(true), SITE_DIR . 'personal/') === false)
    $IS_PERSONAL = 'N';

$IS_PRINT = isset($_GET['print']);

// is auth page
$IS_AUTH = 'Y';
if (strpos($APPLICATION->GetCurPage(true), SITE_DIR . 'auth/') === false)
    $IS_AUTH = 'N';

if ($_REQUEST['set_filter']) {
    $APPLICATION->SetPageProperty('robots', 'noindex, nofollow');
}
?><!DOCTYPE html><?
?>
<html><?
?>
<head><?
    ?><title><? $APPLICATION->ShowTitle() ?></title><?
    // Google fonts
    //$APPLICATION->SetAdditionalCSS('http://fonts.googleapis.com/css?family=Open+Sans:700,400,300&subset=latin,cyrillic,cyrillic-ext,latin-ext');
    // for mobile devices
    $APPLICATION->AddHeadString('<meta http-equiv="X-UA-Compatible" content="IE=edge" />');
    $APPLICATION->AddHeadString('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
    // CSS -> media query
    $APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . '/css/media.css');
    // jQuery
    $APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . '/js/jquery-1.11.0.min.js');
    // jQuery -> Mousewheel
    $APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . '/js/jquery.mousewheel.min.js');
    // jQuery -> cookie
    $APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . '/js/jquery.cookie.js');
    // jQuery -> jScrollPane
    $APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . '/js/jscrollpane/jquery.jscrollpane.min.js');
    $APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . '/js/jscrollpane/jquery.jscrollpane.css');
    $APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . '/js/jscrollpane/script.js');
    // jQuery -> JSSor slider
    $APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . '/js/jssor/jssor.core.js');
    $APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . '/js/jssor/jssor.utils.js');
    $APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . '/js/jssor/jssor.slider.min.js');
    $APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . '/js/jssor/style.css');
    // jQuery -> Fancybox
    $APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . '/js/fancybox/jquery.fancybox.pack.js');
    $APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . '/js/fancybox/jquery.fancybox.css');
    // jQuery -> scrollTo
    $APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . '/js/scrollto/jquery.scrollTo.min.js');
    //$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH.'/js/jquery.ba-bbq.js');
    $APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . '/js/jquery.smooth-scroll.min.js');
    // general scripts
    $APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . '/js/script.js');
    // offers
    $APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . '/js/offers.js');
    $APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . '/css/offers.css');
    // popup
    $APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . '/js/popup/script.js');
    $APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . '/js/popup/style.css');
    // Glass
    $APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . '/js/glass/script.js');
    $APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . '/js/glass/style.css');
    // yandex share
    $APPLICATION->AddHeadString('<script type="text/javascript" src="//yandex.st/share/share.js" charset="utf-8"></script>');
    // add style for auth pages
    if ($IS_AUTH == 'Y') {
        $APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . '/css/auth.css');
    }

    /*	$APPLICATION->AddHeadString('<script type="text/javascript" src="'.SITE_TEMPLATE_PATH.'/js/snow/mod_snowfalling.js" charset="utf-8"></script>');
        $APPLICATION->AddHeadString("<script type=\"text/javascript\">
    var snowStorm = null;
    snowStorm = new SnowStorm('".SITE_TEMPLATE_PATH."/js/snow/image-snow1/', '14', '14', '128', '64', '8', '2', '', '1', '', '', '1', '', '3', '5','0', '1', '6');
    </script>");*/


    // bitrix head and scripts
    $APPLICATION->ShowHead();

    $adaptive = COption::GetOptionString('redsign.proopt', 'adaptive', 'Y');
    $prop_option = COption::GetOptionString('redsign.proopt', 'prop_option', 'line_through');
    ?>
    <script type="text/javascript">
        // some JS params
        var BX_COOKIE_PREFIX = 'BITRIX_SM_',
            SITE_ID = '<?=SITE_ID?>',
            SITE_DIR = '<?=str_replace('//', '/', SITE_DIR);?>',
            SITE_TEMPLATE_PATH = '<?=str_replace('//', '/', SITE_TEMPLATE_PATH);?>',
            SITE_CATALOG_PATH = 'catalog',
            RSGoPro_Adaptive = <?=($adaptive == 'Y' ? 'true' : 'false')?>,
            RSGoPro_FancyCloseDelay = 1000,
            RSGoPro_FancyReloadPageAfterClose = false,
            RSGoPro_OFFERS = {},
            RSGoPro_FAVORITE = {},
            RSGoPro_COMPARE = {},
            RSGoPro_INBASKET = {},
            RSGoPro_STOCK = {},
            RSGoPro_PHONETABLET = "N";
        // messages
        BX.message({
            "RSGOPRO_JS_TO_MACH_CLICK_LIKES": "<?=CUtil::JSEscape(GetMessage('RSGOPRO.JS_TO_MACH_CLICK_LIKES'))?>",
            "RSGOPRO_JS_COMPARE": "<?=CUtil::JSEscape(GetMessage('RSGOPRO.RSGOPRO_JS_COMPARE'))?>",
            "RSGOPRO_JS_COMPARE_IN": "<?=CUtil::JSEscape(GetMessage('RSGOPRO.RSGOPRO_JS_COMPARE_IN'))?>"
        });
    </script><?
    ?>
    <?/*<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-115204500-1" data-skip-moving=true></script>
<script data-skip-moving=true>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-115204500-1');
</script>*/ ?>
    <!-- Global site tag (gtag.js) - AdWords: 830679255 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-830679255"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'AW-830679255');
    </script>

    <!-- Google Analytics -->
    <script>
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-115204500-1', 'auto');  // Replace with your property ID.
        ga('send', 'pageview');
        ga('require', 'ec');
    </script>
    <!-- End Google Analytics -->
    <script type="text/javascript" data-skip-moving=true>
        document.write(unescape("%3Cscript src='" + "//yandex.mightycall.ru/c2c/js/MightyCallC2C_5.4.js' type='text/javascript'%3E%3C/script%3E"));
        document.write(unescape("%3Cscript src='" + "//mightycallstorage.blob.core.windows.net/c2cjss/d452de4e-dcd7-4b1c-8e8f-1bda1d006e55.js' type='text/javascript'%3E%3C/script%3E"));
    </script>
    <script type="text/javascript" data-skip-moving=true>
        InitClick2Call();
    </script>

    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function (m, e, t, r, i, k, a) {
            m[i] = m[i] || function () {
                (m[i].a = m[i].a || []).push(arguments)
            };
            m[i].l = 1 * new Date();
            k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
        })
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(52677499, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true
        });
    </script>
    <noscript>
        <div><img src="https://mc.yandex.ru/watch/52677499" style="position:absolute; left:-9999px;" alt=""/></div>
    </noscript>
    <!-- /Yandex.Metrika counter -->

    <?
    ?></head><?
?>
<body class="prop_option_<?= $prop_option ?><? if ($adaptive == "Y"): ?> adaptive<?endif; ?><? if ($IS_PRINT): ?> print<?endif; ?>"><?
if (!$IS_PRINT):
    ?>
    <div id="panel"><?= $APPLICATION->ShowPanel() ?></div><?
endif;
?>
<div style="position:fixed;top:0;width:100%;z-index:9999;background:#fff;padding:3px;box-shadow:0 1px 7px #214496;text-align:center;font-weight:bold;">
    <div style="color:#f00;">При покупке от 4-х радиаторов гарантированная скидка 7%</div>
    <div style="color:#338be6">+7 (495) 131-89-00</div>
</div>
<?
?>
<div class="body"><!-- body --><?
    ?>
    <div class="tline"></div><?
    if (!$IS_PRINT):
        ?>
        <div id="tpanel" class="tpanel"><?
        ?>
        <div class="centering"><?
        ?>
        <div class="centeringin clearfix"><?
        ?>
        <div class="authandlocation nowrap"><?
        $APPLICATION->IncludeComponent("redsign:autodetect.location", "inheader", array(
            "RSLOC_INCLUDE_JQUERY" => "N",
            "RSLOC_LOAD_LOCATIONS" => "N"
        ),
            false,
            array(
                "ACTIVE_COMPONENT" => "N",
            )
        );
        ?><?
        $APPLICATION->IncludeComponent(
            "bitrix:system.auth.form",
            "inheader",
            array(
                "REGISTER_URL" => "/auth/",
                "PROFILE_URL" => "/personal/profile/"
            )
        );
        ?></div><?
        $APPLICATION->IncludeComponent(
            "bitrix:menu",
            "tpanel",
            array(
                "CACHE_SELECTED_ITEMS" => "N",
                "ROOT_MENU_TYPE" => "tpanel",
                "MAX_LEVEL" => "1",
                "CHILD_MENU_TYPE" => "",
                "USE_EXT" => "N",
                "MENU_CACHE_TYPE" => "A",
                "MENU_CACHE_TIME" => "3600",
                "MENU_CACHE_USE_GROUPS" => "Y",
                "MENU_CACHE_GET_VARS" => array()
            )
        );
        ?></div><?
        ?></div><?
        ?></div><?
    endif;
    ?>
    <div id="header" class="header"><?
        ?>
        <div class="centering"><?
            ?>
            <div class="centeringin clearfix"><?
                ?>
                <div class="logo column1"><?
                    ?>
                    <div class="column1inner text-center"><?
                        ?><a class="title" href="<?= SITE_DIR ?>"><?
                            $APPLICATION->IncludeFile(
                                SITE_TEMPLATE_PATH . "/include_areas/logo.php",
                                array(),
                                array("MODE" => "html")
                            );
                            ?></a><?
                        ?>
                        <noindex><a target="_blank" href="https://rifar.ru/buy/#bx_40480796_755"><?
                                $APPLICATION->IncludeFile(
                                    SITE_TEMPLATE_PATH . "/include_areas/rifar.php",
                                    array(),
                                    array("MODE" => "html")
                                );
                                ?></a></noindex><?
                        ?></div><?
                    ?></div><?
                ?>
                <div class="phone column1 nowrap"><?
                    ?>
                    <div class="column1inner text-center"><?
                        ?><i class="icon pngicons mobile_hide"></i><?
                        $APPLICATION->IncludeFile(
                            SITE_TEMPLATE_PATH . "/include_areas/header_phone.php",
                            array(),
                            array("MODE" => "html")
                        );
                        ?><br/><?
                        ?><i class="icon pngicons mobile_hide"></i><?
                        ?><a href="tel:+7(495)231-89-00" style="font-size: 15pt;color:#000;"><b>+7 (495)
                                231-89-00</b></a><?
                        ?><a class="fancyajax fancybox.ajax recall" style="display:block" href="/recall/"
                             title="Заказать звонок">Заказать звонок</a><?
                        /*?><a class="fancyajax fancybox.ajax recall" href="/recall/" title="Обратный звонок"><?/*<i class="icon pngicons"></i>* /?>Обратный звонок</a><?*/
                        ?></div><?
                    ?></div><?
                if (!$IS_PRINT):
                    ?>
                    <div class="favorite column1 nowrap"><?
                    ?>
                    <div class="column1inner text-center"><?
                    ?><a
                        href="https://yandex.ru/maps/20728/korolev/?ll=37.913555%2C55.905552&mode=search&oid=243693795803&ol=biz&z=11"
                        target="_blank">Москва г. Мытищи, <br> ул. 3-я Крестьянская, стр. 23. <br> ОДЦ «Айсберг», Офис
                    №1.</a><?
                    /*$APPLICATION->IncludeComponent(
                        "redsign:favorite.list",
                        "inheader",
                        array(
                            "CACHE_TYPE" => "N",
                            "CACHE_TIME" => "3600",
                            "ACTION_VARIABLE" => "topaction",
                            "PRODUCT_ID_VARIABLE" => "id"
                        ),
                        false
                    );*/
                    ?></div><?
                    ?></div><?
                    ?>
                    <div class="callback column1 nowrap partner"><?
                    ?>
                    <div class="column1inner text-center"><?
                    ?>
                    <div style="float:left;width:70%">
                        Обработка заказов с 9:00 до 19:00<br>
                        Прием звонков с 9:00 до 21:00<br>
                        <a class="email" style="color: #000000"
                           href="mailto:info@rifarmoscow.ru"><b>info@rifarmoscow.ru</b></a>
                    </div><?
                    ?>
                    <div style="float:left;width:30%">
                    <img src="<?= SITE_TEMPLATE_PATH ?>/img/partner_logo.png" alt=""/>
                    </div><?
                    ?></div><?
                    ?></div><?
                    ?>
                    <div class="basket column1 nowrap"><?
                    ?>
                    <div class="column1inner"><?
                    $APPLICATION->IncludeComponent("bitrix:sale.basket.basket.small", "inheader", array(
                        "PATH_TO_BASKET" => "/personal/cart/",
                        "PATH_TO_ORDER" => "/personal/order/",
                        "SHOW_DELAY" => "Y",
                        "SHOW_NOTAVAIL" => "Y",
                        "SHOW_SUBSCRIBE" => "Y"
                    ),
                        false
                    );
                    ?></div><?
                    ?></div><?
                endif;
                ?></div><?
            ?>
            <div class="centering">
                <div style="text-align:center;margin-bottom:10px;font-style: italic;"> Мы работаем! </span>  Принимаем
                    заказы на доставку и бесконтактный самовывоз!
                </div>
            </div><?
            ?></div><?
        if (!$IS_PRINT):
            ?>
            <div class="centering"><?
            ?>
            <div class="centeringin clearfix"><?
            $APPLICATION->IncludeComponent(
                "bitrix:menu",
                "catalog",
                array(
                    "CACHE_SELECTED_ITEMS" => "N",
                    "ROOT_MENU_TYPE" => "catalog",
                    "MENU_CACHE_TYPE" => "A",
                    "MENU_CACHE_TIME" => "3600",
                    "MENU_CACHE_USE_GROUPS" => "Y",
                    "MENU_CACHE_GET_VARS" => array(),
                    "MAX_LEVEL" => "1",
                    "CHILD_MENU_TYPE" => "",
                    "USE_EXT" => "Y",
                    "DELAY" => "N",
                    "ALLOW_MULTI_SELECT" => "N",
                    "CATALOG_PATH" => "/catalog/",
                    "MAX_ITEM" => "9",
                    "IS_MAIN" => $IS_MAIN,
                    "COMPONENT_TEMPLATE" => "catalog",
                    "RSGOPRO_CATALOG_PATH" => "/catalog/",
                    "RSGOPRO_MAX_ITEM" => "99",
                    "RSGOPRO_IS_MAIN" => "N",
                    "RSGOPRO_PROPCODE_ELEMENT_IN_MENU" => "",
                    "IBLOCK_ID" => array(),
                    "PRICE_CODE" => array(),
                    "PRICE_VAT_INCLUDE" => "N",
                    "OFFERS_FIELD_CODE" => array(
                        0 => "",
                        1 => "",
                    ),
                    "OFFERS_PROPERTY_CODE" => array(
                        0 => "",
                        1 => "",
                    ),
                    "CONVERT_CURRENCY" => "N",
                    "USE_PRODUCT_QUANTITY" => "N",
                    "PRODUCT_QUANTITY_VARIABLE" => "",
                    "COMPOSITE_FRAME_MODE" => "A",
                    "COMPOSITE_FRAME_TYPE" => "AUTO"
                ),
                false
            );
            ?><?
            $APPLICATION->IncludeComponent(
                "bitrix:search.title",
                "inheader",
                array(
                    "NUM_CATEGORIES" => "1",
                    "TOP_COUNT" => "5",
                    "ORDER" => "date",
                    "USE_LANGUAGE_GUESS" => "N",
                    "CHECK_DATES" => "N",
                    "SHOW_OTHERS" => "N",
                    "PAGE" => "/search/",
                    "CATEGORY_0_TITLE" => "",
                    "CATEGORY_0" => array(
                        0 => "no",
                    ),
                    "SHOW_INPUT" => "Y",
                    "INPUT_ID" => "title-search-input",
                    "CONTAINER_ID" => "title-search",
                    "IBLOCK_ID" => array(
                        0 => "1",
                    ),
                    "PRICE_CODE" => array(
                        0 => "BASE",
                        1 => "WHOLE",
                        2 => "RETAIL",
                        3 => "EXTPRICE",
                        4 => "EXTPRICE2",
                    ),
                    "PRICE_VAT_INCLUDE" => "N",
                    "OFFERS_FIELD_CODE" => array(
                        0 => "NAME",
                        1 => "PREVIEW_PICTURE",
                        2 => "",
                    ),
                    "OFFERS_PROPERTY_CODE" => array(
                        0 => "CML2_LINK",
                        1 => "",
                    ),
                    "CONVERT_CURRENCY" => "N",
                    "USE_PRODUCT_QUANTITY" => "N",
                    "PRODUCT_QUANTITY_VARIABLE" => "quan"
                ),
                false
            );
            ?></div><?
            ?></div><?
        endif;
        ?></div><?
    if ($IS_MAIN == 'N') {
        ?>
        <div id="title" class="title"><?
        ?>
        <div class="centering"><?
        ?>
        <div class="centeringin clearfix"><?
        $APPLICATION->IncludeComponent(
            "bitrix:breadcrumb",
            "gopro",
            array(
                "START_FROM" => "0",
                "PATH" => "",
                "SITE_ID" => "-"
            ),
            false
        );
        if (!$IS_SELECTION):
            ?><h1<?/* class="pagetitle"*/
            ?>><? $APPLICATION->ShowTitle(false) ?></h1><?
            $APPLICATION->ShowViewContent('header_h1');
        endif;
        ?></div><?
        ?></div><?
        ?></div><!-- /title --><?
    }
    ?>
    <div id="content" class="content"><?
        ?>
        <div class="centering"><?
            ?>
            <div class="centeringin clearfix"><?
