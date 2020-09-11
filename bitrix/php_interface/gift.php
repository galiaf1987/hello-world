<?php

CModule::IncludeModule('sale');

AddEventHandler("iblock", "OnAfterIBlockSectionUpdate", array("MyGift", "OnAfterIBlockSectionUpdateHandler"));

// Hint: Если удалить с дочерней директории подарки, то правило для данной директории
// также будет удалено. Соответственно если нужно подхватить для этой директории
// подарки с родительской директории, то нужно просто пересохранить родительскую
// директорию.

class MyGift {
  function OnAfterIBlockSectionUpdateHandler(&$arFields) {
    $iblock = CIBlock::GetByID($arFields['IBLOCK_ID'])->GetNext();
    $section = CIBlockSection::GetList(array(), array('IBLOCK_ID'=>$arFields['IBLOCK_ID'], 'ID'=>$arFields['ID']), false, array('ID', 'NAME', 'IBLOCK_SECTION_ID', 'LEFT_MARGIN', 'RIGHT_MARGIN', 'DEPTH_LEVEL', 'UF_GIFT'))->Fetch();
    $children = CIBlockSection::GetList(array('DEPTH_LEVEL'=>'ASC','SORT'=>'ASC'), array('IBLOCK_ID' => $arFields['IBLOCK_ID'], 'ACTIVE' => 'Y', 'GLOBAL_ACTIVE'=>'Y', 'LEFT_MARGIN' => $section['LEFT_MARGIN'], 'RIGHT_MARGIN' => $section['RIGHT_MARGIN']), false, array('ID', 'NAME', 'DEPTH_LEVEL', 'IBLOCK_SECTION_ID', 'UF_GIFT'));
    $dbElements = CIBlockElement::GetList(array(), array('SECTION_ID' => $arFields['ID'], 'INCLUDE_SUBSECTIONS' => "Y"), false, false, array('ID', 'NAME', 'IBLOCK_SECTION_ID'));
    $dbDiscount = Bitrix\Sale\Internals\DiscountTable::getList(array("filter" => array("=ACTIVE" => "Y")));

    $sections = array();
    $discounts = array();

    while($arSection = $children->GetNext()) {
      if (empty($arSection['UF_GIFT'])) {
        $arSection['UF_GIFT'] = self::getParentSectionGifts($arSection['IBLOCK_SECTION_ID'], $sections);
      }

      $sections[$arSection['ID']] = $arSection;
    }

    while($arDiscount = $dbDiscount->fetch()) {
      $discounts[] = $arDiscount;
    }

    while($arElement = $dbElements->GetNext()) {
      $section = $sections[$arElement['IBLOCK_SECTION_ID']];
      $discount = null;

      foreach($discounts as $value) {
        if (self::checkElementId(array($value['CONDITIONS_LIST']), $arElement['ID'])) {
          $discount = $value;
          break;
        }
      }

      $conditionsList = array(
        'CLASS_ID' => 'CondGroup',
        'DATA' => array(
          'All' => 'AND',
          'True' => 'True'
        ),
        'CHILDREN' => array(
          array(
            'CLASS_ID' => 'CondBsktProductGroup',
            'DATA' => array(
              'Found' => 'Found',
              'All' => 'AND'
            ),
            'CHILDREN' => array(
              array(
                'CLASS_ID' => 'CondIBElement',
                'DATA' => array(
                  'logic' => 'Equal',
                  'value' => $arElement['ID']
                )
              )
            )
          )
        )
      );

      $actionsList = array(
        'CLASS_ID' => 'CondGroup',
        'DATA' => array('All' => 'AND'),
        'CHILDREN' => array(
          array(
            'CLASS_ID' => 'GiftCondGroup',
            'DATA' => array('All' => 'AND'),
            'CHILDREN' => array(
              array(
                'CLASS_ID' => 'GifterCondIBElement',
                'DATA' => array(
                  'Type' => 'one',
                  'Value' => $section['UF_GIFT']
                )
              )
            )
          )
        ),
      );

      if ($discount && empty($section['UF_GIFT'])) {
        CSaleDiscount::Delete($discount['ID']);
      } elseif ($discount && !empty($section['UF_GIFT'])) {
        CSaleDiscount::Update($discount['ID'], array(
          'LAST_DISCOUNT' => "N",
          'ACTIONS' => $actionsList,
        ));
      } elseif (!$discount && !empty($section['UF_GIFT'])) {
        CSaleDiscount::Add(array(
          'LID' => $iblock['LID'],
          'NAME' => $arElement['NAME'] . ' (Подарки)',
          'ACTIVE' => "Y",
          'LAST_DISCOUNT' => "N",
          'CONDITIONS' => $conditionsList,
          'ACTIONS' => $actionsList,
          'USER_GROUPS' => array(2),
        ));
      }
    }
  }

  function getParentSectionGifts($id, $sections) {
    if (!array_key_exists($id, $sections)) {
      return null;
    }

    if (empty($sections[$id]['UF_GIFT'])) {
      return self::getParentSectionGifts($sections[$id][['IBLOCK_SECTION_ID']], $sections);
    }

    return $sections[$id]['UF_GIFT'];
  }

  function checkElementId($conditions, $elementId) {
    foreach($conditions as $condition) {
      if (array_key_exists('CHILDREN', $condition)) {
        return self::checkElementId($condition['CHILDREN'], $elementId);
      }

      if ($condition['CLASS_ID'] != 'CondIBElement') {
        continue;
      }

      if ($condition['DATA']['logic'] != 'Equal') {
        continue;
      }

      if ($condition['DATA']['value'] != $elementId) {
        continue;
      }

      return true;
    }

    return false;
  }
}
