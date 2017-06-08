$(function(){
	$(".responese div").bind("touchend",function(){
		$(this).addClass("act").siblings().removeClass("act")
	})
	var n=true;
	$(".slide_menu").bind("touchend",function(e){
		if(n){
			$(this).find(".son").hide();
			n=false;
		}else{
			$(this).find(".son").show();
			n=true;
		}
	})
})
