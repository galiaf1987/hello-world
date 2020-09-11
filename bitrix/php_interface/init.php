<?
/*
You can place here your functions and event handlers

AddEventHandler("module", "EventName", "FunctionName");
function FunctionName(params)
{
	//code
}
*/

use Bitrix\Sale\DiscountCouponsManager;

CModule::AddAutoloadClasses(
	"main",
	array(
		"CUserTypeHTML" => "../../php_interface/usertypehtml.php",
		"CSaleHandlers" => "../../php_interface/csalehandlers.php",
		"CUserTypeIBlockElement" => "../../php_interface/include/uf_iblock_element.php",
		"CUserTypeIBlockElementList" => "../../php_interface/include/uf_iblock_element_list.php",
		"CRifarProduct" => "../../php_interface/CRifarProduct.php",
	)
);

AddEventHandler('main', 'OnUserTypeBuildList', array('CUserTypeHTML', 'GetUserTypeDescription'), 5000);
AddEventHandler('main', 'OnUserTypeBuildList', array('CUserTypeIBlockElement', 'GetUserTypeDescription'), 5000);
AddEventHandler('main', 'OnUserTypeBuildList', array('CUserTypeIBlockElementList', 'GetUserTypeDescription'), 5000);

AddEventHandler("iblock", "OnAfterIBlockElementAdd", Array("CRifarProduct", "OnAfterIBlockElementAddHandler"));


function UpdateSiteMap() {
	require_once 'dxsitemap.php';
	$t=new DXSitemap;
	$t->StartGenerate();
	$t->GenerateFromMenu();
	$t->GenerateElementIB(4);
	$t->GenerateElementIB(5);
	$t->GenerateSectionIB(1);
	$t->GenerateElementIB(1);
	$t->FinishGenerate();
	return "UpdateSiteMap();";
}

//process custom action

AddEventHandler("main", "OnAdminListDisplay", "MyOnAdminListDisplay");
function MyOnAdminListDisplay(&$list)
{
	/*if($_SERVER["REMOTE_ADDR"]=="77.50.136.87") {
		echo '<pre>';var_dump($list->table_id);echo '</pre>';
	}*/
    //add custom group action
    if($list->table_id == "tbl_iblock_list_fa0182a24ec364ecbc2baa45643affd6") {
        $list->arActions["qty_on"] = "Наличие: Есть";
		$list->arActions["qty_off"] = "Наличие: Убрать";
	}
}

AddEventHandler("main", "OnBeforeProlog", "MyOnBeforeProlog");
function MyOnBeforeProlog()
{
    if($_SERVER["REQUEST_METHOD"] == "POST" && ($_POST["action"] == "qty_on" || $_POST["action"] == "qty_off") && ($_POST['action_target'] || is_array($_POST["ID"])) && $GLOBALS["APPLICATION"]->GetCurPage() == "/bitrix/admin/iblock_list_admin.php")
    {
		if($_POST['action_target']) {
			$_POST['ID'] = array('S'.$_REQUEST['find_section_section']);
		}
		CModule::IncludeModule('iblock');
		$newQty = ($_POST["action"] == "qty_on") ? 999 : 0;
		$CIBlockElement = new CIBlockElement;
		foreach($_POST['ID'] as $tid) {
			if($tid[0]=='E') {
				$eid = preg_replace('@^E@', '', $tid);
				//CIBlockElement::SetPropertyValues($eid, 5, $newDiscount, 'DISCOUNT');
				CCatalogProduct::Update($eid, array('QUANTITY'=>$newQty));
				$CIBlockElement->Update($eid, array());
			}
			if($tid[0]=='S') {
				$sid = preg_replace('@^S@', '', $tid);
				$rs = CIBlockElement::GetList(array(), array("IBLOCK_ID"=>36, "SECTION_ID"=>$sid, "INCLUDE_SUBSECTIONS"=>"Y"), false, false, array("ID", "NAME"));
				while($ar = $rs->GetNext()) {
					//CIBlockElement::SetPropertyValues($eid, 5, $newDiscount, 'DISCOUNT');
					CCatalogProduct::Update($ar['ID'], array('QUANTITY'=>$newQty));
					$CIBlockElement->Update($ar['ID'], array());
				}
			}
		}
		CIBlock::clearIblockTagCache( 36 );
		BXClearCache(true, "/iblock/");
    }
}


