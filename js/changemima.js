$(".sort-list-box").css("display","none")
$(".allpro").mouseenter(function() {
	$(".sort-list-box").css("display", "block")
})
$(".allpro").mouseleave(function() {
	$(".sort-list-box").css("display", "none")
})

$(window).scroll(function() {
	$(".sort-list-box").css("display", "none")
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
var newjson={};
var mesyzm="";
$(".getms").click(function(){
	if(getCookie("user")){
		if(JSON.parse(getCookie("user")).username==$("#tel").val()){
			for(var i=0;i<6;i++){
				mesyzm+=getRand(0,9);
			}
			$(this).html(mesyzm)
			newjson={
				"username":$("#tel").val(),
				"useremail":JSON.parse(getCookie("user")).useremail
			}
		}else{
			alert("您的手机号还未注册，请先注册！")
		} 
	}else{
		alert("您的手机号还未注册，请先注册！")
	}

})
$("#send_msg").click(function(){
	console.log(newjson)
	if($("#dr_check_phone").val()==mesyzm){
		$(".news").eq(0).css("display","none")
		$(".news").eq(1).css("display","block")
	}else{
		alert("验证码错误！")
	}
})

			var flagpwd=null;
			$("#newmima").blur(function(){
				var reg=/^.{6,16}$/;
				var str=$(this).val();
				if(reg.test(str)){
					flagpwd=true;
				}else{
					flagpwd=false;
				}
				return flagpwd;
			})
			var flagrepwd=null;
			$("#renewmima").blur(function(){
				if($(this).val()==$("#newmima").val()){
					flagrepwd=true;
				}else{
					flagrepwd=false;
				}
				return flagrepwd
			})

$("#writepwd").click(function(){
			if(flagpwd&&flagrepwd){
				newjson.userpwd=$("#newmima").val()
				setCookie("user",JSON.stringify(newjson),1)
				$(".news").eq(1).css("display","none")
				$(".news").eq(2).css("display","block")
			}else{
				alert("您的输入不符合规范，或者两次输入密码不一致")
			}
			
			
})
