<?
global $MESS;
$MESS ['VAMPIRUS.YANDEX_PARTNER_NAME'] = "ИП Кравцов Н.Г.";
$MESS ['VAMPIRUS.YANDEX_INSTALL_NAME'] = "Приём оплаты Яндекс.Деньгами";
$MESS ['VAMPIRUS.YANDEX_INSTALL_DESCRIPTION'] = "Приём оплаты Янедекс.Деньгами через API без заключения договора";
$MESS ['VAMPIRUS.YANDEX_INSTALL_TITLE'] = "Установка модуля платёжных сервисов";
$MESS ['VAMPIRUS.YANDEX_INSTALL_PUBLIC_DIR'] = "Публичная папка";
$MESS ['VAMPIRUS.YANDEX_INSTALL_SETUP'] = "Установить";
$MESS ['VAMPIRUS.YANDEX_INSTALL_COMPLETE_OK'] = "Установка завершена. Для дополнительной помощи обратитесь в раздел помощи.";
$MESS ['VAMPIRUS.YANDEX_INSTALL_COMPLETE_ERROR'] = "Установка завершена с ошибками";
$MESS ['VAMPIRUS.YANDEX_INSTALL_ERROR'] = "Ошибки при установке";
$MESS ['VAMPIRUS.YANDEX_INSTALL_BACK'] = "Вернуться в управление модулями";
$MESS ['VAMPIRUS.YANDEX_UNINSTALL_WARNING'] = "Внимание! Модуль будет удален из системы.";
$MESS ['VAMPIRUS.YANDEX_UNINSTALL_SAVEDATA'] = "Вы можете сохранить данные в таблицах базы данных, если установите флажок &quot;Сохранить таблицы&quot;";
$MESS ['VAMPIRUS.YANDEX_UNINSTALL_SAVETABLE'] = "Сохранить таблицы";
$MESS ['VAMPIRUS.YANDEX_UNINSTALL_DEL'] = "Удалить";
$MESS ['VAMPIRUS.YANDEX_UNINSTALL_ERROR'] = "Ошибки при удалении:";
$MESS ['VAMPIRUS.YANDEX_UNINSTALL_COMPLETE'] = "Удаление завершено.";
$MESS ['VAMPIRUS.YANDEX_INSTALL_PUBLIC_SETUP'] = "Установить";
$MESS ['VAMPIRUS.YANDEX_INSTALL_UNPOSSIBLE'] = "Деинсталляция модуля невозможна.";
$MESS ['VAMPIRUS.YANDEX_INSTALL_APP_ID_EMPTY'] = "Необходимо указать \"Идентификатор приложения\"";
$MESS ['VAMPIRUS.YANDEX_INSTALL_CLIENT_SECRET_EMPTY'] = "Необходимо указать \"OAuth2 client_secret\"";

$MESS ['VAMPIRUS.YANDEX_OPTIONS_APP_ID'] = "Идентификатор приложения";
$MESS ['VAMPIRUS.YANDEX_OPTIONS_APP_ID_DESC'] = "Для получения идентификатора необходимо <a target=\"_blank\" href=\"https://sp-money.yandex.ru/myservices/new.xml\">зарегистрировать приложение</a><br/>в Redirect uri необходимо указать:http://".$_SERVER['SERVER_NAME']."/bitrix/tools/yandex_result.php";
$MESS ['VAMPIRUS.YANDEX_OPTIONS_CLIENT_SECRET'] = "OAuth2 client_secret";
$MESS ['VAMPIRUS.YANDEX_OPTIONS_CLIENT_SECRET_DESC'] = "";
$MESS ['VAMPIRUS.YANDEX_OPTIONS_PASSWORD'] = "Секретное слово для уведомлений";
$MESS ['VAMPIRUS.YANDEX_OPTIONS_PASSWORD_DESC'] = "<a target=\"_blank\" href=\"https://sp-money.yandex.ru/myservices/online.xml?from=itun\">Необходимо включить и настроить уведомления</a>, для автоматического установления статуса оплаты заказа<br/>Адрес для уведомлений:http://".$_SERVER['SERVER_NAME']."/bitrix/tools/yandex_notify.php";
$MESS ['VAMPIRUS.YANDEX_OPTIONS_WALLET'] = "Яндекс Кошелёк";
$MESS ['VAMPIRUS.YANDEX_OPTIONS_WALLET_DESC'] = "Номер кошелька в Яндекс.Деньги, на который будет приходить оплата";
?>