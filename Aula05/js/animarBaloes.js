// JavaScript Document
$(document).ready(function() {
	$(".pizza").each(function() {
		$(this).find(".container_pizza").each(function() {
			if($(this).attr("id") == "conteudo-1"){
				$(this).fadeIn("now");
			}
		});
	})
	$(".pizza").each(function() {
        $(this).find(".container_pizza>.coteudo_pizza_wrapper>.conteudo_pizza>#conteudo-fechar").click(function(){
				$(this).parent().parent().parent().fadeOut("now");
			})
    });
	$(".pizza").each(function() {
		$(this).find(".titulo_canvas>ul>li").each(function(){
			$(this).click(function(){
				switch ($(this).attr("id")){
				case "titulo-1":
					$(this).parent().parent().parent().find(".container_pizza").each(function() {
							$(this).fadeOut("slow")   
                    });
					$(this).parent().parent().parent().find("#conteudo-1").is(function(){
							$(this).fadeIn("slow") 
					})
				break;
				case "titulo-2":
				$(this).parent().parent().parent().find(".container_pizza").each(function() {
							$(this).fadeOut("slow")   
                    });
				$(this).parent().parent().parent().find("#conteudo-2").is(function(){
							$(this).fadeIn("slow") 
					})
				break;
				case "titulo-3":
				$(this).parent().parent().parent().find(".container_pizza").each(function() {
							$(this).fadeOut("now")   
                    });
				$(this).parent().parent().parent().find("#conteudo-3").is(function(){
							$(this).fadeIn("now") 
					})
				break;
				case "titulo-4":
				$(this).parent().parent().parent().find(".container_pizza").each(function() {
							$(this).fadeOut("now")   
                    });
				$(this).parent().parent().parent().find("#conteudo-4").is(function(){
							$(this).fadeIn("now") 
					})
				break;
				case "titulo-5":
				$(this).parent().parent().parent().find(".container_pizza").each(function() {
							$(this).fadeOut("now")   
                    });
				$(this).parent().parent().parent().find("#conteudo-5").is(function(){
							$(this).fadeIn("now") 
					})
				break;
				case "titulo-6":
				$(this).parent().parent().parent().find(".container_pizza").each(function() {
							$(this).fadeOut("now")   
                    });
				$(this).parent().parent().parent().find("#conteudo-6").is(function(){
							$(this).fadeIn("now") 
					})
				break;
				default:
				alert("error Animar Balões");
				}
			})
		})
	})
})