AddEventHandler("sale", "OnOrderNewSendEmail", Array("DXMailOrder", "OnOrderNewSendEmail_mail"));

class DXMailOrder {
	function OnOrderNewSendEmail_mail($ID, $tpl, &$vars) {
		$arOrder = CSaleOrder::GetByID($ID);
		$rs = CSaleOrderPropsValue::GetOrderProps($ID);//GetList(array(), array("ORDER_ID"=>$ID));
		while($ar = $rs->GetNext()) {
			if($ar["CODE"]=="LOCATION") {
				$ar2=CSaleLocation::GetByID($ar["VALUE"]);
				$ar["VALUE"] = $ar2["COUNTRY_NAME_LANG"]." - ".$ar2["CITY_NAME_LANG"];
			}
			if(($ar["VALUE"]!="")) $orderdop .= $ar["NAME"].': '.$ar["VALUE"]."<br/>\n";
		}

		if($arOrder["USER_DESCRIPTION"]) $orderdop .= "Коментарий пользователя: ".$arOrder["USER_DESCRIPTION"]."<br/>\n";

		if($arOrder["PAY_SYSTEM_ID"]) {
			$arPaySystem = CSalePaySystem::GetByID($arOrder["PAY_SYSTEM_ID"]);
			$orderdop .= 'Способ оплаты: '.$arPaySystem['NAME']."<br />\n";
		}

		$arCoupons = DiscountCouponsManager::get(true, array(), true, true);

		if($arCoupons) {
			foreach($arCoupons as $oneCoupon) {
				$orderdop .= 'Предыдущий заказ: '.$oneCoupon['COUPON']."<br />\n";
				unset($_SESSION["coupon"]);
			}
		}

		if($arOrder["DELIVERY_ID"]) {
			$arDelivery = CSaleDelivery::GetByID($arOrder["DELIVERY_ID"]);
			$orderdop .= 'Способ доставки: '.$arDelivery["NAME"].' ('.CurrencyFormat($arOrder["PRICE_DELIVERY"],"RUB")." р.)<br />\n";
		}

		$l = "http://".$_SERVER["SERVER_NAME"]."/bitrix/admin/sale_order_detail.php?ID=".$ID;
		$zak2 = "\nПодробная информация:<br />\n".$orderdop."<br/>\n".'<a href="'.$l.'">'.$l.'</a><Br />';
		$arEventFields = $vars;
		$arEventFields["ORDER_USER"] = "Администратор";
		if(SITE_ID=="s1") {
			$arEventFields["EMAIL"] = 'rifar.moscow@yandex.ru';
		} else if(SITE_ID=="s2") {
			$arEventFields["EMAIL"] = 'info@otoplenie.store';
		} else {
			$arEventFields["EMAIL"] = 'rifar.moscow@yandex.ru, info@otoplenie.store, gdimon@inbox.ru';//COption::GetOptionString("sale", "order_email", "", SITE_ID);
		}
		$arEventFields["ORDER_LIST"] .= $zak2;
		CEvent::Send("SALE_NEW_ORDER", SITE_ID, $arEventFields);
	}
}


require_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/iblock/lib/template/functions/fabric.php');

use Bitrix\Main;

$eventManager = Main\EventManager::getInstance();
$eventManager->addEventHandler("iblock", "OnTemplateGetFunctionClass", "myOnTemplateGetFunctionClass");

function myOnTemplateGetFunctionClass(Bitrix\Main\Event $event) {
   $arParam = $event->getParameters();
   $functionClass = $arParam[0];
   if (is_string($functionClass) && class_exists($functionClass) && ($functionClass=='torub'||$functionClass=='firstlower'||$functionClass=='iffilled'||$functionClass=='numending'||$functionClass=='customsectiontitle'||$functionClass=='customsectiondesc')){
      $result = new Bitrix\Main\EventResult(1,$functionClass);
      return $result;
   }
}

