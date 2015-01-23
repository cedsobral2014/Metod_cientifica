// JavaScript Document
$(document).ready(function() {
	//VAR GLOBAIS
	var idForma = new Array();
	var idCanvas = new Array();
	var Cor = new Array(2)
	var angulo = new Array(5);
	var sizeTitulo = new Array();
	var PIRad = 180;
	var PI = Math.PI;
	var bool = 1;
	//PASSANDO CORES
	Cor[0] = getHightLight();
	Cor[1] = getMiddleLight();
	Cor[2] = getHightLight();
	Cor[3] = getMiddleLight();
	Cor[4] = getHightLight();
	Cor[5] = getMiddleLight();
	
	//Passando os Angulos
	angulo[0] = 180;
	angulo[1] = 120;
	angulo[2] = 90;
	angulo[3] = 72;
	angulo[4] = 60;
	var i = 0;
		$(".pizza").each(function() {
			var nTitulo = $(this).find("li").size();
			sizeTitulo[i] = nTitulo
			idForma[i] = $(this).find("canvas").attr("id");
			var anguloEscolhido = 0;
			
			
			switch(nTitulo){
				case 2 :
				anguloEscolhido = angulo[0]
				break;
				case 3 :
				anguloEscolhido = angulo[1]
				break;
				case 4 :
				anguloEscolhido = angulo[2]
				break;
				case 5 :
				anguloEscolhido = angulo[3]
				break;
				case 6 :
				anguloEscolhido = angulo[4]
				break;
				default :
				alert("Error! ;( ")
				break;
			}
			//DETECTANDO NAVEGAROR E APLICANDO O BACKGROUND	
	if (navDetected()<=8){
			if(nTitulo==2){
				$(this).addClass("pizzaIe7_2");
				}
			else if(nTitulo==3){
				$(this).addClass("pizzaIe7_3");
				}
			else if(nTitulo==2){
				$(this).addClass("pizzaIe7_4");
				}
			else if(nTitulo==4){
				$(this).addClass("pizzaIe7_4");
				}
			else if(nTitulo==5){
				$(this).addClass("pizzaIe7_5");
				}
			if(nTitulo==6){
				$(this).addClass("pizzaIe7_6");
				}
		}
		
	else{
			var Ini = 0;
			var Fim = 0;
			//CRIANDO VÁRIOS ARCOS
			for(n=0;n<=nTitulo;n++){
				Ini = Ini;
				Fim = Fim+anguloEscolhido;
				var corEscolhida = null;
				criarForma(idForma[i],Ini,Fim,Cor[n],nTitulo);
				//Guadando valor do próximo começo
				Ini = Fim;
				}
			}
			i++;
        });
			//Organizando os Links
			organizarTexto();
	})

//FUNÇÕES

//DETECTANDO NAVEGAROR IE8 ou IE7
function navDetected(){
	return jQuery.browser.version;
	}

function criarForma(Objeto,Ini,Fim,cor,nTitulo){
//PARÂMETROS Objeto:Á classe que ele está trabalhando
	$("#"+Objeto).drawArc({
		layer: true,
		strokeStyle:cor,
		strokeWidth: 140,
		shadowColor:getLowerLight(),
		shadowBlur:3,
		start:Ini,
		end:Fim,
		x: 200,
		y: 150,
		radius: 70.8
	})
  }

//ECOLHENDO AS CORES
function getHightLight(){
	return $("#hightlight").css("background-color");
	}
function getMiddleLight(){
	return $("#middlelight").css("background-color");
	}
function getLowerLight(){
	return $("#lowerlight").css("background-color");
	}
