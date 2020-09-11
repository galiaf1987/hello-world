<?
class CRifarProduct
{
    // создаем обработчик события "OnAfterIBlockElementAdd"
    function OnAfterIBlockElementAddHandler(&$arFields)
    {
		if($arFields["IBLOCK_ID"]==1) {
			$rs = CIBlockElement::GetByID($arFields["ID"]);
			if($ob = $rs->GetNextElement()) {
				$pr = $ob->GetProperties();
				if($pr["CODE"]["VALUE"]=="") {
					CIBlockElement::SetPropertyValues($arFields["ID"], $arFields["IBLOCK_ID"], $arFields["ID"], "CODE");
				}
			}
		}
	}
}