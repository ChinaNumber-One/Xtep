$(".allpro").mouseenter(function(){
	$(".sort-list-box").css("display","block")
})
$(".allpro").mouseleave(function(){
	$(".sort-list-box").css("display","none")
})

$(window).scroll(function(){
	$(".sort-list-box").css("display","none")
})

//点击登录
$("#loginbtn").click(function(){
	var cookie=JSON.parse(getCookie("user"));
	if($("#uName").val()==cookie.username||$("#uName").val()==cookie.useremail&&$("#uPwd").val()==cookie.userpwd){
		location.href="index.html";
	}else{
		alert("账号或密码错误！")
	}
})
//
$("#tiao").click(function(){
	location.href="register.html"
})
