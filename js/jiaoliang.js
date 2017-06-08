$(function(){
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
	$(".btn_finsh").click(function(){
		if($(".control_zhuan>input").val()==""){
			alert("请输入数量")
		}else if($(".control_yan1>input").val()==""){
			alert("请输入验证码")
		}else if($("#tu>input").val()==""){
			alert("请输入图形验证码")
		}else{
			setTimeout(function(){
				$(".zhifu").removeClass("non").addClass("show")
				$(".numb_box").css("zIndex",10)
				$(".black_blc").show();
				$(".ftc_wzsf").show();
			},300)
		}
	})
	
	$(".close").click(function(){
		$(".zhifu").removeClass("show").addClass("non")
		$(".black_blc").hide();
		$(".ftc_wzsf").hide();
		$(".numb_box").css("zIndex",-1)
		});
		//数字显示隐藏
		$(".xiaq_tb").click(function(){
		$(".numb_box").slideUp(500);
		});
		$(".mm_box").click(function(){
		$(".numb_box").slideDown(500);
	});
	//----
	var i = 0;
	$(".nub_ggg li a").click(function(){
		i++
		if(i<6){
			$(".mm_box li").eq(i-1).addClass("mmdd");
		}else{
			$(".mm_box li").eq(i-1).addClass("mmdd"); 
			setTimeout(function(){
				location.href="jiaolian_success.html"; 
			},500);
		}
	});
	$(".nub_ggg li .del").click(function(){
		if(i>0){
			i--
			$(".mm_box li").eq(i).removeClass("mmdd");
			i==0;
		}
	});
})
