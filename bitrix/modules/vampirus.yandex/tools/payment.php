<?
error_reporting(E_ERROR | E_PARSE);

define("STOP_STATISTICS", true);
define("NOT_CHECK_PERMISSIONS", true);

if($_GET["admin_section"]=="Y")
	define("ADMIN_SECTION", true);
else
	define("BX_PUBLIC_TOOLS", true);

if(!require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php")) die('prolog_before.php not found!');
IncludeModuleLangFile(__FILE__);
if(CModule::IncludeModule("vampirus.yandex") && CModule::IncludeModule("sale")) {
    $bill_info = CVampiRUSYandexPayment::getBillInfo($_REQUEST['BILL_ID']);
    if($bill_info){
        $_SESSION['vampirus_yandexapi_order_id'] = $bill_info['BILL_ID'];
        $arOrder = CSaleOrder::GetByID($bill_info['ORDER_ID']);
        CSalePaySystemAction::InitParamArrays($arOrder, $arOrder["ID"]);
        $app_id = CVampiRUSYandexPayment::GetAppId();
        $wallet = CVampiRUSYandexPayment::GetWallet();
        $domain = (CSalePaySystemAction::GetParamValue("DOMAIN"))?CSalePaySystemAction::GetParamValue("DOMAIN"):$_SERVER['SERVER_NAME'];
        $domain = str_ireplace('http://','',rtrim($domain,'/'));
        $path = 'http://'.$domain.'/bitrix/tools/yandex_result.php';
        ?>
        <form action="https://sp-money.yandex.ru/oauth/authorize" method="POST" name="vampirus_yandex_form" >
          <input type="hidden" name="client_id" value="<?=$app_id?>" />
          <input type="hidden" name="response_type" value="code" />
          <input type="hidden" name="redirect_uri" value="<?=$path?>" />
          <input type="hidden" name="scope" value='payment.to-account("<?=$wallet?>").limit(,<?=$bill_info['SUM']?>) money-source("wallet","card")' />
        </form>
        <script type="text/javascript">
        document.forms.vampirus_yandex_form.submit();
        </script>
        <? }
}

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_after.php");
?>