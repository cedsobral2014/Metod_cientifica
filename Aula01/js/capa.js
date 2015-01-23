/**
*
*	Author : Damis Iuri Garcia do Vale
*
**/
Browser = function(){
		
			this.getNavegador = function(){
					if($.browser.webkit){
						return "GOOGLE CHROME";
					}
					
					if($.browser.mozilla){
						return "FIRE FOX";
					}
					
					if($.browser.msie){
						return "INTERNET EXPLORER";
					}
				}
			
		}    
		
		
		
		navegador = new Browser();
		/*console.log("Navegador:"+ navegador.getNavegador())			
		console.log("Versão do Navegador:"+$.browser.version)*/				
		
		$(document).ready(function(){
			
			if($.browser.msie && $.browser.version < 9.0){
				$("#capa_bg").css("background-image","url(imagens/capa_cetrede.jpg)");				
				$("#capa_bg").fadeIn(1500, function(){
					$("#capa_titulo,#capa_professores,#capa_topicos").show('slide', { direction: 'right' }, 1000);
				});
			}
			else{
				$("#capa_bg").css("background-image","url(imagens/capa_cetrede-b.jpg)");
				$("#capa_bg").fadeIn(1500, function(){
					$("#capa_titulo,#capa_professores,#capa_topicos").show('slide', { direction: 'right' }, 1000);
					$("#obj-02").show('slide',{direction: "down"},1000);			
				});
				$("#obj-01").delay(2500).show('slide',{direction: "down"},1200);
				$("#obj-03").delay(2900).fadeIn(1000).animate({opacity:0.2},1300,"easeOutQuad");			
			}
			
			$("#obj-03").hover(
				function(){
					$(this).animate({opacity:1},1000,"easeInQuad");
				},
				function(){
					$(this).animate({opacity:0.2},1300,"easeOutQuad");			
				}
			);
			
		});		