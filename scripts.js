$(function(){
	
	$("h1").append(" pussy");
	$("p").text("ballsy").click(function(){
		$(this).fadeOut(2000);
		$("h1").append("ballsy");
		});
	
	$(".input_button").css("margin", "200px").css("background-color", "red");
	
	$("button.submit").click(function(){
		$("h1").css("background-color", "red");
		});
	
	
});