//FUNÇÂO PEGAR X E Y DOS LINKS
function organizarTexto(){
j=1
$(".pizza").each(function() {
	nTitulo = $(this).find("li").size();
        if(nTitulo==2){
		  $(this).find("li").css("font-size","15pt");
		  //Posição dos Links
		  $(this).find("#titulo-1").css("left","170px");
		  $(this).find("#titulo-2").css("left","10px");
		  //Posição dos Balões
		  $(this).find("#conteudo-1").css("left","20px");
		  $(this).find("#conteudo-1").css("top","-5px");
		  
		  $(this).find("#conteudo-2").css("left","-100px");
		  $(this).find("#conteudo-2").css("top","-5px");
		  
		  if(navDetected()<=7){
		  $(this).find("li").css("left","+=95px")
		  $(this).find("li").css("top","0px")
		  
		  $(this).find("#conteudo-1").css("left","120px");
		  $(this).find("#conteudo-2").css("left","-60px");
			  }
			}
		else if(nTitulo==3){
		  $(this).find("li").css("font-size","14pt");
		  //Posição dos Links
		  $(this).find("#titulo-1").css("top","-20px");
		  $(this).find("#titulo-1").css("left","160px");
		  
		  $(this).find("#titulo-2").css("top","80px");
		  $(this).find("#titulo-2").css("left","90px");
		  
		  $(this).find("#titulo-3").css("top","-20px");
		  $(this).find("#titulo-3").css("left","10px");
		  //Posição dos Balões
		  $(this).find("#conteudo-1").css("left","20px");
		  $(this).find("#conteudo-1").css("top","-25px");
		  
		  $(this).find("#conteudo-2").css("left","-20px");
		  $(this).find("#conteudo-2").css("top","70px");
		  
		  $(this).find("#conteudo-3").css("left","-100px");
		  $(this).find("#conteudo-3").css("top","-25px");
		  
		  if(navDetected()<=7){
		  $(this).find("li").css("left","+=95px")
		  $(this).find("li").css("top","+=0px")
		  
		  $(this).find("#conteudo-1").css("left","140px");
		  $(this).find("#conteudo-2").css("left","40px");
		  $(this).find("#conteudo-3").css("left","-60px");
			  }
			}
		else if(nTitulo==4){
			//Posição dos Links
		   $(this).find("li").css("font-size","12pt");
		  $(this).find("#titulo-1").css("top","-40px");
		  $(this).find("#titulo-1").css("left","150px");
		  
		  $(this).find("#titulo-2").css("top","60px");
		  $(this).find("#titulo-2").css("left","150px");
		  
		  $(this).find("#titulo-3").css("top","60px");
		  $(this).find("#titulo-3").css("left","20px");
		  
		  $(this).find("#titulo-4").css("top","-40px");
		  $(this).find("#titulo-4").css("left","25px");
		  
		  //Posição dos Balões
		  $(this).find("#conteudo-1").css("left","20px");
		  $(this).find("#conteudo-1").css("top","-50px");
		  
		  $(this).find("#conteudo-2").css("left","20px");
		  $(this).find("#conteudo-2").css("top","50px");
		  
		  $(this).find("#conteudo-3").css("left","-100px");
		  $(this).find("#conteudo-3").css("top","50px");
		  
		  $(this).find("#conteudo-4").css("left","-100px");
		  $(this).find("#conteudo-4").css("top","-50px");
		  
		  if(navDetected()<=7){
		  		$(this).find("li").css("left","+=95px")
				$(this).find("li").css("top","+=0px")
				
				$(this).find("#conteudo-1").css("left","120px");
			 	$(this).find("#conteudo-2").css("left","120px");
			  	$(this).find("#conteudo-3").css("left","-40px");
				$(this).find("#conteudo-4").css("left","-40px");
			  }
		  
			}
		else if(nTitulo==5){
			//Posição dos Links
		  $(this).find("li").css("font-size","13pt");
		  $(this).find("li").css("font-family","Arial, Helvetica, sans-serif");
		  $(this).find("#titulo-1").css("top","-60px");
		  $(this).find("#titulo-1").css("left","148px");
		  
		  $(this).find("#titulo-2").css("top","30px");
		  $(this).find("#titulo-2").css("left","170px");
		  
		  $(this).find("#titulo-3").css("top","105px");
		  $(this).find("#titulo-3").css("left","95px");
		  
		  $(this).find("#titulo-4").css("top","30px");
		  $(this).find("#titulo-4").css("left","10px");
		  
		  $(this).find("#titulo-5").css("top","-60px");
		  $(this).find("#titulo-5").css("left","30px");
		  
		  //Posição dos Balões
		  
		  $(this).find("#conteudo-1").css("left","20px");
		  $(this).find("#conteudo-1").css("top","-70px");
		  
		  $(this).find("#conteudo-2").css("left","30px");
		  $(this).find("#conteudo-2").css("top","20px");
		  
		  $(this).find("#conteudo-3").css("left","-20px");
		  $(this).find("#conteudo-3").css("top","100px");
		  
		  $(this).find("#conteudo-4").css("left","-120px");
		  $(this).find("#conteudo-4").css("top","30px");
		  
		  $(this).find("#conteudo-5").css("left","-120px");
		  $(this).find("#conteudo-5").css("top","-70px");
		  
		  if(navDetected()<=7){
		  		$(this).find("li").css("left","+=95px")
				$(this).find("li").css("top","+=0px")
				
				$(this).find("#conteudo-1").css("left","120px");
			 	$(this).find("#conteudo-2").css("left","120px");
			  	$(this).find("#conteudo-3").css("left","30px");
				$(this).find("#conteudo-4").css("left","-40px");
				$(this).find("#conteudo-5").css("left","-40px");
			  }
		  
			}
		else if(nTitulo==6){
		  $(this).find("li").css("font-size","11pt");
		  //Posição dos Links
		  $(this).find("#titulo-1").css("top","-70px");
		  $(this).find("#titulo-1").css("left","145px");
		  
		  $(this).find("#titulo-2").css("top","20px");
		  $(this).find("#titulo-2").css("left","170px");
		  
		  $(this).find("#titulo-3").css("top","95px");
		  $(this).find("#titulo-3").css("left","150px");
		  
		  $(this).find("#titulo-4").css("top","95px");
		  $(this).find("#titulo-4").css("left","35px");
		  
		  $(this).find("#titulo-5").css("top","20px");
		  $(this).find("#titulo-5").css("left","0px");
		  
		  $(this).find("#titulo-6").css("top","-70px");
		  $(this).find("#titulo-6").css("left","30px");
		  
		  //Posição dos Balões
		  
		  $(this).find("#conteudo-1").css("left","20px");
		  $(this).find("#conteudo-1").css("top","-80px");
		  
		  $(this).find("#conteudo-2").css("left","30px");
		  $(this).find("#conteudo-2").css("top","5px");
		  
		  $(this).find("#conteudo-3").css("left","20px");
		  $(this).find("#conteudo-3").css("top","80px");
		  
		  $(this).find("#conteudo-4").css("left","-80px");
		  $(this).find("#conteudo-4").css("top","80px");
		  
		  $(this).find("#conteudo-5").css("left","-120px");
		  $(this).find("#conteudo-5").css("top","0px");
		  
		  $(this).find("#conteudo-6").css("left","-130px");
		  $(this).find("#conteudo-6").css("top","-80px");
		  
		   if(navDetected()<=7){
		  		$(this).find("li").css("left","+=100px")
				$(this).find("#conteudo-1").css("left","120px");
			 	$(this).find("#conteudo-2").css("left","120px");
			  	$(this).find("#conteudo-3").css("left","90px");
				$(this).find("#conteudo-4").css("left","-20px");
				$(this).find("#conteudo-5").css("left","-20px");
				$(this).find("#conteudo-5").css("top","+=10px");
				$(this).find("#conteudo-6").css("left","+=120px");
			  }
			}
			if(navDetected()==8){
				$(this).each(function() {
                    $(this).css("background-position","left")
                });
				
				$(this).find("li").each(function() {
                	$(this).css("left","+=47px")
					$(this).css("top","+=7px")
            		});
				$(this).find(".container_pizza").each(function() {
                    $(this).css("left","+=45px")
                });
				}
			j++;
		});
	}