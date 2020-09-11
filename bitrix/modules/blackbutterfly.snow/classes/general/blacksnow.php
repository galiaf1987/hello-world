<?
if (!class_exists("BLACKSnow"))
{
	class BLACKSnow
	{
		function INITSNOW()	{
			$type = COption::GetOptionString("blackbutterfly.snow", "SNOWSTYLE");
			$speed = COption::GetOptionString("blackbutterfly.snow", "SNOWSPEED");
			$jquery = COption::GetOptionString("blackbutterfly.snow", "JQUERY");
			$girlyandaact = COption::GetOptionString("blackbutterfly.snow", "BBSNOW_GIRLYANDA_ACT");
			$scrinact = COption::GetOptionString("blackbutterfly.snow", "BBSNOW_SCREENSERVER_ACT");
			$typemass = array(1,2,3);
			global $USER;
			global $APPLICATION;
					CUtil::InitJSCore(Array("jquery"));
					if ( $girlyandaact == 'Y' ) {
						if ( !$USER->IsAdmin()) {
							$APPLICATION->AddHeadString("
								<script>
									$(document).ready(function() {
										$('body').append('<div style=\"background: url(/bitrix/js/snow/css/GirlyndaMod.gif) repeat-x scroll 100% 50%; height: 40px; width: 100%; position: absolute; top: 0px; left: 0px; -moz-background-clip: -moz-initial; -moz-background-origin: -moz-initial; -moz-background-inline-policy: -moz-initial;\"></div>');
									});	
								</script>									
							", true);			
						}
					}
					if ( $scrinact == 'Y' ) {
						if ( !$USER->IsAdmin()) {
							$APPLICATION->SetAdditionalCSS('/bitrix/js/snow/css/mysnow.css');
							$APPLICATION->AddHeadString("<script type='text/javascript' src='/bitrix/js/snow/js/rainsnownew.js' ></script>");
							$APPLICATION->AddHeadString("<script type='text/javascript'>var aaSnowConfig = {snowflakes: '500'};</script>");
						}
					}
				if ( in_array($type,$typemass) and !$USER->IsAdmin()) {
					$APPLICATION->SetAdditionalCSS('/bitrix/js/snow/css/mysnow.css');
					$APPLICATION->AddHeadString("<script type='text/javascript' src='/bitrix/js/snow/js/rainsnow.js' ></script>");
					if ( $type == 1 ) {
						$APPLICATION->AddHeadString("
								<script>
									jQuery(document).ready(function($) {
										$('body').RainSnow({
											effect_name: 'snow',
											drop_appear_speed: 100,
											drop_falling_speed: ".$speed.",
											wind_direction: 3,
											drop_rotate_angle : '-10deg',
											drop_count_width_height:[[2,2], [3,3], [4,4], [5,5], [6,6]],
											drop_left_to_right : false
										});
										
									});	
								</script>									
						", true);
					} elseif ( $type == 2 ) {
						$APPLICATION->AddHeadString("
								<script>
								jQuery(document).ready(function($) {
									$('body').RainSnow({
										effect_name: 'snow',
										drop_appear_speed: 100,
										drop_falling_speed: ".$speed.",
										wind_direction: 3,
										drop_rotate_angle : '-10deg',
										drop_count_width_height:[[2,2], [3,3], [4,4], [5,5], [6,6]],
										drop_left_to_right : true
									});
								});
								</script>									
						", true);
					}
					if ( $type == 3 ) {
						$APPLICATION->AddHeadString("
							<script>
							jQuery(document).ready(function($) {
								$('body').RainSnow({
									effect_name: 'snow',
									drop_appear_speed: 200,
									drop_falling_speed: ".$speed.",
									wind_direction: 3,
									drop_rotate_angle : '-10deg',
									drop_count_width_height:[[22,22], [14,16], [18,20]],
									drop_left_to_right : false
								});
							});
							</script>									
						", true);
					}
				  }
				}
		}
	}
?>