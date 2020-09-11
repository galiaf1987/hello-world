<?php

class DxDeduplicator
{
	private static function InsertRecord($ar) {
		global $DB;
		$path_parts = pathinfo($ar['FILE_NAME']);
		$sqlQuery = sprintf('INSERT INTO b_dx_file_dedup VALUES (%d, \'%s\')', $ar['ID'], substr($ar['MD5'], 0, 3).'/'.$ar['MD5'].'.'.$path_parts['extension']);
		$DB->Query($sqlQuery);
	}
	
	
	private static function MakeLink($ar) {
		if(is_link($ar['F'])) {
			static::InsertRecord($ar);
		} else {
			$path_parts = pathinfo($ar['FILE_NAME']);
			$link = $_SERVER['DOCUMENT_ROOT'].'/upload/'.($symlink = 'duplicate.files/'.substr($ar['MD5'], 0, 3).'/'.$ar['MD5'].'.'.$path_parts['extension']);

			CheckDirPath($link);
			if(!file_exists($link)) {
				if(copy($ar['F'], $link)==false) {
					return;
				}
			}

			static::InsertRecord($ar);

			unlink($ar['F']);

			if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
				symlink($link, $ar['F']);
			} else {
				symlink('../../'.$symlink, $ar['F']);
			}
		}
	}
	public static function Deduplicate($print = false)
	{
		global $DB;
		$cnt = 0;

		$files = [];
		$rs = $DB->Query('SELECT DISTINCT f.*, d.ID AS DUP_ID FROM b_file f LEFT JOIN b_dx_file_dedup d ON f.ID=d.ID WHERE 1=1 ORDER BY f.FILE_SIZE DESC');
		while($ar = $rs->Fetch()) {
			if($prev && !$ar['DUP_ID'] && ($prev['FILE_SIZE'] == $ar['FILE_SIZE']) ) {
				if(!$files[$prev['ID']] && !$prev['DUP_ID']) {
					$files[$prev['ID']] = $prev;
				}
				$files[$ar['ID']] = $ar;
			}
			$prev = $ar;
		}
		
		foreach($files as $ar) {
			$ar['F'] = $_SERVER["DOCUMENT_ROOT"]."/upload/".$ar["SUBDIR"]."/".$ar["FILE_NAME"];
			if(!file_exists($ar['F'])) {
				continue;
			}
			$ar['MD5'] = md5(file_get_contents($ar['F']));

			$rs2 = $DB->Query(sprintf('SELECT * FROM b_file WHERE FILE_SIZE = %d', $ar['FILE_SIZE']));
			while($ar2 = $rs2->GetNext()) {
				$ar2['F'] = $_SERVER["DOCUMENT_ROOT"]."/upload/".$ar2["SUBDIR"]."/".$ar2["FILE_NAME"];
				if(!file_exists($ar2['F'])) {
					continue;
				}
				$ar2['MD5'] = md5(file_get_contents($ar2['F']));
				if($ar['MD5']==$ar2['MD5']) {
					static::MakeLink($ar);
					if($print) {
						var_dump($ar);
					}
					if(++$cnt>=500) break 2;
					break;
				}
			}
		}
		
		return 'DxDeduplicator::Deduplicate();';
	}
	
	public static function OnFileSaveHandler(&$arFile, $fileName, $module)
	{
	}
}