<?
// http://dev.1c-bitrix.ru/community/webdev/user/11948/blog/6756/
AddEventHandler('sale', 'OnSaleComponentOrderOneStepComplete', Array('CSaleHandlers', 'OnSaleComponentOrderOneStepCompleteHandler'));
//AddEventHandler('main', 'OnPageStart', Array('CSaleHandlers', 'OnPageStartHandler'));

class CSaleHandlers {
	public static function OnPageStartHandler() {
		if($_SESSION['NEXT_LOGOUT']) {
			unset($_SESSION['NEXT_LOGOUT']);
			$GLOBALS['USER']->Logout();
		}
	}
	private static $bGuestOrder = false;
	public static function StartAuth($arUserResult) {
		if($_SESSION['NEXT_LOGOUT']) {
			AddEventHandler('main', 'OnEpilog', Array('CSaleHandlers', 'OnPageStartHandler'));
		}
		$arUserResult['USER_EMAIL'] = $arUserResult['PERSON_TYPE'] == 3 ? $arUserResult['ORDER_PROP_20'] : $arUserResult['ORDER_PROP_9'];
		if ($arUserResult['confirmorder']=='Y' && !$GLOBALS['USER']->IsAuthorized()) {
			if ($arUser = CUser::GetList($by='id', $order='asc', array('=EMAIL' => $arUserResult['USER_EMAIL']))->Fetch()) {
				if ($arUser /*&& !in_array(1, CUser::GetUserGroup($arUser['ID']))*/ ) {
					$GLOBALS['USER']->Authorize($arUser['ID']);
					self::$bGuestOrder = true;
					$_SESSION['NEXT_LOGOUT'] = true;
					AddEventHandler('main', 'OnEpilog', Array('CSaleHandlers', 'OnPageStartHandler'));
				}
			}
		} else if($arUserResult['ORDER_ID'] && !$GLOBALS['USER']->IsAuthorized()) {
			CModule::IncludeModule('sale');
			
			$arOrder = CSaleOrder::GetByID($arUserResult['ORDER_ID']);
			if($arOrder) {
				$GLOBALS['USER']->Authorize($arOrder['USER_ID']);
				$_SESSION['NEXT_LOGOUT'] = true;
				AddEventHandler('main', 'OnEpilog', Array('CSaleHandlers', 'OnPageStartHandler'));
			}
		}
	}
	public static function OnSaleComponentOrderOneStepProcessHandler($arResult, $arUserResult, $arParams) {
		if (empty($arResult['ERROR']) && $arUserResult['CONFIRM_ORDER']=='Y' && !$GLOBALS['USER']->IsAuthorized()) {
			if ($arUser = CUser::GetList($by='id', $order='asc', array('=EMAIL' => $arUserResult['USER_EMAIL']))->Fetch()) {
				if (!in_array(1, CUser::GetUserGroup($arUser['ID']))) {
					$GLOBALS['USER']->Authorize($arUser['ID']);
					self::$bGuestOrder = true;
				}
			}
		}
	}
	public static function OnOrderUpdateHandler($ID, $arFields) {
		if (self::$bGuestOrder && $GLOBALS['USER']->IsAuthorized() && isset($arFields['PRICE'])) {
			$_SESSION['SAVED_UID'] = $GLOBALS['USER']->GetID();
			$GLOBALS['USER']->Logout();
		}
	}
	public static function OnSaleComponentOrderOneStepCompleteHandler($ID, $arOrder, $arParams) {
		if ($ID <= 0) {
			if (self::$bGuestOrder) {
				$GLOBALS['USER']->Logout();
			}
		}
	}
	public static function OnSaleComponentOrderOneStepFinalHandler($ID, $arOrder, $arParams) {
		if ((!$GLOBALS['USER']->IsAuthorized() && $_SESSION['SAVED_UID']!=$arOrder['USER_ID']) || 
			($GLOBALS['USER']->IsAuthorized() && $GLOBALS['USER']->GetID()!=$arOrder['USER_ID'])) {
			$arOrder = array();
		}
	}
}