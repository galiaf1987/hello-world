
; /* Start:"a:4:{s:4:"full";s:87:"/bitrix/templates/prostroy/components/bitrix/news.list/banners/script.js?15975745453244";s:6:"source";s:72:"/bitrix/templates/prostroy/components/bitrix/news.list/banners/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){
	if(parseInt(RSGOPRO_change_speed)<1)
		RSGOPRO_change_speed = 2000;
	if(parseInt(RSGOPRO_change_delay)<0)
		RSGOPRO_change_delay = 8000;
	
	if($('#jssor_slider1').find('.item').length>0)
	{
		var options = {
			$AutoPlay: 1,										//[Optional] Whether to auto play, to enable slideshow, this option must be set to true
			$DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
			$AutoPlayInterval: RSGOPRO_change_delay,			//[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing
			$SlideDuration: RSGOPRO_change_speed,               //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500

			$DirectionNavigatorOptions: {                       //[Optional] Options to specify and enable direction navigator or not
				$Class: $JssorDirectionNavigator$,              //[Requried] Class to create direction navigator instance
				$ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
				$AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
				$Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
			},
			
			$NavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
				$Class: $JssorNavigator$,                       //[Required] Class to create navigator instance
				$ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
				$Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
				$Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
				$SpacingX: 13,                                  //[Optional] Horizontal space between each item in pixel, default value is 0
				$SpacingY: 13,                                  //[Optional] Vertical space between each item in pixel, default value is 0
				$Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
			}
		};
		var jssor_slider1 = new $JssorSlider$("jssor_slider1", options);
		// responsive code begin
		function RSGOPRO_ScaleSlider() 
		{
			var parentWidth = $('#jssor_slider1').parent().width();
			if (parentWidth) {
				if( parentWidth<988 ) {
					jssor_slider1.$SetScaleWidth(parentWidth);
				} else {
					jssor_slider1.$SetScaleWidth(990);
				}
			} else {
				window.setTimeout(RSGOPRO_ScaleSlider, 30);
			}
		}
		RSGOPRO_ScaleSlider();
		$(window).bind('resize', RSGOPRO_ScaleSlider);
		// responsive code end
	}
	
	// play video
	$('.aroundjssorslider1').find('video').each(function(){
		if( $(this).attr('autoplay')=='autoplay' ) {
			$(this).get(0).play();
		}
	});
	
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:95:"/bitrix/templates/prostroy/components/bitrix/catalog.section.list/main/script.js?15975745431257";s:6:"source";s:80:"/bitrix/templates/prostroy/components/bitrix/catalog.section.list/main/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function RSGOPRO_SetHeight()
{
	setTimeout(function(){
		// reset
		$('.mainsections').find('li.section').css('minHeight',0);
		// in line
		var position = $('.mainsections').find('li.section:first').offset().top;
		var last_index = 0;
		var max_height = 0;
		$('.mainsections').find('li.section').each(function(i){
			if( $(this).offset().top!=position )
			{
				if(last_index>0)
				{
					$('.mainsections').find('li.section:lt('+(i)+'):gt('+last_index+')').css('minHeight',max_height);
				} else {
					$('.mainsections').find('li.section:lt('+(i)+')').css('minHeight',max_height);
				}
				last_index = (i-1);
				position = $(this).offset().top;
				max_height = $(this).outerHeight(true)+2;
			} else {
				if( $(this).outerHeight(true)>max_height )
					max_height = $(this).outerHeight(true)+2;
			}
		});
		if(last_index>0)
			$('.mainsections').find('li.section:gt('+last_index+')').css('minHeight',max_height);
		else
			$('.mainsections').find('li.section').css('minHeight',max_height);
	},100);
}

$(document).ready(function(){
	RSGOPRO_SetHeight();
	$(window).bind('resize', RSGOPRO_SetHeight);
	
	$(window).load(function(){
		RSGOPRO_SetHeight();
		
		setTimeout(function(){ // fix for slow shit
			RSGOPRO_SetHeight();
		},50);
	});
});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:91:"/bitrix/templates/prostroy/components/redsign/catalog.sorter/gopro/script.js?15975745412815";s:6:"source";s:76:"/bitrix/templates/prostroy/components/redsign/catalog.sorter/gopro/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function RSGoProSorterGo(ajaxpagesid,$obj,url,isBigdata) {
	if($obj) {
		var catalog_selector = '#'+ajaxpagesid;
		RSGoPro_Area2Darken($(catalog_selector),'animashka');
		$obj.parent().find('a').removeClass('selected');
		$obj.addClass('selected');
		var val = $obj.html();
		if( $obj.parents('.dropdown').find('.select').length>0 ) {
			$obj.parents('.dropdown').find('.select').html(val);
		}
		if(isBigdata!='Y' && url && url!='') {
			$.getJSON(url, {}, function(json){
				RSGoPro_PutJSon( json,false,ajaxpagesid );
				setTimeout(function(){
					RSGoPro_ScrollInit('.prices_jscrollpane');
					RSGoPro_TIMER();
					RSGoPro_SetSet();
				},75); // for slow shit
			}).fail(function(json){
				console.warn( 'sorter - change template -> error responsed' );
			}).always(function(){
				RSGoPro_Area2Darken($(catalog_selector),'animashka');
			});
		}
	}
}

$(document).ready(function(){
	
	// ajax sorter -> change (click link)
	$(document).on('click','.catalogsorter .template a, .catalogsorter .output .cool .dropdownin a, .catalogsorter .sort .cool .dropdownin a',function(){
		var $link = $(this);
		if( $link.parents('.catalogsorter').length>0 ) {
			var ajaxpagesid = $link.parents('.catalogsorter').data('ajaxpagesid');
			if( ajaxpagesid && ajaxpagesid!='' ) {
				if( $link.parents('.js-bigdata').length>0 ) { // big data
					console.log( 'sorter - bigdata' );
					RSGoProSorterGo(ajaxpagesid,$link,'','Y');
					var $jsBigdata = $link.parents('.js-bigdata');
					BX.ajax({
						url: $jsBigdata.data('url'),
						method: 'POST',
						data: {'parameters':$jsBigdata.data('parameters'), 'template':$jsBigdata.data('template'), 'rcm':'yes', 'view':$link.data('fvalue')},
						dataType: 'html',
						processData: false,
						start: true,
						onsuccess: function (html) {
							var ob = BX.processHTML(html);
							// inject
							BX($jsBigdata.data('injectId')).innerHTML = ob.HTML;
							BX.ajax.processScripts(ob.SCRIPT);
							RSGoPro_ScrollInit('.prices_jscrollpane');
							RSGoPro_Area2Darken($('#'+ajaxpagesid),'animashka');
							RSGoPro_TIMER();
							RSGoPro_SetSet();
						}
					});

				} else { // normal components
					var url = $link.attr('href') + '&AJAX_CALL=Y&sorterchange='+ajaxpagesid;
					RSGoProSorterGo(ajaxpagesid,$link,url,'N');
					if( $link.parents('.dropdown').length>0 ) {
						$link.parents('.dropdown').removeClass('hover');
					}
				}
			}
		}
		return false;
	});
	
	$(document).on('mouseenter','.catalogsorter .dropdown',function(){
		$(this).addClass('hover');
		return false;
	}).on('mouseleave','.catalogsorter .dropdown',function(){
		$(this).removeClass('hover');
		return false;
	}).on('click','.catalogsorter .dropdown',function(){
		$(this).toggleClass('hover');
		return false;
	});
	
	$('.mix .catalogsorter').addClass('used');
	
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:91:"/bitrix/templates/prostroy/components/bitrix/catalog.section/gopro/script.js?15975745461105";s:6:"source";s:76:"/bitrix/templates/prostroy/components/bitrix/catalog.section/gopro/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var RSGoPro_Hider_called = false;

function RSGoPro_DetectTable() {
	$('.artables').each(function(i){
		var $artables = $(this);
		if($artables.outerWidth(true)<$artables.find('.products').outerWidth(true) && !$artables.hasClass('adap'))
		{
			$artables.addClass('adap');
		}
	});
}

// hide filter and sorter when goods is empty
function RSGoPro_Hider() {
	RSGoPro_Hider_called = true;
	$('.sidebar, .mix, .navi, .catalogsorter').hide();
	$('.catalog .prods').css('marginLeft','0px');
}

$(document).ready(function(){
	
	// fix tables if stupid styles didnt work
	RSGoPro_DetectTable();
	$(window).resize(function(){
		RSGoPro_DetectTable();
	});
	
	if( $('.prices_jscrollpane').length>0 ) {
		RSGoPro_ScrollInit('.prices_jscrollpane');
		$(window).resize(function(){
			RSGoPro_ScrollReinit('.prices_jscrollpane');
		});
	}
	
	$(document).on('mouseenter','.showcase .js-element',function(){
		$(this).addClass('hover');
		return false;
	}).on('mouseleave','.showcase .js-element',function(){
		$(this).removeClass('hover');
		return false;
	});
	
	if(RSGoPro_Hider_called) {
		RSGoPro_Hider();
	}
	
});
/* End */
;; /* /bitrix/templates/prostroy/components/bitrix/news.list/banners/script.js?15975745453244*/
; /* /bitrix/templates/prostroy/components/bitrix/catalog.section.list/main/script.js?15975745431257*/
; /* /bitrix/templates/prostroy/components/redsign/catalog.sorter/gopro/script.js?15975745412815*/
; /* /bitrix/templates/prostroy/components/bitrix/catalog.section/gopro/script.js?15975745461105*/
