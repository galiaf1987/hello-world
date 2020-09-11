<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
IncludeModuleLangFile(__FILE__);
if(!CModule::IncludeModule("vampirus.yandex")) return;

$order_id = CSalePaySystemAction::GetParamValue("ORDER_ID");
$sum = CSalePaySystemAction::GetParamValue("SHOULD_PAY");
if (CSalePaySystemAction::GetParamValue("CURRENCY")){
	$arOrder = CSaleOrder::GetByID($order_id);
	$sum = number_format(CCurrencyRates::ConvertCurrency($sum,CSalePaySystemAction::GetParamValue("CURRENCY"),'RUB'),2,'.','');
}
$app_id = CVampiRUSYandexPayment::GetAppId();
$wallet = CVampiRUSYandexPayment::GetWallet();
$domain = (CSalePaySystemAction::GetParamValue("DOMAIN"))?CSalePaySystemAction::GetParamValue("DOMAIN"):$_SERVER['SERVER_NAME'];
$domain = str_ireplace('http://','',rtrim($domain,'/'));
$path = 'http://'.$domain.'/bitrix/tools/yandex_result.php';


$bills = CVampiRUSYandexPayment::getBills($order_id, $sum);
foreach($bills as $bill) {
	$bill['SUM'] = number_format($bill['SUM'],2,'.','');
	if($bill['PAY']==1){
		echo GetMessage("VAMPIRUS.YANDEX_ORDER_ALREADY_PAY",array('#SUM#'=>$bill['SUM']));
	} else {
		echo GetMessage("VAMPIRUS.YANDEX_ORDER_PAY_SUM",array('#SUM#'=>$bill['SUM']));
		if(CSalePaySystemAction::GetParamValue("CARD")){
			$rsSites = CSite::GetByID(SITE_ID);
			$arSite = $rsSites->Fetch();
			$domain = (CSalePaySystemAction::GetParamValue("DOMAIN"))?CSalePaySystemAction::GetParamValue("DOMAIN"):$_SERVER['SERVER_NAME'];
			$domain = str_ireplace('http://','',rtrim($domain,'/'));
			$order_url = 'http://'.$domain.'/personal/order/';
		?>
		<form method="POST" name="yandexapi_form" action="https://money.yandex.ru/quickpay/confirm.xml" target="_blank">
		<input type="hidden" name="receiver" value="<?=$wallet?>">
		<input type="hidden" name="formcomment" value="<?=$arSite['SITE_NAME']?>">
		<input type="hidden" name="short-dest" value="<?=GetMessage("VAMPIRUS.YANDEX_ORDER_PAY");?>">
		<input type="hidden" name="label" value="<?=$bill['BILL_ID']?>">
		<input type="hidden" name="quickpay-form" value="shop">
		<input type="hidden" name="targets" value="<?=$order_id?>">
		<input type="hidden" name="sum" value="<?=$bill['SUM']?>" data-type="number" >
		<input type="hidden" name="need-fio" value="false">
		<input type="hidden" name="need-email" value="false" >
		<input type="hidden" name="need-phone" value="false">
		<input type="hidden" name="need-address" value="false">
		<input type="hidden" name="paymentType" value="AC">
		<input type="hidden" name="successURL" value="<?php echo $order_url; ?>">
		<input type="submit" class="vampirus_yandex_submit_button" value="<?=GetMessage("VAMPIRUS.YANDEX_PAY");?>" />
		</form>
		<?
		} else {
		?>
		<form action="/bitrix/tools/yandex_payment.php" method="POST" name="yandexapi_form" >
		  <input type="hidden" name="BILL_ID"  value="<?=$bill['BILL_ID']?>"/>
		  <input type="submit" class="vampirus_yandex_submit_button" value="<?=GetMessage("VAMPIRUS.YANDEX_PAY");?>" />
		</form>
		<? } ?>
	<? } ?>
	<br>
<? } ?>