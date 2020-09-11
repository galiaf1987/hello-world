<?
use Bitrix\Sale;
CModule::IncludeModule("catalog");
CModule::IncludeModule("iblock");

//AddEventHandler("sale", "OnBeforeBasketAdd", "\AddPresentToBasket", 10);


AddEventHandler("sale", "OnBasketAdd", "\AddPresentToBasket2", 10);
AddEventHandler("sale", "OnSaleOrderSaved", array("CCatalogProductProviderOtp", "OnSaleOrderSaved"), 10);

/*	function  AddPresentToBasket(&$arFields) {
		$arFields["PRODUCT_PROVIDER_CLASS"]="CCatalogProductProviderDP";

		$rs = CIBlockElement::GetByID($arFields["PRODUCT_ID"]);
		$ob=$rs->GetNextElement();
		if($ob) {
			$pr=$ob->GetProperties();
			if($pr['CODE']['VALUE']) {
				$tmp = array("NAME" => "���", "CODE" => "CODE", "VALUE" => $pr['CODE']['VALUE'], "SORT" => 10);
			} else {
				$tmp = false;
			}
		} else {
			$tmp = false;
		}

		if($tmp) $arFields["PROPS"][] = $tmp;

		CCatalogProductProviderDP::correctProductPrice($arFields, $arFields["PRODUCT_ID"]);
	}*/
	function  AddPresentToBasket2($ID, $arFields) {
		//игнорировать товары в разделе монтажных работ
		$res = CIBlockElement::GetByID($arFields["PRODUCT_ID"]);
		if($ar_res = $res->GetNext()) {
			if ($ar_res["IBLOCK_SECTION_ID"] === '1101') {
				return;
			}
		}

		$CSaleBasket = new CSaleBasket;
		CCatalogProductProviderOtp::correctProductPrice($arFields, $arFields["PRODUCT_ID"]);
		$arFields["PRODUCT_PROVIDER_CLASS"]="CCatalogProductProviderOtp";
		$CSaleBasket->Update($ID, array("PRODUCT_PROVIDER_CLASS"=>"CCatalogProductProviderOtp", "PRICE"=>$arFields["PRICE"]));
	}

//$eventManager->addEventHandler("sale", "OnBeforeBasketAdd", "AddPresentToBasket");
//$eventManager->addEventHandler("sale", "OnBasketAdd", "AddPresentToBasket2");

	//CSaleBasket::Update(121, $arFields);

			//ExecuteModuleEventEx($arEvent, Array($ID, $arFields));


class CCatalogProductProviderOtp extends CCatalogProductProvider{
	static $changed = false;
	function getRadiatorCount() {
		static $cnt = null;

		if(!is_null($cnt)) return $cnt;

		$rsItems = CSaleBasket::GetList(
			array(
					"NAME" => "ASC",
					"ID" => "ASC"
				),
			array(
					"FUSER_ID" => CSaleBasket::GetBasketUserID(),
					"LID" => SITE_ID,
					"ORDER_ID" => "NULL"
				),
			false,
			false,
			array("ID", "CALLBACK_FUNC", "MODULE",
				  "PRODUCT_ID", "PRODUCT_PRICE_ID", "QUANTITY", "DELAY",
				  "CAN_BUY", "PRICE", "WEIGHT")
		);
		$cnt = 0;
		while($arItem = $rsItems->GetNext()) {
			//$arPrice = CPrice::GetByID($arItem["PRODUCT_PRICE_ID"]);
			$rs = CIBlockElement::GetByID($arItem["PRODUCT_ID"]);
			$ar = $rs->GetNext();

			$arTree = [];
			$rsTrees = CIBlockSection::GetNavChain($ar["IBLOCK_ID"], $ar["IBLOCK_SECTION_ID"]);
			while($arTree1 = $rsTrees->GetNext()) {
				$arTree[]=$arTree1;
			}
			$arTree = array_reverse($arTree);
			foreach($arTree as $p) {
				if(in_array($p["ID"], [1, 78, 142, 183, 214])) {
					$cnt += $arItem["QUANTITY"];
					break;
				}
			}
		}

		return $cnt;
	}
	function getBasketSumPrice() {
		static $sum = null;

		if(!is_null($sum)) return $sum;

		$rsItems = CSaleBasket::GetList(
			array(
					"NAME" => "ASC",
					"ID" => "ASC"
				),
			array(
					"FUSER_ID" => CSaleBasket::GetBasketUserID(),
					"LID" => SITE_ID,
					"ORDER_ID" => "NULL"
				),
			false,
			false,
			array("ID", "CALLBACK_FUNC", "MODULE",
				  "PRODUCT_ID", "PRODUCT_PRICE_ID", "QUANTITY", "DELAY",
				  "CAN_BUY", "PRICE", "WEIGHT")
		);
		$sum = 0;
		while($arItem = $rsItems->GetNext()) {
			$arPrice = CPrice::GetByID($arItem["PRODUCT_PRICE_ID"]);
			$sum += $arPrice["PRICE"]*$arItem["QUANTITY"];
		}

		return $sum;
	}