class customsectiontitle extends Bitrix\Iblock\Template\Functions\FunctionBase
{
	var $id = 0;
   public function onPrepareParameters(\Bitrix\Iblock\Template\Entity\Base $entity, $parameters)
   {
	  $this->id = $entity->getField("ID");
      $arguments = array();
      foreach ($parameters as $parameter)
      {
         $arguments[] = $parameter->process($entity);
      }
      return $arguments;
   }

   public function calculate(array $parameters)
   {
		$rs = CIblockSection::GetByID($this->id);
		if($ar = $rs->GetNext()) {
			if(($ar['DEPTH_LEVEL']>=2) && (($ar['RIGHT_MARGIN']-$ar['LEFT_MARGIN'])==1)) {
				$arChains = array();
				$rsChain = CIBlockSection::GetNavChain($ar['IBLOCK_ID'],$ar['ID']);
				while($arChain = $rsChain->GetNext()) {
					$arChains[]=$arChain;
				}
				$rsMinPrice = CIBlockElement::GetList(array("CATALOG_PRICE_1"=>"ASC"), array("IBLOCK_ID"=>$ar['IBLOCK_ID'], "SECTION_ID"=>$ar['ID'], "INCLUDE_SUBSECTIONS"=>"Y"), false, array("nTopCount"=>1), array("CATALOG_PRICE_1"));
				$arMinPrice = $rsMinPrice->GetNext();
				if($arMinPrice) {
					$minPrice = CCurrencyRates::ConvertCurrency($arMinPrice['CATALOG_PRICE_1'], $arMinPrice['CATALOG_CURRENCY_1'], 'RUB');
					return $arChains[0]['NAME'].' '.$ar['NAME'].' от '.$minPrice.' руб. Купить '.$ar['NAME'].' в Москве, Екатеринбурге. Интернет-магазин Rifar Москва';
				}
			}

		}
		return '';
   }
}

class customsectiondesc extends Bitrix\Iblock\Template\Functions\FunctionBase
{
	var $id = 0;
   public function onPrepareParameters(\Bitrix\Iblock\Template\Entity\Base $entity, $parameters)
   {
	  $this->id = $entity->getField("ID");
      $arguments = array();
      foreach ($parameters as $parameter)
      {
         $arguments[] = $parameter->process($entity);
      }
      return $arguments;
   }

   public function calculate(array $parameters)
   {
		$rs = CIblockSection::GetByID($this->id);
		if($ar = $rs->GetNext()) {
			if(($ar['DEPTH_LEVEL']>=2) && (($ar['RIGHT_MARGIN']-$ar['LEFT_MARGIN'])==1)) {
				$arChains = array();
				$rsChain = CIBlockSection::GetNavChain($ar['IBLOCK_ID'],$ar['ID']);
				while($arChain = $rsChain->GetNext()) {
					$arChains[]=$arChain;
				}
				$rsMinPrice = CIBlockElement::GetList(array("CATALOG_PRICE_1"=>"ASC"), array("IBLOCK_ID"=>$ar['IBLOCK_ID'], "SECTION_ID"=>$ar['ID'], "INCLUDE_SUBSECTIONS"=>"Y"), false, array("nTopCount"=>1), array("CATALOG_PRICE_1"));
				$arMinPrice = $rsMinPrice->GetNext();
				if($arMinPrice) {
					$minPrice = CCurrencyRates::ConvertCurrency($arMinPrice['CATALOG_PRICE_1'], $arMinPrice['CATALOG_CURRENCY_1'], 'RUB');
					return 'Купить '.mb_strtolower($arChains[0]['NAME']).' '.$ar['NAME'].' в Москве, Екатеринбурге. Цена от '.$minPrice.' руб. Заказывайте в интернет-магазине Rifar Москва. +7 (495) 231-89-00';
				}
			}

		}
		return '';
   }
}

