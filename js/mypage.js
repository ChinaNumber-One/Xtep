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
		if(!getCookie("user")||getCookie("islogin")=="0"){
			location.href="login.html"
		}
		if(getCookie("islogin")=="1"||getCookie("remember")){
			var name=JSON.parse(getCookie("user")).username;
			$(".myname").html(name);
			$(".myname").css("display","inline-block")
			$(".exit").css("display","inline-block")
			$(".login").css("display","none")
			$(".register").css("display","none")
			$("#rightshow .right_show_con .rightlogo a em").css({
				"background":"url(img/common-head.png) no-repeat center center",
				"backgroundSize":"32px 32px"
				})
		}
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
				$(`<li><img src="fdj/${likearr[i].mimg}" alt="" /><p>${likearr[i].name}</p><p>￥<span>${likearr[i].price}</span><a href="javascript:;">加入购物车</a></p></li>`).appendTo(".likeul");
			}
		}
}
//left menu
var flagmenu=1;
$(".titleul .last").find("img").click(function(){
	if(flagmenu){
		$(this).parent().parent().next().css("display","none")
		flagmenu=0
	}else{
		$(this).parent().parent().next().css("display","block")
		flagmenu=1;
	}
})
var indexli=0;
var timer=setInterval(function(){
	indexli++;
	$(".myinfo_R_2 ul li").eq(indexli).fadeIn().siblings().fadeOut()
	$(".myinfo_R_2 ul li").eq(indexli).css("display","block").siblings().css("display","none")
	if(indexli==2){
		indexli=-1;
	}
},3000)