	function getDiscountList() {
		//rifar.cmoscow
		$arDiscount = array(
			//rifar base
			/*512=>array(
				15000=>3, 20000=>5, 25000=>7, 30000=>8, 40000=>10, 50000=>12
			),
			//rifar monolit
			518=>array(
				15000=>3, 20000=>5, 25000=>7, 30000=>8, 40000=>10, 50000=>12
			),
			//rifar base ventil
			542=>array(
				15000=>3, 20000=>5, 25000=>6, 30000=>7, 40000=>8, 50000=>10
			),
			//rifar monolit ventil
			535=>array(
				15000=>3, 20000=>5, 25000=>6, 30000=>7, 40000=>8, 50000=>9
			),
			//rifar alum
			522=>array(
				15000=>3, 20000=>5, 25000=>6, 30000=>7, 40000=>8, 50000=>9
			),
			//rifar alp
			513=>array(
				15000=>3, 20000=>4, 25000=>5, 30000=>6, 40000=>7, 50000=>8
			),
			//rifar supremo
			988=>array(
				15000=>1, 20000=>2, 25000=>3, 30000=>4, 40000=>5, 50000=>6
			),
			//rifar alp ventil
			993=>array(
				15000=>1, 20000=>2, 25000=>3, 30000=>4, 40000=>5, 50000=>6
			),
			//rifar alum
			1090=>array(
				15000=>1, 20000=>2, 25000=>3, 30000=>4, 40000=>5, 50000=>6
			),
			//������� ����� buggatti
			531=>array(
				15000=>10 //, 20000=>10, 25000=>10, 30000=>10, 40000=>10, 50000=>10
			),
			//������� ����� luxor
			560=>array(
				15000=>10 //, 20000=>10, 25000=>10, 30000=>10, 40000=>10, 50000=>10
			),*/
		);
		//for otopleni.store
		//CModule::IncludeModule("iblock");
		$rs = CIBlockSection::getList(array(), array("IBLOCK_ID"=>36, "!UF_BASKET_DISCOUNT"=>false), false, array("ID", "UF_BASKET_DISCOUNT"));
		while($ar = $rs->GetNext()) {
			//var_dump($ar);
			$arDiscount [$ar["ID"]]= array(
				1=>$ar["UF_BASKET_DISCOUNT"]
			);
		}
		return $arDiscount;
	}

