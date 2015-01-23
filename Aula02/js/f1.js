// JavaScript Document
//SCRIPT F1
//Autor: Damis Garcia
//
$(document).ready(function() {
    //INICIANDO SCRIPT
 /*
 *	
 *	ARMAZENANDO CONSTANTES
 *
 */
	tipoDeResposta()
});	
/* FUNCÔES */
function tipoDeResposta(){
	$(document).find("input").each(function() {
        $(this).focusout(function() {
			$(this).removeClass('aguardando_resposta')
        })
		.focusin(function(){
			 $(this).addClass('aguardando_resposta')
			});
	})
}

function Commit(exercicio){
		var newWindow = window.open('','')
		/*Incluindo Bibliotecas Externas*/
		newWindow.document.write("<script src='lib/jquery.js' type='text/javascript'></script>")
		newWindow.document.write("<style> input,fieldset{border:none;} input{text-align:center;font-weight:bold;}</style>")
		/*Janela Recebendo Doc*/
		
		$("input").each(function() {
				/* TRATAMENTO PARA INPUTS DO TIPO TEXTO */
				if($(this).attr("type") == "text"){
					$(this).attr("value",$(this).val())
				}
				if($(this).attr("value") == "certo" && $(this).attr("type") == "radio"){
					$(this).attr("checked","checked");
				}				
        });
		
		$("textarea").each(function(index, element) {
            		$(this).text($(this).val());
        	});	
		
		newWindow.document.write($("#"+exercicio).parent().html())
		newWindow.window.print() 
}
/*function desvioPadrao()
{
	//INICIA A MATRIZ COM OS ELEMENTOS
	var elementos = new Array()
	//DETERMINA O NÙMERO DE ELEMENTOS PARA HÀ MATRIZ
	aux = window.prompt("Passe a Quantidade de Elementos a ser Calculado:",'')
	ne = parseInt(aux);
	//SE O NÙMERO DE ELEMENTO FOR 1 EXECUTA ESTE BLOCO
	if (ne == 1){
		myResult=window.open('','','width=400,height=300');
		myResult.document.write("Resultado: 0.0");
		myResult.alert("Você só passou 1 elemento.")
		myResult.focus();
		}
	else{
		for(i=0;i<=ne-1;i++){
			//GUARDANDO ELEMENTOS NA MATRIZ
			pos = i + 1
			aux = window.prompt("Passe o valor do Elemento "+pos,'');
			elementos[i] = parseFloat(aux)
		}
		//Calculando a Média Aritimética
		var somatorio = 0
		var resultado = 0
		var MA = 0;
		for(i=0;i<elementos.length;i++){
			MA  += elementos[i]
		}
		MA = MA/elementos.length
		//Calculando o Desvio Padrão
		for(i=0;i<elementos.length;i++){
			resultado = elementos[i] - MA;
			somatorio += resultado * resultado;
		}
		resultadoFinal = Math.sqrt( (1/(elementos.length -1))*somatorio); 
		myResult = window.open('','','width=400,height=300');
		myResult.document.write("Média Aritmética: "+ MA+"<br>");
		myResult.document.write("Desvio Padrão: "+ resultadoFinal+"<br>");
		myResult.focus();
	}
}*/