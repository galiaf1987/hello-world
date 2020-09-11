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
    $hash = $_REQUEST['sha1_hash'];
    $str = $_REQUEST['notification_type'].'&'.
        $_REQUEST['operation_id'].'&'.
        $_REQUEST['amount'].'&'.
        $_REQUEST['currency'].'&'.
        $_REQUEST['datetime'].'&'.
        $_REQUEST['sender'].'&'.
        $_REQUEST['codepro'].'&'.
        CVampiRUSYandexPayment::GetPassword().'&'.
        $_REQUEST['label'];

    $bill_id = intval($_REQUEST['label']);
    $data = CVampiRUSYandexPayment::getBillInfo($bill_id);
    if(!$data){
        exit();
    }
    $order_id = $data['ORDER_ID'];
    $bills = CVampiRUSYandexPayment::getOrderBills($order_id);


    $sum = floatval($_REQUEST['withdraw_amount']);
    $eq_sum = true;
    if($sum){
        $eq_sum = $sum == floatval($data['SUM']);
    }
    if ($eq_sum && $hash == sha1($str)){
        CVampiRUSYandexPayment::billPay($bill_id);
        $bills[$bill_id]['PAY']=1;
        $fullpayment = 1;

        foreach($bills as $bill){
            if ($bill['PAY']==0){$fullpayment=0;}
        }
        if($fullpayment){
            $arFields = array(
                    "PS_STATUS" => "Y",
                    "PS_STATUS_CODE" => 'success',
                    "PS_STATUS_DESCRIPTION" => GetMessage('VAMPIRUS.YANDEX_ORDER_DESCRIPTION',array("#PAYER#"=>$_REQUEST['sender'])),
                    "PS_RESPONSE_DATE" => Date(CDatabase::DateFormatToPHP(CLang::GetDateFormat("FULL", LANG)),strtotime($_REQUEST['datetime'])),
                    'PAY_VOUCHER_NUM'=>$_REQUEST['operation_id'],
                    'PAY_VOUCHER_DATE'=>Date(CDatabase::DateFormatToPHP(CLang::GetDateFormat("FULL", LANG)),strtotime($_REQUEST['datetime'])),
                );
            $arOrder = CSaleOrder::GetByID($order_id);
            CSaleOrder::PayOrder($arOrder["ID"], "Y", true, true);
            CSaleOrder::Update($arOrder["ID"], $arFields);
        }
    }


}

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_after.php");
?>