	function correctProductPrice(&$arResult, $PID) {
		if(!$arResult["BASE_PRICE"]) return;

		if(SITE_ID=="s1") {
			$cnt = self::getRadiatorCount();
			//var_dump($cnt);
			if($cnt>=4) {
				$prc = 7;
				$arResult["DISCOUNT_PRICE_PERCENT"] = $prc;
				$arResult["DISCOUNT_PRICE"] = $arResult["BASE_PRICE"] * $prc / 100;
				$arResult["DISCOUNT_LIST"][] = array(
						'VALUE_TYPE'=> 'B',
						'VALUE'=>$arResult["DISCOUNT_PRICE"],
						'CURRENCY'=>$arResult["CURRENCY"]
					);
				$arResult["PRICE"] = $arResult["PRICE"] = $arResult["BASE_PRICE"] - $arResult["DISCOUNT_PRICE"];
			}
		} else if(SITE_ID=="s2") {

			$rs = CIBlockElement::GetByID($PID);
			$ob = $rs->GetNextElement();
			$pr = $ob->GetProperties([], ['CODE'=>['PRICE_HOL', 'PRICE_NIG']]);
			//var_dump($pr);
			if($arResult["BASE_PRICE"]==$pr["PRICE_NIG"]["VALUE"]||$arResult["BASE_PRICE"]==$pr["PRICE_HOL"]["VALUE"]) {
				return;
			}

			$arDiscount = self::getDiscountList();

			$arTree = array();
			$sumBasketPrice = CCatalogProductProviderOtp::getBasketSumPrice();
			//var_dump($sumBasketPrice);
			$rs = CIBlockElement::GetByID($PID);
			$ar = $rs->GetNext();
			$rsTrees = CIBlockSection::GetNavChain($ar["IBLOCK_ID"], $ar["IBLOCK_SECTION_ID"]);
			while($arTree1 = $rsTrees->GetNext()) {
				$arTree[]=$arTree1;
			}
			//var_dump($sumBasketPrice);
			$arTree = array_reverse($arTree);
			foreach($arTree as $p) {
				if($arDiscount[$p['ID']]) {
					$tmp = $arDiscount[$p['ID']];
					krsort($tmp);
					foreach($tmp as $min=>$prc) {
						if(($sumBasketPrice>=$min) && ($prc>0)) {
							//var_dump($p['ID'], $tmp, $sumBasketPrice, $prc);
							//var_dump($sumBasketPrice, $min, $prc, $tmp);die();
							//$arResult["DISCOUNT_NAME"] = "123";
							//if(!$arResult["BASE_PRICE"]) $arResult["BASE_PRICE"] = 9000;
							$arResult["DISCOUNT_PRICE_PERCENT"] = $prc;
							$arResult["DISCOUNT_PRICE"] = $arResult["BASE_PRICE"] * $prc / 100;
							$arResult["DISCOUNT_LIST"][] = array(
									'VALUE_TYPE'=> 'B',
									'VALUE'=>$arResult["DISCOUNT_PRICE"],
									'CURRENCY'=>$arResult["CURRENCY"]
								);
							$arResult["PRICE"] = $arResult["PRICE"] = $arResult["BASE_PRICE"] - $arResult["DISCOUNT_PRICE"];
							//if($_SERVER['REMOTE_ADDR']=='31.130.152.4') echo '<pre>';var_dump($arResult);echo '</pre>';
							//var_dump($arResult["BASE_PRICE"], $arResult["DISCOUNT_PRICE"], $prc);
							break 2;
						}
					}
					break;
				}
			}
		}
		//var_dump($arTree);
		//var_dump($arResult, $PID, CCatalogProductProviderOtp::getBasketSumPrice());



		//$arResult["PRICE"]=$arResult["BASE_PRICE"]-1;
		/*if (CSite::InGroup(array(6))||true) {
			$rs = CIBlockElement::GetByID($PID);
			$ob=$rs->GetNextElement();
			if($ob) {
				$pr=$ob->GetProperties();
				if($pr['PRICE_OPT']['VALUE']>0) {
					$arResult["BASE_PRICE"]=$arResult["PRICE"]=$pr['PRICE_OPT']['VALUE'];
				}
			}
		}*/
	}

	public static function GetProductData($arParams) {
		CCatalogProductProviderOtp::$changed = true;
		//if($_SERVER['REMOTE_ADDR']=='31.130.152.4') echo 1;
		$arResult = CCatalogProductProvider::GetProductData($arParams);
		CCatalogProductProviderOtp::correctProductPrice($arResult, $arParams["PRODUCT_ID"]);
		return $arResult;
	}
	public static function OrderProduct($arParams) {
		CCatalogProductProviderOtp::$changed = true;
		$arResult = CCatalogProductProvider::OrderProduct($arParams);
		CCatalogProductProviderOtp::correctProductPrice($arResult, $arParams["PRODUCT_ID"]);
		return $arResult;
	}
	public static function OnSaleOrderSaved($order) {
		\Bitrix\Sale\OrderDiscountManager::migrateOrderDiscounts($order->getFields());
	}
}

/*if($_SERVER['REMOTE_ADDR']=='31.130.152.4') {
	AddEventHandler("sale", "OnSaleOrderSaved", "saved", 10);
}
function saved($a,$b,$c) {

	echo '<pre>';var_dump($a->getFields());die();
}
//migrateOrderDiscounts

/*
//������ ������� ������ ������������ ����� CCatalogProductProviderOtp
\Bitrix\Main\EventManager::getInstance()->addEventHandler(
    'sale',
    'OnSaleBasketBeforeSaved',
    'myFunction'
);
//AddEventHandler("sale", "OnBasketAdd", "\AddPresentToBasket2", 10);

function myFunction($event) {
	$entity = $event->getParameter('ENTITY');
	$name = $event->getParameter('NAME');
	$values = $event->getParameter('VALUES');
	$old_value = $event->getParameter('OLD_VALUE');
	if($_SERVER['REMOTE_ADDR']=='31.130.152.4') {
		$basket = $entity->getBasketItems();
		//echo '<pre>';var_dump($basket[0]->getFields());echo '</pre>';
		//echo '<pre>';var_dump((array)$entity->getFields(), $name, $value, $old_value);echo '</pre>';
	}
	if($name&&false) {
		$event->addResult(
			new \Bitrix\Main\EventResult(
				\Bitrix\Main\EventResult::SUCCESS, array('VALUE' => $old_value)
			)
		);
	}
}*/
?>
