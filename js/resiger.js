$(function(){
	var off=true;
	var countdown=60; 
	function settime(obj,lan) { 
	    if (countdown == 0) { 
	    	off=true;
	        $(obj).css("background","#f9752b")  
	        obj.innerHTML=lan; 
	        countdown = 60; 
	        return;
	    } else { 
	    	
	        $(obj).css("background","#929292")  
	        obj.innerHTML="重新发送(" + countdown + ")"; 
	        countdown--; 
	    } 
	setTimeout(function() { 
	    settime(obj,lan) }
	    ,1000) 
	}
	
	$(".send").bind("touchend",function(){
		if($(".user").val()==""){
			alert("请填写用户名")
		}else if($(".pass").val()==""){
			alert("请填写支付密码")
		}else if($(".ispass").val()==""){
			alert("请再次输入你的支付密码")
		}else if($(".pass").val()!=$(".ispass").val()){
			alert("你俩次输入的支付密码不一致")
			$(".ispass")[0].focus();
		}else if($(".phone").val()==""){
			alert("请填写手机号")
		}else if(!(/^1(3|4|5|7|8)\d{9}$/.test($(".phone").val()))){
			alert("不存在的手机格式")
		}else{
			if(off)settime(this,'发送验证码'),off=false;
		}
	})
	$("div button").click(function(){
		if($(".user").val()==""||$(".pass").val()==""||$(".ispass").val()==""||$(".phone").val()==""||$(".check_code").val()==""||$(".tu_check_code").val()==""||$(".tuijian").val()==""||$(".jiedian").val()=="") {
			alert("不能有空填项！")
		}else if($(".pass")[0].value.length!=6){
			alert("您的支付密码必须是6位")
		}else if($(".ispass").val()!=$(".pass").val()){
			alert("你俩次输入的支付密码不一致")
		}else{
			alert("注册成功")
			location.href="index.html"
		}
	})
})
