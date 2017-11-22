$(".allpro").mouseenter(function(){
	$(".sort-list-box").css("display","block")
})
$(".allpro").mouseleave(function(){
	$(".sort-list-box").css("display","none")
})

$(window).scroll(function(){
	$(".sort-list-box").css("display","none")
})


window.onload=function(){
		likearr=[];
		if(getCookie("like")){
			var likecookie=JSON.parse(getCookie("like"));
			likearr=likecookie;
//			console.log(typeof likecookie)
			for(var i=0;i<likearr.length;i++){
				if($(".nolike")){
					$(".nolike").css("display","none")
				}
				$(`<li><img src="fdj/${likearr[i].src}"/><p>${likearr[i].name}</p><span>￥${likearr[i].price}<a href="javascript:;" style="float:right;color: #0086B3;display: block;" class="dellike">删除</a></span></li>`).appendTo("#likebox ul");
			}
		}
}
//点击登录
$("#loginbtn").click(function(){
	if(getCookie("user")){
		var cookie=JSON.parse(getCookie("user"));
		if($("#uName").val()==cookie.username||$("#uName").val()==cookie.useremail&&$("#uPwd").val()==cookie.userpwd){
			if($("#zdlogin").prop("checked")){
				setCookie("remember","1",1)
				alert("自动登录")
			}
			location.href="index.html";
			setCookie("islogin","1")
		}else{
			alert("账号或密码错误！")
		}
	}else{
		alert("该手机号还未注册，请注册后再登录！")
	}
	
})
$("#zdlogin").click(function(){
//	$(this).prop("checked","true")
	console.log($(this).prop("checked"))
})
//
$("#tiao").click(function(){
	location.href="register.html"
})
$(".check p").eq(1).click(function(){
	location.href="changemima.html"
})
