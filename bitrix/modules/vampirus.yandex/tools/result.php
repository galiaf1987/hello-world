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
$bill_id = $_SESSION['vampirus_yandexapi_order_id'];


if(CModule::IncludeModule("vampirus.yandex") && CModule::IncludeModule("sale")&&$bill_id) {
    $order_id = CVampiRUSYandexPayment::getOrderByBillId($bill_id);
	$error = isset($_REQUEST['error'])?$_REQUEST['error']:false;
	$code = isset($_REQUEST['code'])?$_REQUEST['code']:false;
    $repeat = isset($_REQUEST['repeat'])?$_REQUEST['repeat']:false;
	$arOrder = CSaleOrder::GetByID($order_id);
   	CSalePaySystemAction::InitParamArrays($arOrder, $arOrder["ID"]);
   	$domain = (CSalePaySystemAction::GetParamValue("DOMAIN"))?CSalePaySystemAction::GetParamValue("DOMAIN"):$_SERVER['SERVER_NAME'];
	$domain = str_ireplace('http://','',rtrim($domain,'/'));
	$order_url = 'http://'.$domain.'/personal/order/';
	$processpayment = isset($_REQUEST['processpayment'])?$_REQUEST['processpayment']:false;
	if ($error){
        $_SESSION['vampirus_yandexapi_order_id']=false;
        $_SESSION['vampirus_yandexapi_access_token']=false;
        if ($error=='access_denied'){
            $_REQUEST['error_description'] = GetMessage('VAMPIRUS.YANDEX_ACCESS_DENIED_ERROR');
        }
        echo GetMessage('VAMPIRUS.YANDEX_ERROR').htmlspecialchars($_REQUEST['error_description']);
        echo "<br/><a href='$order_url'>".GetMessage("VAMPIRUS.YANDEX_GOTO_ORDERS")."</a>";
        exit();
	}
	if ($code || ($repeat && isset($_SESSION['vampirus_yandexapi_access_token']))){
        if( $code ){
           $data = array('code'=>$code,
                'client_id'=>CVampiRUSYandexPayment::GetAppId(),
                'grant_type'=>'authorization_code',
                'client_secret'=>CVampiRUSYandexPayment::GetSecret(),
                'redirect_uri'=>'http://'.$domain.'/bitrix/tools/yandex_result.php'
            );
            $response = CVampiRUSYandexPayment::Request('https://sp-money.yandex.ru/oauth/token',$data);
            if (!$response){
                echo GetMessage('VAMPIRUS.YANDEX_ERROR');
                echo "<br/><a href='$order_url'>".GetMessage("VAMPIRUS.YANDEX_GOTO_ORDERS")."</a>";
                exit();
            }
            $result = json_decode($response);
            if (isset($result->error)){
                echo GetMessage('VAMPIRUS.YANDEX_ERROR').htmlspecialchars($result->error);
                echo "<br/><a href='$order_url'>".GetMessage("VAMPIRUS.YANDEX_GOTO_ORDERS")."</a>";
                exit();
            }
            $_SESSION['vampirus_yandexapi_access_token']=$result->access_token;
        }
        $headers = array('Authorization'=>'Bearer '.$_SESSION['vampirus_yandexapi_access_token']);


		$bill_info = CVampiRUSYandexPayment::getBillInfo($bill_id);
		$Sum = number_format($bill_info['SUM'], 2, '.', '');
        $data = array(
	        'pattern_id'=>'p2p',
	        'to'=>CVampiRUSYandexPayment::GetWallet(),
	        'amount'=>$Sum,
	        'comment'=>GetMessage('VAMPIRUS.YANDEX_ORDER_COMMENT',array('#ORDER_ID#'=>$order_id)),//'Оплата заказа №'.$order_info['details']['BT']->order_number,
	        'message'=>GetMessage('VAMPIRUS.YANDEX_ORDER_COMMENT',array('#ORDER_ID#'=>$order_id)),//'Оплата заказа №'.$order_info['details']['BT']->order_number,
	        'label'=>$bill_id
	    );
	    $response = CVampiRUSYandexPayment::Request('https://money.yandex.ru/api/request-payment',$data,$headers);
        if (!$response){
            echo GetMessage('VAMPIRUS.YANDEX_ERROR');
            echo "<br/><a href='$order_url'>".GetMessage("VAMPIRUS.YANDEX_GOTO_ORDERS")."</a>";
            exit();
        }
	    $result = json_decode($response);
        if ($result->status=='success'){
        	$token = $_SESSION['vampirus_yandexapi_access_token'];
            $headers = array('Authorization'=>'Bearer '.$token);
        	$data = array(
                'request_id'=>$result->request_id
                            );
            $response = CVampiRUSYandexPayment::Request('https://money.yandex.ru/api/process-payment',$data,$headers);
            if (!$response){
                    echo GetMessage('VAMPIRUS.YANDEX_ERROR');
                    echo "<br/><a href='$order_url'>".GetMessage("VAMPIRUS.YANDEX_GOTO_ORDERS")."</a>";
                    exit();
                }
            $result = json_decode($response);
            $_SESSION['vampirus_yandexapi_order_id']=false;
	        $_SESSION['vampirus_yandexapi_access_token']=false;
            unset($_SESSION['vampirus_yandexapi_order_id'],$_SESSION['vampirus_yandexapi_access_token']);
			$arFields = array(
				//"PS_STATUS" => "Y",
				"PS_STATUS_CODE" => $result->status,
				"PS_STATUS_DESCRIPTION" => GetMessage('VAMPIRUS.YANDEX_ORDER_DESCRIPTION',array("#PAYER#"=>$result->payer)),
				"PS_RESPONSE_DATE" => Date(CDatabase::DateFormatToPHP(CLang::GetDateFormat("FULL", LANG))),
				'PAY_VOUCHER_NUM'=>$result->payment_id,
				'PAY_VOUCHER_DATE'=>Date(CDatabase::DateFormatToPHP(CLang::GetDateFormat("FULL", LANG))),
			);

            if ($result->status=='success'){
                CVampiRUSYandexPayment::billPay($bill_id);
                $bills = CVampiRUSYandexPayment::getOrderBills($order_id);
                $bills[$bill_id]['PAY'] = 1;
                $fullpayment = 1;
                foreach($bills as $bill){
                    if ($bill['PAY']==0){$fullpayment=0;}
                }
                if ($fullpayment) {
                    CSaleOrder::PayOrder($arOrder["ID"], "Y", true, true);
                } else {
                    CSaleOrder::PayOrder($arOrder["ID"],'N');
                }
                CSaleOrder::PayOrder($arOrder["ID"], "Y", true, true);
            } elseif($result->status=='refused'){
                //CSaleOrder::CancelOrder($arOrder["ID"], "Y", $result->error);
            } else {
                CSaleOrder::PayOrder($arOrder["ID"],'N');
            }
            CSaleOrder::Update($arOrder["ID"], $arFields);
            header('Location: '.$order_url);
        } else {
        	$error = GetMessage('VAMPIRUS.YANDEX_ERROR_'.strtoupper($result->error));
        	if($result->error=='ext_action_required'){
                header('Location: https://sp-money.yandex.ru/idlight.xml?retpath='.urlencode('http://'.$domain.'/bitrix/tools/yandex_result.php?repeat=1'));
        	}
            $_SESSION['vampirus_yandexapi_order_id']=false;
	        $_SESSION['vampirus_yandexapi_access_token']=false;
            unset($_SESSION['vampirus_yandexapi_order_id'],$_SESSION['vampirus_yandexapi_access_token']);
        	echo GetMessage('VAMPIRUS.YANDEX_ERROR').htmlspecialchars($error.":".$result->error_description);
            echo "<br/><a href='$order_url'>".GetMessage("VAMPIRUS.YANDEX_GOTO_ORDERS")."</a>";
        }
	}

}

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/epilog_after.php");
?>