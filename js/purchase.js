$(function(){
	var n=true;
	$(".control_zhuan>input")[0].oninput=function(){
		if(this.value>=1000&&this.value<=10000){
			$(this).next().css("color","#666");
			n=true;
		}else{
			$(this).next().css("color","red");
			n=false;
		}
	}
	
	var off=true;
	var countdown=60; 
	function settime(obj,lan) { 
		
	  if (countdown == 0) { 
	  	off=true;
	      $(obj).css("background","#fff")  
	      obj.innerHTML=lan; 
	      countdown = 60; 
	      return;
	  } else { 
	  	
	      $(obj).css("background","#fff")  
	      obj.innerHTML="重新发送(" + countdown + ")"; 
	      countdown--; 
	  } 
	setTimeout(function() { 
	  settime(obj,lan) }
	  ,1000) 
	}
	
	$(".send_yan").bind("touchend",function(){
		if(off)settime(this,'发送验证码'),off=false;
	})
	$(".account_zhuan>button").bind("touchend",function(){
		if($(".control_zhuan>input").val()==""){
			alert("请输入购买金额")
		}else if($(".control_yan1>input").val()==""){
			alert("请填写手机验证码")
		}else if($("#tu>input").val()==""){
			alert("请填写图形验证码")
		}else if(n){
			setTimeout(function(){
				$(".zhifu").removeClass("non").addClass("show")
				$(".numb_box").css("zIndex",10)
				$(".black_blc").show();
				$(".ftc_wzsf").show();
			},300)
		}
	})
})
