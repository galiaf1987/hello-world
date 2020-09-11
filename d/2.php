<?require_once($_SERVER['DOCUMENT_ROOT'] . "/bitrix/modules/main/include/prolog_before.php");

Cmodule::IncludeModule('sale');
CModule::IncludeModule('catalog');
CModule::IncludeModule('iblock');

require 'PHPExcel.php';


$objPHPExcel = PHPExcel_IOFactory::load(dirname(__FILE__)."/tpl.xls");

function copyRowFull(&$ws_from, &$ws_to, $row_from, $row_to) {
  $ws_to->getRowDimension($row_to)->setRowHeight($ws_from->getRowDimension($row_from)->getRowHeight());
  $lastColumn = $ws_from->getHighestColumn();
  ++$lastColumn;
  for ($c = 'A'; $c != $lastColumn; ++$c) {
    $cell_from = $ws_from->getCell($c.$row_from);
    $cell_to = $ws_to->getCell($c.$row_to);
    $cell_to->setXfIndex($cell_from->getXfIndex()); // black magic here
    $cell_to->setValue($cell_from->getValue());
  }
}


$rs = CIBlockElement::GetList(array(), array("IBLOCK_ID"=>36, "ACTIVE"=>"Y", "GLOBAL_ACTIVE"=>"Y"), false, false, array("NAME", "DETAIL_PAGE_URL", "IBLOCK_SECTION_ID", "PROPERTY_CML2_ARTICLE", "CATALOG_PRICE_1"));

$cnt = 0;
$rsOrder = CSaleOrder::GetList(array("ID"=>"DESC"), $arFilter);
$baseRow = 2;
while($ar = $re->GetNext()) {
	var_dump($ar);
	break;
	//$sheet->setCellValue('A'.$row, $ar['ID']);
	$firstRow = $baseRow + $cnt;
}