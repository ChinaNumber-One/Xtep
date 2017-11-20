$(".allpro").mouseenter(function(){
	$(".sort-list-box").css("display","block")
})
$(".allpro").mouseleave(function(){
	$(".sort-list-box").css("display","none")
})


$(window).scroll(function(){
	$(".sort-list-box").css("display","none")
})

//验证码
var str="01234567890zxcvbnmasdfghjklqwertyuiop";
function changeyzm(){
	var yzmnum="";
	for(var i=0;i<6;i++){
		yzmnum+=str[getRand(0,36)]
		$(".pic").html(yzmnum)
	}
}
changeyzm();
$(".another").click(function(){
	changeyzm();
})
//$("#yzmpic").focus(function(){
//	changeyzm();
//})
//获取短信验证码 鼠标滑过效果
$(".getmessage").hover(function(){
	$(this).css({
		"color":"orangered",
		"text-decoration":"underline"
	})
},function(){
	$(this).css({
		"color":"#404040",
		"text-decoration":"none"
	})
})

//表单验证

//手机号
var flagtel=null;
$("#tel").blur(function(){
	var reg=/^1[3,5,7,8]\d{9}$/
	var str=$(this).val()
	if(reg.test(str)){
		flagtel=true;
		$("#tels").html("√").css("color","green")
	}else{
		flagtel=false;
		$("#tels").html("×").css("color","red")
	}
	return flagtel;
})
//图片验证码
var flagyzm=null;
$("#yzmpic").blur(function(){
	if($(this).val().toLowerCase()==$(".pic").html()){
		flagyzm=true;
		$("#yzmpics").html("√").css("color","green")
	}else{
		flagyzm=false;
		$("#yzmpics").html("×").css("color","red")
	}
	return flagyzm;
})
//短信验证码

//邮箱验证
var flagemail=null;
$("#ema").blur(function(){
	var reg=/^\w+@\w+(\.\w+)+$/;
	var str=$(this).val();
	if(reg.test(str)){
		flagemail=true;
		$("#emas").html("√").css("color","green")
	}else{
		flagemail=false;
		$("#emas").html("×").css("color","red")
	}
	return flagemail;
})
//密码
var flagpwd=null;
$("#pwd").blur(function(){
	var reg=/^.{6,20}$/;
	var str=$(this).val();
	if(reg.test(str)){
		flagpwd=true;
		$("#pwds").html("√").css("color","green")
	}else{
		flagpwd=false;
		$("#pwds").html("×").css("color","red")
	}
	return flagpwd;
})
//密码强度判断
$("#pwd").keyup(function(){
	var regn = /\d+/; //有数字
	var regs = /[a-z]+/i; //有字母
	var regt = /[\W_]+/;//有特殊字符
	var _regn = /^\d+$/; //只有数字
	var _regs = /^[a-z]+$/i; //只有字母
	var _regt = /^[\W_]+$/;//只有特殊字符
	var str=$(this).val();
	if(regs.test(str)&&regn.test(str)&&regt.test(str)){
		$("#pwdbottom").css("width","86")
	}else if(_regn.test(str) || _regs.test(str) || _regt.test(str)){
		$("#pwdbottom").css("width","25")
	}else{
		$("#pwdbottom").css("width","58")
	}
	if($(this).val()==""){
		$("#pwdbottom").css("width","25")
	}
})
//确认密码
var flagrepwd=null;
$("#repwd").blur(function(){
	console.log($(this).val());
	console.log($("#pwd").val())
	if($(this).val()==$("#pwd").val()){
		flagrepwd=true;
		$("#repwds").html("√").css("color","green")
	}else{
		flagrepwd=false;
		$("#repwds").html("×").css("color","red")
	}
	return flagrepwd
})

//点击注册按钮
$("#registerbtn").click(function(){
	if(flagtel&&flagyzm&&flagemail&&flagpwd&&flagrepwd&&$("#isagree").attr("checked")){
		var json={
			"username":$("#tel").val(),
			"useremail":$("#ema").val(),
			"userpwd":$("#pwd").val()
		}
		setCookie("user",JSON.stringify(json),1)
		
		alert("注册成功")
		location.href="login.html"
	}else{
		alert("填写信息有误，请重新核对并填写")
	}
	
})


//setCookie
