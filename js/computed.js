document.documentElement.style.fontSize=innerWidth/16+"px";
onresize=function(){
	document.documentElement.style.fontSize=innerWidth/16+"px";
}
//var off=true;
//var countdown=60; 
//function settime(obj,lan) { 
//	
//  if (countdown == 0) { 
//  	off=true;
//      $(obj).css("background","#f9752b")  
//      obj.innerHTML=lan; 
//      countdown = 60; 
//      return;
//  } else { 
//  	
//      $(obj).css("background","#929292")  
//      obj.innerHTML="重新发送(" + countdown + ")"; 
//      countdown--; 
//  } 
//setTimeout(function() { 
//  settime(obj,lan) }
//  ,1000) 
//}
//$(".sendYan button").bind("touchend",function(){
//	if(off)settime(this,"获取手机验证码"),off=false;
//})
//$(".send").bind("touchend",function(){
//	if(off)settime(this,'发送验证码'),off=false;
//})
