var kvn_show, kvn_hide;
jQuery(document).ready(function($){
	$(".next, .prev").not(".submit-size").not(".submit-form").click(function(){
		$($(this).data("prev")).hide();
		$($(this).data("next")).fadeIn("fast");
		return false;
	});
	kvn_show = function(cl){
		if(!$("."+cl).is(":visible")) {
			$(".map_container3 > div").hide();
			$("."+cl).fadeIn(400);
		}
	}
	kvn_hide = function(cl){
		$("."+cl).fadeOut(100);
	}

	$(".types a").click(function() {
		var $this = $(this),
			data_id = $this.attr('data-id');
		$(".types li").removeClass("active");
		$(this).closest("li").addClass("active");
		$("#type option").prop('selected', false).each(function(){
			if(data_id == $(this).attr('data-id')){
				$(this).prop('selected', true);
			}
		});
		return false;
	});
	
	$(".types a[data-id="+$("#type option:selected").data("id")+"]").click();
	
	$("#list_city_step_one").change(function() {
		var data=$(this).find('option:selected').data();
		$("#temperature").html(data.temperature);
		$("#date").html(data.date);
	});
	
	$('.popup .popup-center a').click(function(){
		var $this = $(this),
			data_id = $this.attr('data-id');
		$('.climatic-data option').prop('selected', false).each(function(){
			if(data_id == $(this).attr('data-id')){
				$(this).prop('selected', true);
				$(this).change();
			}
		});
		return false;
	});

	
	
	
	
	$(".next.submit-form").click(function(){
		var form = $('form[name=SELECTION]'), 
		    contaner = $(".contaner-filter-selection");
		
		$(".next.submit-res").hide();
		contaner.html("<h3>Идет передача данных... Ждите.</h3>");
		
		$.ajax({  
				type: 'POST',  
				url: form.attr('action'),
				dataType: 'html',
				data: form.serialize(),  
				success: function(data){
				
					setTimeout(function(){
						contaner.hide().html(data).stop(true, true).fadeIn(800);
					}, 1000);
				},
				error: function(data){
					$("h3", contaner).addClass("error").html("Отсутствует соединение с интернетом.");
				}
		});
	});
	
	
	
    $("input[name=FORM\\[A\\]], input[name=FORM\\[B\\]]").keyup(function(){
        var a  = parseFloat($("input[name=FORM\\[A\\]]").val().replace(/,/g,".")) || 0,
            b  = parseFloat($("input[name=FORM\\[B\\]]").val().replace(/,/g,".")) || 0;

        if(a && b){
            $("input[name=FORM\\[S\\]]").val(a*b);
        }
        else{
            $("input[name=FORM\\[S\\]]").val();
        }
    });

	$(".next.submit-size").click(function(){
	
		var   			  
			  h  = parseFloat($("input[name=FORM\\[H\\]]").val().replace(/,/g,".")) || 0,
			  a  = parseFloat($("input[name=FORM\\[A\\]]").val().replace(/,/g,".")) || 0,
			  b  = parseFloat($("input[name=FORM\\[B\\]]").val().replace(/,/g,".")) || 0,
			  s  = parseFloat($("input[name=FORM\\[S\\]]").val().replace(/,/g,".")) || 0,
              h_podokonnik  = parseFloat($("input[name=FORM\\[H1\\]]").val().replace(/,/g,".")) || 0;

			  if( h > 3.5 || h < 2.1){
                $(".buttons .error_area").hide();
				$(".buttons .error").stop(true, true).fadeIn(600, function(){
					setTimeout(function(){$(".buttons .error").stop(true, true).fadeOut()}, 6000);
				});				
				return false;
			  }

            if($(this).data("prev") == "4"){
                $(".buttons .error_area").hide();
            }
            var status_active_s = true;
            if( s > 36 || s < 2.25){

                if((a <= 6 && a >= 1.5) && (b <= 6 && b >= 1.5)){
                    $("input[name=FORM\\[S\\]]").val(a*b);

                    if((a*b) != s){
                        $(".buttons .error_area").stop(true, true).fadeIn(600, function(){
                            setTimeout(function(){$(".buttons .error").stop(true, true).fadeOut()}, 6000);
                        });
                        return false;
                    }
                }
                else{
                    $(".buttons .error_area").hide();
                    $(".buttons .error").stop(true, true).fadeIn(600, function(){
                        setTimeout(function(){$(".buttons .error").stop(true, true).fadeOut()}, 6000);
                    });
                    return false;
                }
            }
            else{
                if((a <= 6 && a >= 1.5) && (b <= 6 && b >= 1.5)){
                    $("input[name=FORM\\[S\\]]").val(a*b);

                    if((a*b) != s){
                        $(".buttons .error_area").stop(true, true).fadeIn(600, function(){
                            setTimeout(function(){$(".buttons .error").stop(true, true).fadeOut()}, 6000);
                        });
                        return false;
                    }
                }
                else{
                    status_active_s = false;
                }
            }

            if(status_active_s){
			  if( a > 6 || a < 1.5){
                $(".buttons .error_area").hide();
				$(".buttons .error").stop(true, true).fadeIn(600, function(){
					setTimeout(function(){$(".buttons .error").stop(true, true).fadeOut()}, 6000);
				});				
				return false;
			  }

			  if( b > 6 || b < 1.5){
                $(".buttons .error_area").hide();
				$(".buttons .error").stop(true, true).fadeIn(600, function(){
					setTimeout(function(){$(".buttons .error").stop(true, true).fadeOut()}, 6000);
				});				
				return false;
			  }
            }

            // подоконник
            if(h_podokonnik > 4 || h_podokonnik < 0){
                $(".buttons .error").stop(true, true).fadeIn(600, function(){
                    setTimeout(function(){$(".buttons .error").stop(true, true).fadeOut()}, 6000);
                });
                return false;
            }

            if($("input[name=FORM\\[H1\\]]").val() == ''){
                /*
                $(".buttons .error_area").hide();
                $(".buttons .error").stop(true, true).fadeIn(600, function(){
                    setTimeout(function(){$(".buttons .error").stop(true, true).fadeOut()}, 6000);
                });
                return false;
                */
            }


        $(".buttons .error").stop(true, true).fadeOut();
		
		
		$($(this).data("prev")).hide();
		$($(this).data("next")).fadeIn("fast");
		return false;
	});
	
	
	$(".submit-form").click(function() {
		$(".step-5 .next").hide();
		$($(this).data("prev")).hide();
		$($(this).data("next")).fadeIn("fast");
		return false;
	});
	
	$(".next.submit-res").click(function(){
	
		var   type = $("select[name=FORM\\[TYPE\\]]")[0],
			  k1 = $("select[name=FORM\\[K1\\]]")[0],
			  k2 = $("select[name=FORM\\[K2\\]]")[0],
			  
			  h  = parseFloat($("input[name=FORM\\[H\\]]").val().replace(/,/g,".")) || 2.1,
			  a  = parseFloat($("input[name=FORM\\[A\\]]").val().replace(/,/g,".")) || 0,
			  b  = parseFloat($("input[name=FORM\\[B\\]]").val().replace(/,/g,".")) || 0,
			  s  = parseFloat($("input[name=FORM\\[S\\]]").val().replace(/,/g,".")) || 2.25,
			  h1 = parseFloat($("input[name=FORM\\[H1\\]]").val().replace(/,/g,".")) || 0,
			  
			  elem = $("input[name=labeled]:checked"),
			  
			  Q = elem.data("q"),
			  name = elem.data("name"),
			  url = elem.data("url"),
			  img = elem.data("img"),
			  
			  n = 0, m = 1, m_tmp = 1,
              n_text = '', n_text_tmp = '';
			
			  $("#res_TYPE").html(type[type.selectedIndex].text);
			  $("#res_K1").html(k1[k1.selectedIndex].text);
			  $("#res_K2").html(k2[k2.selectedIndex].text);

			  $("#res_H").html(h);
			  if(a > 0){
                  $("#res_A").html(a);
              }
              else{
                  $("#res_A").parent().hide();
              }

              if(b > 0){
			    $("#res_B").html(b);
              }
              else{
                  $("#res_B").parent().hide();
              }
			  $("#res_H1").html(h1);
			
			  k0 = $("select[name=FORM\\[K0\\]]").val();
			  k1 = $("select[name=FORM\\[K1\\]]").val();
			  k2 = $("select[name=FORM\\[K2\\]]").val();

              if((a > 0) && (b > 0)){
			    n = Math.ceil((41*a*b*h*k0*k1*k2)/Q);
              }
              else{
                  n = Math.ceil((41*s*h*k0*k1*k2)/Q);
              }

        console.log(n);
        m = Math.ceil(n/14);
        var count_cell = 0;
			  if((n > 14) && (n <= 28)){
                m_tmp = Math.ceil(n/2);
                for(var i=1; i<2; i++){
                    n_text += m_tmp+' шт.; ';
                    count_cell = count_cell + 1;
                }
                  if((n-(count_cell*m_tmp)) > 0){
                      n_text += (n-m_tmp);
                  }
                  else{
                      n_text_tmp = n_text.substr(0, (n_text.length - 5));
                  }
              }
              else if((n > 28) && (n <= 42)){
                  m_tmp = Math.ceil(n/3);
                    for(var i=1; i<=3; i++){
                        n_text += m_tmp+' шт.; ';
                        count_cell = count_cell + 1;
                    }
                  if((n-(count_cell*m_tmp)) > 0){
                      n_text += (n-m_tmp);
                  }
                  else{
                      n_text_tmp = n_text.substr(0, (n_text.length - 5));
                  }
                }
                else{
                    m = Math.ceil(n/14);
                    n_text = n;
                }

                if(n_text_tmp) n_text = n_text_tmp;

              $("#res_N").html(n_text);
			  $("#res_M").html(m);
			  
			  $("#res_NAME").html(name);
			  $("#res_URL").attr("href", url);
			  $("#res_IMG").attr("src", img);

            $('.button-print').attr('href', $('.button-print').attr('href')+'&res_TYPE='+$("#res_TYPE").html()+'&res_K1='+$("#res_K1").html()+'&res_K2='+$("#res_K2").html()+'&res_H='+h+'&res_A='+a+'&res_B='+b+'&res_H1='+h1+'&res_N='+n+'&res_M='+m+'&res_NAME='+name+'&res_URL='+url+'&res_IMG='+img);
			  
	});	
	
});
