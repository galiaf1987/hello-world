<?if(!check_bitrix_sessid()) return;?>
<?
global $errors;
$module_id = 'vampirus.yandex';

if($errors!==false):
	for($i=0; $i<count($errors); $i++)
		$alErrors .= $errors[$i]."<br>";
	echo CAdminMessage::ShowMessage(Array("TYPE"=>"ERROR", "MESSAGE" =>GetMessage("MOD_INST_ERR"), "DETAILS"=>$alErrors, "HTML"=>true));
endif;
$arAllOptions = Array(
	Array("app_id", GetMessage("VAMPIRUS.YANDEX_OPTIONS_APP_ID")." ", Array("text", ""), GetMessage("VAMPIRUS.YANDEX_OPTIONS_APP_ID_DESC")),
	Array("client_secret", GetMessage("VAMPIRUS.YANDEX_OPTIONS_CLIENT_SECRET")." ", Array("text", ""), GetMessage("VAMPIRUS.YANDEX_OPTIONS_CLIENT_SECRET_DESC")),
	Array("password", GetMessage("VAMPIRUS.YANDEX_OPTIONS_PASSWORD")." ", Array("text", ""), GetMessage("VAMPIRUS.YANDEX_OPTIONS_PASSWORD_DESC")),
	Array("wallet", GetMessage("VAMPIRUS.YANDEX_OPTIONS_WALLET")." ", Array("text", ""), GetMessage("VAMPIRUS.YANDEX_OPTIONS_WALLET_DESC")),
);
?>
<form action="<?echo $APPLICATION->GetCurPage()?>" name="form1">
<?=bitrix_sessid_post()?>
<input type="hidden" name="lang" value="<?=LANG?>">
<input type="hidden" name="id" value="<?=$module_id?>">
<input type="hidden" name="install" value="Y">
<input type="hidden" name="step" value="2">
<table cellpadding="3" cellspacing="0" border="0" width="0%">
<?	foreach($arAllOptions as $arOption):
		$val = COption::GetOptionString($module_id, $arOption[0]);
		$type = $arOption[2];
	?>
		<tr>
			<td valign="top" width="50%"><?
							echo "<p><label for=\"id_install_public\">", $arOption[1], ":\n<br /><small>", $arOption[3], "</small></label></p>";?></td>
			<td valign="top" width="50%">
					<?if($type[0]=="text"):?>
						<input type="text" size="<?echo $type[1]?>" maxlength="255" value="<?echo htmlspecialchars($val)?>" name="<?echo htmlspecialchars($arOption[0])?>">
					<?elseif($type[0]=="textarea"):?>
						<textarea rows="<?echo $type[1]?>" cols="<?echo $type[2]?>" name="<?echo htmlspecialchars($arOption[0])?>"><?echo htmlspecialchars($val)?></textarea>
					<?endif?>
			</td>
		</tr>
	<?endforeach?></table>
<p>
	<input type="hidden" name="lang" value="<?echo LANG?>">
	<input type="submit" name="" value="<?echo GetMessage("MOD_INSTALL")?>">
</p>
<form>