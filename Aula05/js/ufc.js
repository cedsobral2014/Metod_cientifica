/**
 * @author andreibosco
 */

jQuery(document).ready(function() {

	// STICKY HEADER
	var window_width = $(window).width();
	var navbar = $("#navegacao");
	var navbar_width = $(navbar).width();
	/* var navbar_left = (window_width - navbar_width) / 2;*/
	var navbar_top = $(navbar).css("top");
	//console.info(navbar_top);
	var navbar_height = $(navbar).height();
	var navbar_left = $(navbar).css("left")
	var cabecalho = $("#cabecalho");
	/* $(navbar).css("left",navbar_left); */
	$(window).scroll(function(){
		if ($(window).scrollTop() > 50) {
			$(navbar).css("top","0px");
			$(navbar).css("position","fixed");
			$(navbar).css("margin-left","-450px");
			$(cabecalho).css("margin-bottom",navbar_height+5);

		} else {
			$(navbar).css("position","static");
			$(navbar).css("top",navbar_top);
			$(navbar).css("left","");
			$(navbar).css("margin-left","");
			$(cabecalho).css("margin-bottom","");
		}
	});
	//MENU
	/*
	$("#nav li:first").hover(
		function(){
			$("#nav ul").fadeIn(500);
			$("#nav ul").position({
				my		: "left top",
				at		: "left bottom",
				of		: $(this),
				offset	: "0 1"
		},function(){
			$("#nav ul").fadeOut(400);
		});
	})
	*/

	/* definindo largura do submenu */
	/*
	$(".nav-menu-sub > ul").each(function(){
		var submenu_margem = 220 - 6;
		$(this).css('margin-left',submenu_margem+'px');
	})
	*/

	/* exibindo o menu ao navegar via teclado */
	$("#nav-menu").focus(function(){
		$("#nav-menu > ul").show();
	});
	/* ocultando o menu após o ultimo item perder o foco */
	$("#nav > li > ul > li:last").focusout(function(){
		$("#nav ul").hide();
	});
	
	
	$("#nav-menu").hover(
	function(){
		$("#nav-menu > ul").fadeIn(500);
	},function(){
		$("#nav-menu > ul").fadeOut(400);
	});
	
	$(".nav-menu-sub").hover(
	function(){
		$("ul:eq(0)", this).fadeIn(500);
	},function(){
		$("ul:eq(0)", this).fadeOut(400);
	});

	// CONTRASTE
	$("#menu_constrate").click(function(){
		var css_layout = "css/tema.css";
		var css_layout_contraste = "css/tema-contraste.css"
		$('[rel=stylesheet]').each(function() {
			if ( $(this).attr("href") == css_layout ) {
				$(this).attr("href",css_layout_contraste);
			} else if ( $(this).attr("href") == css_layout_contraste ) {
				$(this).attr("href",css_layout);
			};
		});
	})

	// POST-ITS
	$("div.post_it").prepend("<div class='post_it_cabecalho'></div>");

	// CITAÇÕES
	$("blockquote").prepend("<div class='citacao_cabecalho'></div>");
	$("blockquote").append("<div class='citacao_rodape'></div>");
	
	/*$(".citacao_abnt").prepend("<div class='citacao_cabecalho'></div>");
	$(".citacao_abnt").append("<div class='citacao_rodape'></div>");*/

	// RETRATIL
	/* função que une slideToggle e fadeToggle, encontrado em http://css-tricks.com/snippets/jquery/combine-slide-and-fade-functions/ */
	$.fn.slideFadeToggle  = function(speed, easing, callback) {
	        return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
	};
	/* ocultando conteudo */
	// $(".retratil_conteudo").hide();
	$(".retratil_ativar").click( function() {
		$(this).parent().siblings(".retratil_conteudo").slideFadeToggle("slow");
	});

	/* adicionando sufixo em retráteis */
	sufixoRetratil = 0;
	sufixoOcultar = "(Ocultar)";
	sufixoExibir = "(Exibir)"
	// $(".retratil_ativar").append(" <span>"+sufixoExibir+"</span>").parent().addClass("retratil_sinal");
	//retratil_sinal = '<img src="layout/icone-retratil-abrir.png" alt="Icone retratil" style="vertical-align:bottom;margin-right:5px">'
	//$(".retratil_ativar").prepend(retratil_sinal);
	$(".retratil_ativar").prepend('<img src="layout/icone-retratil-abrir.png" alt="Icone retratil" class="icone icone_retratil" />');
	$(".retratil_ativar").click(function(){
		/* alterando posicao do background para alternar entre
		os icones de positivo e negativo */
		posicaoBg = $(this).children("img:eq(0)").attr("src");
		if ( posicaoBg == "layout/icone-retratil-abrir.png" ) {
			$(this).children("img:eq(0)").attr("src","layout/icone-retratil-fechar.png")
		} else {
			$(this).children("img:eq(0)").attr("src","layout/icone-retratil-abrir.png")
		}
		
		/* adicionando e alternando o sufixo de Exibir e Ocultar */
		// if (sufixoRetratil == 0) {
		// 	$("span:first", this).empty();
		// 	$("span:first", this).append(sufixoOcultar);
		// 	sufixoRetratil = 1;
		// } else {
		// 	$("span:first", this).empty();
		// 	$("span:first", this).append(sufixoExibir);
		// 	sufixoRetratil = 0;
		// }
	});

	// ABAS
	$('.abas').tabs();

	// ACCORDION
	$(".sanfona").accordion({
		header: "h3",
		autoHeight: false,
		active: false,
		collapsible: true,
		icons: { 'header': 'ui-icon-circle-plus', 'headerSelected': 'ui-icon-circle-minus' }
	});	

	// FLUTUANTES
	/* flutuante generico */
	//$(".flutuante_ativar").append('<img src="layout/icone-flutuante.jpg" alt="Icone flutuante" />');
	$(".flutuante_ativar").each(function(){
		// parent = $(this).parent();
		// parent_tag = parent[0].nodeName;
		// console.log(parent_tag);
		if ( $(this).parent().is("H3") ) {
			$(this).prepend('<img src="layout/icone-flutuante.png" class="icone icone_flutuante_pre" alt="Icone flutuante"" />');
		} else {
			$(this).append('<img src="layout/icone-flutuante.png" class="icone icone_flutuante" alt="Icone flutuante" />');
		}
	});

	$(".flutuante_ativar").fancybox({
		'titlePosition'		: 'inside',
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoDimensions'	: true,
		// 'width'			: 720,
		// 'height'			: 500,
		'onComplete'		: function() {
			location.href = "#flutuante_ancora";
		}
	});
	/* flutuante para iframes */
	$(".flutuante_externo").fancybox({
		'titlePosition'		: 'inside',
		'autoScale'			: true,
		'width'				: 1000,
		'height'			: 500,
		'type'				: 'iframe',
		'padding'			: 0
	});
	/* flutuante para galerias de imagens */
	$("a.flutuante_galeria").fancybox({
		'transitionIn'		: 'elastic',
		'transitionOut'		: 'elastic',
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over">Imagem ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});
	/* flutuante para imagemaps */
	$('map > area.flutuante_mapa').click(function(e) {
		e.preventDefault();
		var url = $(this).attr('href');
		var title = $(this).attr('title');
		var type = $(this).attr('rel');
		$.fancybox({
			'autoDimensions' : true,
			'title': title,
			'titlePosition': 'inside',
			'href' : url,
			'type' : type
		});
	});

	/* adicionando sufixo no flutuante */
	/*
	$(".flutuante_ativar").append("<span>(Exibir)</span>");
	*/

	// SELETOR
	
	// adicionando hrefs aos links de navegacao do seletor
	$('.seletor-navegacao a').each(function(i){
		$(this).attr('href','#seletor-'+i);
		//console.log($(this).attr('href'));
	});
	// adicionando ids aos paineis de conteudo do seletor
	$('.seletor-descricao').each(function(i){
		$(this).attr('id','seletor-'+i);
		//console.log($(this).attr('id'));
	})

	/* TEMP: referencia de testes, remover depois
	$('.seletor').each(function(){
		//$seletor_panels_total = $('.seletor-descricao',this).size();
		var $seletor_painels = $('.seletor-descricao', this);
		$('.seletor-navegacao a',this).each(function(){
			$seletor_id++;
			$(this).attr('href','#seletor-'+$seletor_id)
			console.log($seletor_id);
		});
		$seletor_painels.each(function(){
			$(this).attr('id','seletor-'+$seletor_id);
			console.log($(this));
		})

		console.log($('.seletor-descricao',this).size()+"painels")
	})
	*/
	
	// adicionando classe ativa ao primeiro item de navegacao do seletor
	$('.seletor-navegacao').each(function(){
		$('li:first',this).addClass('seletor-item-ativo');
	})
	// ativando função ao clicar em um link de navegação do seletor
	$('.seletor-navegacao a').click(seletorNav);

	function seletorNav() {
		// obtendo o valor do href, que deve corresponder a um id de um painel de conteudo do seletor
		var $seletor_id = $(this).attr('href');
		// obtendo o seletor correspondente ao link de navegacao clicado (para evitar problemas em casos de multiplas instancias)
		var $seletor_parent = $(this).closest('.seletor');

		/* DEBUG
		console.log($seletor_id);
		console.log($seletor_parent);
		*/

		// removendo a classe ativa de todos os itens de navegação e adicionando ao item clicado
		$(this)
			.parents('ul:first')
				.find('li')
					.removeClass('seletor-item-ativo')
				.end()
			.end()
			.parent()
				.addClass('seletor-item-ativo')
			.end();
		
		// utilizando o script scrollTo para navegar ao id indicado pelo link de navegação clicado
		$('.seletor-container',$seletor_parent)
			//.css('overflow','auto')
			.scrollTo($seletor_id,500);

		return false;
	}

	// SLIDE
	simpleSlide({
		'callback': function() {
			$(".simpleSlide-controles").each(function() {
				slide = $(this).prev();
				largura_controle = slide.width() * 0.9;
				$(this).css('width', largura_controle);
			});
		}
	});
	

	// TABELA DESTACADA
	$(".tabela div:even, .tabela tr:even").addClass('tabela-cor');


	// PLAYER
	jQuery.fn.audioPlayer = function( options ) {
		/* salvando nome do id em uma variável */
		var playerId = $(this).attr('id');
		var playerContainer = playerId+'-container';
		var defaults = {
			'arquivo'	: './audio/topico_01/audio.mp3'
		};
		
		return this.each(function() {        
			// If options exist, lets merge them
			// with our default settings
			if ( options ) { 
				$.extend( defaults, options );
			}

			// plugin code here
			/* adicionando o sufixo container ao id da div, esvaziando qualquer conteúdo existente e adicionando o código do player toolbar logo após */
			$(this).attr('id',playerContainer).empty().after('<div class="audio_player audio-player-toolbar ui-widget-header ui-corner-all" id="'+playerId+'" style="width:260px"><button class="play" style="min-width:79px">Ouvir</button><button class="pause">Pausar</button><button class="stop">Parar</button><div class="audio-progressbar"></div></div>');
			/* criando o estilo dos botões e barra de progresso pelo jquery ui */
			$( ".play" ).button({
				text: true,
				icons: {
					primary: "ui-icon-play"
				}
			});
			$(".pause").button({
				text: true,
				disabled: false,
				icons: {
					primary: "ui-icon-pause"
				}
			});
			$( ".stop" ).button({
				text: true,
				icons: {
					primary: "ui-icon-stop"
				}
			});
			$( ".audio-progressbar" ).progressbar({
				value: 0.1
			});
			/* iniciando código do player */
			$("#"+playerContainer).jPlayer({
				ready: function () {
					$(this).jPlayer("setMedia", {
						mp3: options.arquivo
					});
				},
					cssSelectorAncestor: "#"+playerId,
					cssSelector: {
					play:".play",
					pause:".pause",
					stop:".stop",
					playBar:".ui-progressbar-value",
					seekBar:".audio-progressbar"
				},
				ended: function (event) {
					//console.info('acabou')
				},
				swfPath: "flash",
				supplied: "mp3"

			})
			/* código para pausar a execução do áudio caso outro player seja iniciado */
			.bind($.jPlayer.event.play, function() {
				$(this).jPlayer("pauseOthers");
			});
		});
	};

	jQuery.fn.audioBotao = function( options ) {
		/* salvando nome do id em uma variável */
		var playerId = $(this).attr('id');
		var playerContainer = playerId+'-container';
		var defaults = {
			'arquivo' : './audio/topico_01/audio.mp3',
			'play' : 'Ouvir',
			'pause' : 'Pausar'
		};
		
		return this.each(function() {        
			// If options exist, lets merge them
			// with our default settings
			if ( options ) { 
				$.extend( defaults, options );
			}

			// plugin code here
			/* adicionando o sufixo container ao id da div, esvaziando qualquer conteúdo existente e adicionando o código do player logo após */
			$(this)
				.attr('id',playerContainer)
				.empty()
				.after('<span id='+playerId+' class="audio"><button class="play2"><span class="ui-button-icon-primary ui-icon ui-icon-play"></span><span class="audio-texto">'+options.play+'</span></button><button class="pause2"><span class="ui-button-icon-primary ui-icon ui-icon-pause"></span><span class="audio-texto">'+options.pause+'</button></span>');
				/*
				.before('<div id='+playerContainer+'></div>')
				.prepend('<div id='+playerId+'></div>')
				*/

			/* iniciando código do player */
			$("#"+playerContainer).jPlayer({
				ready: function () {
					$(this).jPlayer("setMedia", {
						mp3: options.arquivo
					});
				},
					cssSelectorAncestor: "#"+playerId,
					cssSelector: {
					play:".play2",
					pause:".pause2"
				},
				ended: function (event) {
					//console.info('acabou')
				},
				swfPath: "flash",
				supplied: "mp3"

			})
			/* código para pausar a execução do áudio caso outro player seja iniciado */
			.bind($.jPlayer.event.play, function() {
				$(this).jPlayer("pauseOthers");
			});
		});
	};
	
	// validação de campos de texto
	jQuery.fn.validarArray = function(resposta) { 
		if (resposta.indexOf('#'+$(this).val()+'#') >=0){
			$(this).removeClass("incorreto");
			$(this).addClass("correto");
			return true;
		} else {
			$(this).removeClass("correto");
			$(this).addClass("incorreto");
			return false;
		};
	};
	//PORTA RETRATO
	$(".portaretrato").first().css("margin-right","4px")
	$(".portaretrato").last().addClass("last_flutuante")
        $('.portaretrato').each(function() {
			$(this).hover(function(){
				if($(this).is(':animated')){
					$(this).stop().animate({width : "300px"},{duration:800,easing:"easeOutQuad"})
					var legenda = $(this).children("span").attr("id")
					$("#"+legenda).fadeIn("slow")
					}
				else{
					$(this).stop().animate({width : "300px"},{duration: 850,easing:"easeOutQuad"})
					var legenda = $(this).children("span").attr("id")
					$("#"+legenda).fadeIn("slow")
				    }
				},
				function(){
				if($(this).is(':animated')){
					$(this).stop().animate({width : "60px"},{duration:800,easing:"easeOutQuad"})
					var legenda = $(this).children("span").attr("id")
					$("#"+legenda).fadeOut("slow")
					}
				else{
					$(this).stop().animate({width : "60px"},{duration: 850})
					var legenda = $(this).children("span").attr("id")
					$("#"+legenda).fadeOut("slow")
				    }
				})
        });
	//PORTARETRATO FIM
	//CODA SLIDER
		jSlider = $("body").find(".coda-slider").size();
		iSlider = 1;
		$().ready(function() {
		if(iSlider <= jSlider){
			while(iSlider <= jSlider){
			   $('#coda-slider-'+iSlider).codaSlider({
			   dynamicArrows: false,
			   dynamicTabs: false
			   })
			   iSlider++;
				}
			}	   
	   });	
	   //FIM CODASLIDER
	   
	    //CAIXA SUPRESA
	   $(document).ready(function() {
        	$(".abas-rotativas>ul").css("display","block")
    	});
	   $(".abas-rotativas>ul>li").each(function() {
	   	$(this).addClass("jcarousel-default")
	   })
		$(".abas-rotativas>ul>li").each(function() {
				if($(this).is(":first-child")){	
					$(this).removeClass("jcarousel-default")
					$(this).addClass("jcarousel-ativo")
				}
    	});
$(".abas-rotativas").each(function() {
   //Criando o Slider
    $(this).jcarousel({
			wrap:'last'
			})
	//Implementando o Autoscroll
		$(this).jcarouselAutoscroll({
			autostart: false
	})
		$(this).parent().find(".proxima-aba").click(function(){
			$(this).parent().find(".jcarousel").jcarousel('scroll', '+=2');
			})
		$(this).parent().find(".voltar-aba").click(function(){
			$(this).parent().find(".jcarousel").jcarousel('scroll', '-=2');
			})
	});
	//EVENTOS
		//QUANDO CLIKAR
		
		
		//MARCAR COMO CLICADO
$(".abas-rotativas").each(function(index, element) {
		$(this).find("ul>li").click(function(){
				$(this).parent().find("li").each(function() {
					$(this).removeClass("jcarousel-ativo")
					$(this).removeClass("jcarousel-default")
					$(this).addClass("jcarousel-default")
				});
			$(this).removeClass("jcarousel-default")
			$(this).addClass("jcarousel-ativo")
		})
});
		
		
		//APARECER CONTEUDO
   		$(document).ready(function() {
			$(this).find(".jcarousel-container-conteudo").each(function() {
               $(this).find(".jcarousel-conteudo:first").slideDown("slow") 
            });
    	});
$(".abas-rotativas").each(function(index, element) {
	
   $(this).find(".jcarosel-ativar").click(function(){
		abaposicao = $(this).attr("name")
		
		$(this).parent().parent().parent().find(".jcarousel-conteudo").is(function(){
				$(this).slideUp("now");
			})
		$(this).parent().parent().parent().find("#"+abaposicao).delay(400).slideDown("slow")
		
		})
		
	}); 
	
	$(document).ready(function() {
		//Criando o Jcarousel
		   $(".scroll-fotos").each(function() {
			$(this).find("ul").css("display","block")
		//Animando Conteúdo//
				$(this).find(".conteudo-scroll").each(function() {
						$(this).parent("li").hover(
								function(){
									$(this).find(".conteudo-scroll").animate({height:"+=10px"},"fast","easeInOutCirc","easeOutBounce");
								},
								function(){
									$(this).find(".conteudo-scroll").animate({height:"-=10px"},"slow");					
							})						
			});
			
		//--------------------------------------------//
		//Registrando Quantidades de Imagens
			var maxScroll = $(this).find("li").size();
			var atualScroll = 1;
			var nScroll = 0;
	
			$(this).find("#atual_scroll").text(atualScroll+"/"+maxScroll);
		//-------------------------------------------//
			if($(this).attr('class') == 'circular-pequeno'){
				$(this).jcarousel({
					wrap: 'last',					
					animation: {
						'duration': 1000 ,
						'easing':'jswing'
					}
				});
				}
			else{
				$(this).jcarousel({
					wrap: 'last', 
					animation: {
						'duration': 1000 ,
						'easing':'jswing'
					}
				});
			}
		//Aplicando a Função Passar e Voltar
			$(this).find("#proximo-scroll").click(function(){
				atualScroll += 1;
				nScroll += 1;
				if(maxScroll < atualScroll){
					atualScroll = $(this).parent().find("li:first-child").length;
					nScroll = 0;
					}
				$(this).parent(".jcarousel").jcarousel('scroll', nScroll);
				$(this).parent().find("#atual_scroll").text(atualScroll+"/"+maxScroll); 
				return false;
				})
			$(this).find("#voltar-scroll").click(function(){
				atualScroll -= 1;
				nScroll -= 1;
				if(atualScroll <= 0){
					atualScroll = $(this).parent().find("li:first-child").length;
					nScroll = 0;
					}
				$(this).parent(".jcarousel").jcarousel('scroll', nScroll);
				$(this).parent().find("#atual_scroll").text(atualScroll+"/"+maxScroll); 
				return false;
				})
			});
			
			$(".scroll-circular").each(function() {
                $(this).find("ul").css("display","block")
				
				//CHAMANDO O CAROUSEL
				$(this).jcarousel({
					wrap: 'circular',
					easing:'easeInCubic',
					animation:4000					
				});	
				
				$(this).jcarouselAutoscroll({
					autostart: true,
					interval: 1000
				});
            });
			
		});
				
			   $(".scroll-tablet").each(function(index, element) {
					var Width = CalculandoLarguraMax($(this));
					$(this).find(">ul").css("width",Width);
					$(this).find(">ul").css("display","block");
											
					//CHAMANDO O CAROUSEL
					
					$(this).jcarousel({
							wrap: 'both',
							animation:{
								duration:1000,
								easing:"easeInQuad"						
								}					
						});						
					$(this).parents(".tablet").find(".scroll-tablet-nav ul li").each(function(index) {                        	
							$(this).removeClass();
							
							if($(this).is(":first-child")){
								$(this).find("a").addClass("li-ativa-tablet");	
								}
								
							//Mouse-Down
							$(this).click(function(){
								
								$(this).parents(".scroll-tablet-nav").find("ul li a").each(function() {
                                    $(this).removeClass();
                                });
								
								$(this).find("a").addClass("li-ativa-tablet");
								$(element).jcarousel("scroll",index);
							})
                    });
					
					$(".start-btn-tablet").each(function() {
						//EVENTOS DO BUTÂO
						
						//Mouse-hover
						$(this).hover(function(){
							$(this).find(">img").animate({opacity:1},"slow");
							},function(){
							$(this).find(">img").animate({opacity:0.4},"slow");
						})
						//Mouse-Down
						$(this).click(function(){
							$(this).find(">img").animate({width:110,height:110},"slow");
							$(this).fadeOut("slow");
							$(this).parent(".jcarousel-skin-default").find(">.filter-start-tablet").fadeOut("slow");
							$(this).parents(".tablet").find(".scroll-tablet-nav").delay("slow").fadeIn("slow");
							
							//TRATAMENTO PARA O INTERNET EXPLORER											
							if($.browser.msie){
								if($($.browser.version)){
									$(".scroll-tablet-nav").css("margin-top","348px");
								}
							}
							
						});
					});
				}); 
			
			if($.browser.webkit == true){		
					$(".scroll-tablet >ul >li").hover(function(){
						$(".scroll-tablet >ul >li").css("overflow-x","hidden");
						$(".scroll-tablet >ul >li").css("overflow-y","auto");
					},
					function(){
								$(".scroll-tablet >ul >li").css("overflow","visible");						
						});		
	}	

				
		
	function CalculandoLarguraMax(Jcarousel){
		var maxWidth = 0;
		$(Jcarousel).find(">ul>li").each(function(index, element) {              
				if($(this).is(":last-child")){
					maxWidth += $(this).width()*2;					
					}
				else{
					  maxWidth += $(this).width();
					}
            });
			return maxWidth;
		}

	//Campos indesejaveis
	$(".flutuante_ativar").each(function(){
			er = $(this).text().match(/(^[C-c]lique [A-a]qui)|(^[C-c]lique [A-a]qui*)|(.*[C-c]lique [A-a]qui)/);
				if(er){
					$(this).attr("id","del_3");	
				}
			});
	//$("a").each(function(){
				//er = $(this).text().match(/(^[C-c]lique [A-a]qui)|(^[C-c]lique [A-a]qui*)|(.*[C-c]lique [A-a]qui)/);
				//if(er){
					//$(this).attr("id","del_3");	
				//}
			//});
	//FIM CAMPOS INDESEJÀVEIS		
	
	/**
	*
	*	Quiz
	*
	*
	**/
	
	var personagemUrl = 'layout/Quiz/';
	
	//validação de Text	
	jQuery.fn.validarText = function(questao) {
		$("input[type='text']", questao).parent().removeClass("correto");
		$("input[type='text']", questao).parent().removeClass("incorreto");
		
		var certas=0;
		if($(questao).attr("alt")){
			var tentativa = parseInt($(questao).attr("alt")); //CONVERTE A STRING PARA INTEIRO
		}
		else{
			$(questao).attr("alt",0);
			var tentativa = parseInt($(questao).attr("alt")); //CONVERTE A STRING PARA INTEIRO
		}
		
		$(questao).find("input[type='text']").each(function() {
            certas++;	
        });
								
			var acertadas = 0;
		
			$(questao).find("input[type='text']").each(function(){
				var resposta = $(this).val();			
				if (resposta == $(this).attr("name")) {
					$(this).parent().removeAttr("correto");
					$(this).parent().addClass("incorreto");
				}
				else {
					$(this).parent().removeAttr("correto");
					$(this).parent().addClass("incorreto");
				}
			})
		
		$(questao).find("input[type='text']", questao).each(function(){
			var resposta = $(this).val();
			//console.info(resposta);	
			if (resposta == $(this).attr("name")) {
				$(this).parent().removeClass("incorreto");
				$(this).parent().addClass("correto");
				acertadas = $(questao).find(".correto").size();
			}
			else if(resposta != $(this).attr("name")){
				$(this).parent().removeClass("correto");
				$(this).parent().addClass("incorreto");				
				acertadas = $(questao).find(".correto").size();
				}
			else {
				$(this).parent().removeAttr("correto");
				$(this).parent().addClass("incorreto");
			}
		})	
			
		
		if(certas == acertadas ){
			//console.info(certas);			
			//console.info(acertadas);
			tentativa++;
			$(questao).attr("alt",tentativa);
			$(questao).find("input[type='text']").each(function() {
				$(this).parent().removeAttr("class");
				$(this).parent().addClass("correto");
			});			
			$.fancybox({
				'autoScale'			: true,
				'width'				: 1000,
				'height'			: 500,
				'type'				: 'inline',
				content: "<h3 class='centralizado'>Parábens todas as alternativas estão corretas.<br/> \
			Número de suas tentativas: #"+tentativa+"<br/>\
			<img src='layout/Quiz/personagem-satisfacao.jpg' width='211'/><br/>\
			Acertou "+acertadas+" de "+certas+"</h3>"
			});
		}
		
		else{	
			//console.info(certas);			
			//console.info(acertadas);			
			tentativa++;
			$(questao).attr("alt",tentativa);
			$.fancybox({
				'autoScale'			: true,
				'width'				: 1000,
				'height'			: 500,			
				content: "<h3 class='centralizado'>Tente Novamente"+"<br/>\
			Número de suas tentativas: #"+tentativa+" <br/> \
			<img src='layout/Quiz/personagem-observacao.jpg' width='211'/><br/>\
			Acertou "+acertadas+" de "+certas+"</h3>"
			});
		}					
	}
	
	<!-- FIM VALIDAÇÃO TEXTO -->
	
	// validação de radiobox
	jQuery.fn.validarRadio = function(questao) {						
		$("input:radio", questao).parent().removeClass("correto");
		$("input:radio", questao).parent().removeClass("incorreto");
		var certas = 0;
		if($(questao).attr("alt")){
			var tentativa = parseInt($(questao).attr("alt")); //CONVERTE A STRING PARA INTEIRO
		}
		else{
			$(questao).attr("alt",0);
			var tentativa = parseInt($(questao).attr("alt")); //CONVERTE A STRING PARA INTEIRO
		}
		
		$(questao).find("input:radio").each(function() {
			var resposta = $(this).val();
			if(resposta == "certo"){
				certas++;	
			}
        });
		
		var acertadas = 0;
		
		$(questao).find("input:radio:not(:checked)", questao).each(function(){
			var resposta = $(this).val();			
			if (resposta == "certo") {
				$(this).parent().removeAttr("correto");
				$(this).parent().addClass("incorreto");
			}
			else {
				$(this).parent().removeAttr("correto");
				$(this).parent().addClass("incorreto");
			}
		})
		
		$(questao).find("input:radio:checked", questao).each(function(){
			var resposta = $(this).val();
			//console.info(resposta);	
			if (resposta == "certo") {
				$(this).parent().removeClass("incorreto");
				$(this).parent().addClass("correto");
			}
			else if(resposta != "certo"){
				$(this).parent().removeClass("correto");
				$(this).parent().addClass("incorreto");
				}
			else {
				$(this).parent().removeAttr("correto");
				$(this).parent().addClass("incorreto");
			}
		})	
		
		acertadas = $(questao).find(".correto").size();
		
		if(certas == acertadas ){
			//console.info(certas);			
			//console.info(acertadas);
			tentativa++;
			$(questao).attr("alt",tentativa);
			$(questao).find("input:radio").each(function() {
				$(this).parent().removeAttr("class");
				$(this).parent().addClass("correto");
			});					
		}
		
		else{	
			//console.info(certas);			
			//console.info(acertadas);			
			tentativa++;
			$(questao).attr("alt",tentativa);
			$(questao).find("input:checkbox").each(function() {
				$(this).parent().removeAttr("class");
				$(this).parent().addClass("incorreto");
			});				
		}	
		var resultado = acertadas/certas*100;
		
		if(resultado >= 70){
			$.fancybox({
				'autoScale'			: false,
				'width'				: 1000,
				'height'			: 500,
				content: "<h3 class='centralizado'>Parábens você "+resultado+"% de respostas corretas.<br> \
			Número de suas tentativas: #"+tentativa+"<br/>\
			<img src='layout/Quiz/personagem-satisfacao.jpg' width='211'/><br/>\
			Acertou "+acertadas+" de "+certas+"</h3>"
			});
		}
		else{
			$.fancybox({
				'autoScale'			: false,
				'width'				: 1000,
				'height'			: 500,			
				content: "<h3 class='centralizado'>Tente Novamente"+"<br/>\
			Número de suas tentativas: #"+tentativa+" <br/> \
			<img src='layout/Quiz/personagem-observacao.jpg' width='211'/><br/>\
			Acertou "+acertadas+" de "+certas+"</h3>"
			});
		}
		
	};
});

	<!-- FIM VALIDAÇÃO RADIO -->
// validação de Check
	jQuery.fn.validarCheck = function(questao) {						
		$("input:checkbox", questao).parent().removeClass("correto");
		$("input:checkbox", questao).parent().removeClass("incorreto");
		var certas = 0;
		if($(questao).attr("alt")){
			var tentativa = parseInt($(questao).attr("alt")); //CONVERTE A STRING PARA INTEIRO
		}
		else{
			$(questao).attr("alt",0);
			var tentativa = parseInt($(questao).attr("alt")); //CONVERTE A STRING PARA INTEIRO
		}
		
		$(questao).find("input:checkbox").each(function() {
			var resposta = $(this).val();
			if(resposta == "certo"){
				certas++;	
			}
        });
		
		var acertadas = 0;
		
		$(questao).find("input:checkbox:not(:checked)", questao).each(function(){
			var resposta = $(this).val();			
			if (resposta == "certo") {
				$(this).parent().removeAttr("correto");
				$(this).parent().addClass("incorreto");
			}
			else {
				$(this).parent().removeAttr("correto");
				$(this).parent().addClass("incorreto");
			}
		})
				
		$(questao).find("input:checkbox:checked", questao).each(function(){
			var resposta = $(this).val();
			//console.info(resposta);	
			if (resposta == "certo") {
				$(this).parent().removeClass("incorreto");
				$(this).parent().addClass("correto");
				acertadas++;
			}
			else if(resposta != "certo"){
				$(this).parent().removeClass("correto");
				$(this).parent().addClass("incorreto");
				acertadas--;
				}
			else {
				$(this).parent().removeAttr("correto");
				$(this).parent().addClass("incorreto");
			}
		})					
		
		var resultado = acertadas/certas*100;
		           
		/* MARCANDO OS FIELDSET */
		$(questao).find("fieldset").each(function() {
			/**
			*
			* Criando um resultado parcial para o fieldset atual. O resultado será comparado posteriormente.
			*
			*
			**/
			var resultadoParcialCertas = 0;
			var resultadoParcialAcertadas = 0;
			
			$(this).find("input").each(function() {
                if($(this).val() == "certo"){
					resultadoParcialCertas++;				
				}
            });
			
			$(this).find("input:checkbox:checked").each(function() {
                if($(this).parent().attr("class") == "correto"){
					resultadoParcialAcertadas++;				
				}
            });
			
			$(this).find("input:checkbox:checked").each(function() {
                if($(this).parent().attr("class") == "incorreto"){
					resultadoParcialAcertadas--;				
				}
            });
						
			//Pegando o Nó do FieldSET ATUAL
			var noDaQuestao = $(this);
			//Adicionando Classe incorreto para cada resposta checada que estiver errada						
			$(this).find("input:checkbox:checked").each(function() {
				if($(this).parent().attr("class") != "correto"){
					$(noDaQuestao).find("input:checkbox:checked").each(function() {
						$(this).parent().removeAttr("class");
						$(this).parent().addClass("incorreto");			
					});
					
					$(noDaQuestao).find("input:checkbox:not(:checked)").each(function() {
						$(this).parent().removeAttr("class");
						$(this).parent().addClass("incorreto");			
					});
					
					return false;
				}						
			});
			
			//Adicionando Classe incorreto para cada resposta não-checada que estiver errada
			$(this).find("input:checkbox:not(:checked)").each(function() {
				if($(this).parent().attr("class") != "correto"){
					$(noDaQuestao).find("input:checkbox:checked").each(function() {
						$(this).parent().removeAttr("class");
						$(this).parent().addClass("incorreto");			
					});
					
					$(noDaQuestao).find("input:checkbox:not(:checked)").each(function() {
						$(this).parent().removeAttr("class");
						$(this).parent().addClass("incorreto");			
					});
					
					return false;
				}						
			});
			// Testando Resultado Parcial
			// SE todas as alternativas foram preenchidas corretamente
			// Aplica a class correto pra todas as respostas daquele Fieldset			
			if(resultadoParcialCertas == resultadoParcialAcertadas){
				$(noDaQuestao).find("input:checkbox").each(function() {
					$(this).parent().removeAttr("class");
					$(this).parent().addClass("correto");			
				});
				
				$(noDaQuestao).find("input:checkbox:not(:checked)").each(function() {
					$(this).parent().removeAttr("class");
					$(this).parent().addClass("correto");			
				});
			}
						
					
		});
		//Testando se a média das respostas corretas é maior ou igual a 70
		if(resultado >= 70){
			tentativa++;
			$(questao).attr("alt",tentativa);						
			$.fancybox({
				'autoScale'			: true,
				'width'				: 1000,
				'height'			: 500,
				content: "<h3 class='centralizado'>Parábens você obteve "+resultado+"% de respostas corretas.<br> \
			Número de suas tentativas: #"+tentativa+"<br/>\
			<img src='layout/Quiz/personagem-satisfacao.jpg' width='211'/><br/>\
			Acertou "+acertadas+" de "+certas+"</h3>"
			});
		}
		else{		
			tentativa++;
			$(questao).attr("alt",tentativa);
			$.fancybox({
				'autoScale'			: true,
				'width'				: 1000,
				'height'			: 500,			
				content: "<h3 class='centralizado'>Tente Novamente"+"<br/>\
			Número de suas tentativas: #"+tentativa+" <br/> \
			<img src='layout/Quiz/personagem-observacao.jpg' width='211'/><br/>\
			Acertou "+acertadas+" de "+certas+"</h3>"
			}); 
		}								
	};
		<!-- FIM VALIDAÇÃO Check -->
// CODIGO PARA IMPRESSAO - funciona apenas no IE //
window.onbeforeprint = function () {
	// criando variavel com codigo onde será listado os links
	var linha_links = "<div class='linha' id='links_linha'><div class='coluna lateral'><br /></div><div class='coluna principal'><h1>Fontes das Imagens</h1><ol id='links_lista'></ol></div></div>"
	// criando a lista de links antes do rodapé
	$("#rodape").parent().before(linha_links);
	// selecionando todas as tags A cujo href comece com http e adicionando na lista de links
	$("a[href^='http:']").each(function(i){
		if ( $(this).attr('id') == 'logo-ufc' || $(this).attr('id') == 'logo-ufcv' ) {
			// evitando colocar os links dos logos de rodape na lista de links
		} else {
			var b = i+1;
			link = $(this).attr("href");
			$(this).append("<span class='link_imagem'> ["+b+"]</span>");
			$("#links_lista").append("<li>"+link+"</li>");
		}
	});
}
window.onafterprint = function () {
	$("#links_linha").remove();
	$(".link_imagem").remove();
}

$(window).load(function(e) {
    $(".audio-html5").each(function(index, element) {
		var caminhoAudio = $(element).find(".audio-path").text();
		var idAudio = $(element).attr("id")
        jwplayer(idAudio).setup({
			width: 580,
			height: 30,
        	file: caminhoAudio
    	});
    });
});