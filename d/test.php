<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Интернет-магазин \"Инструменты\"");
var_dump(mail('gdimon@inbox.ru', '123', '234'));
$arEventFields = array("EMAIL"=>"gdimon@inbox.ru", "SALE_EMAIL"=>"rifar.moscow@yandex.ru" /* "SALE_EMAIL"=>"info@xn--80apxcs.xn--80adxhks"*/);
CEvent::Send("SALE_NEW_ORDER", 's1', $arEventFields);
var_dump(SITE_ID);
?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>