class torub extends Bitrix\Iblock\Template\Functions\FunctionBase
{
	var $id = 0;
   public function onPrepareParameters(\Bitrix\Iblock\Template\Entity\Base $entity, $parameters)
   {
	  $this->id = $entity->getField("ID");
      $arguments = array();
      /** @var \Bitrix\Iblock\Template\NodeBase $parameter */
      foreach ($parameters as $parameter)
      {
         $arguments[] = $parameter->process($entity);
      }
      return $arguments;
   }

   public function calculate(array $parameters)
   {
			$pricesList =\CPrice::getListEx(array(), array(
				"=PRODUCT_ID" => $this->id,
				"CATALOG_GROUP_ID"=> $parameters[0],
				"+<=QUANTITY_FROM" => 1,
				"+>=QUANTITY_TO" => 1,
			), false, false, array("PRICE", "CURRENCY", "CATALOG_GROUP_ID", "CATALOG_GROUP_CODE"));
			$this->fields = array();
			while ($priceInfo = $pricesList->fetch()) {
				$kurs = CCurrencyRates::GetConvertFactor($priceInfo["CURRENCY"], "RUB");
				return \CCurrencyLang::currencyFormat($priceInfo["PRICE"]*$kurs, "RUB", false);
				//return CCurrencyRates::ConvertCurrency($priceInfo["PRICE"], $priceInfo["CURRENCY"], false);
			}
      return "";
   }
}

class firstlower extends Bitrix\Iblock\Template\Functions\FunctionBase
{
	var $id = 0;
   public function onPrepareParameters(\Bitrix\Iblock\Template\Entity\Base $entity, $parameters)
   {
	  $this->id = $entity->getField("ID");
      $arguments = array();
      /** @var \Bitrix\Iblock\Template\NodeBase $parameter */
      foreach ($parameters as $parameter)
      {
         $arguments[] = $parameter->process($entity);
      }
      return $arguments;
   }

   public function calculate(array $parameters)
   {
		return mb_strtolower(substr($parameters[0],0,1)).substr($parameters[0],1);
   }
}

class iffilled extends Bitrix\Iblock\Template\Functions\FunctionBase
{
   public function onPrepareParameters(\Bitrix\Iblock\Template\Entity\Base $entity, $parameters)
   {
      $arguments = array();
      /** @var \Bitrix\Iblock\Template\NodeBase $parameter */
      foreach ($parameters as $parameter)
      {
         $arguments[] = $parameter->process($entity);
      }
      return $arguments;
   }

   public function calculate(array $parameters)
   {
      if(isset($parameters[0]) && $parameters[0] && isset($parameters[1])) {
         return sprintf($parameters[1],$parameters[0]);
      }
      return "";
   }
}

function getNumEnding($number, $endingArray)
{
    $number = $number % 100;
    if ($number>=11 && $number<=19) {
        $ending=$endingArray[2];
    }
    else {
        $i = $number % 10;
        switch ($i)
        {
            case (1): $ending = $endingArray[0]; break;
            case (2):
            case (3):
            case (4): $ending = $endingArray[1]; break;
            default: $ending=$endingArray[2];
        }
    }
    return $ending;
}

class numending extends Bitrix\Iblock\Template\Functions\FunctionBase
{
   public function onPrepareParameters(\Bitrix\Iblock\Template\Entity\Base $entity, $parameters)
   {
      $arguments = array();
      /** @var \Bitrix\Iblock\Template\NodeBase $parameter */
      foreach ($parameters as $parameter)
      {
         $arguments[] = $parameter->process($entity);
      }
      return $arguments;
   }

   public function calculate(array $parameters)
   {
	$str = getNumEnding($parameters[0], array($parameters[1], $parameters[2], $parameters[3]));
	return sprintf($str, $parameters[0]);
   }
}

//if($_SERVER["REMOTE_ADDR"] == "31.130.159.172") {
	require 'skidka.php';
//}

require 'opt.php';
require 'gift.php';

include(__DIR__.'/delivery_simple.php');

?>
