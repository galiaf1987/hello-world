<?php
AddEventHandler('main', 'OnEpilog', 'setPageToTitile');

function setPageToTitile() {
  if (isset($_GET['PAGEN_1']) && intval($_GET['PAGEN_1'])>0) {
     $title = $GLOBALS['APPLICATION']->GetTitle();
     $description = $GLOBALS['APPLICATION']->GetProperty('description');
     $GLOBALS['APPLICATION']->SetPageProperty('title', $title.' – страница '.intval($_GET['PAGEN_1']));
     $GLOBALS['APPLICATION']->SetPageProperty('description', $description.' Cтраница '.intval($_GET['PAGEN_1']).'.');
  }
}

?>
