window.onload=function(){
	if(getCookie("user")){
		var name=JSON.parse(getCookie("user")).username;
		$(".myname").html(name);
		$(".myname").css("display","inline-block")
		$(".exit").css("display","inline-block")
		$(".login").css("display","none")
		$(".register").css("display","none")
	}
}
//退出登录
$(".exit").click(function(){
	setCookie("user","")
	location.reload();
})
//top  我的特步
$(".top_right").find("dd").eq(0).mouseenter(function() {
	$(this).find("b").css("display","none")
	$(this).find("ul").css({
		"display": "block"
	});
	$(this).find("i").eq(0).removeClass("icon-moreunfold").addClass("icon-less")
})
$(".top_right").find("dd").eq(0).mouseleave(function() {
	$(this).find("b").css("display","block")
	$(this).find("ul").css({
		"display": "none"
	});
	$(this).find("i").eq(0).removeClass("icon-less").addClass("icon-moreunfold")
})
//top 二维码
$(".top_right").find("dd").eq(2).mouseenter(function() {
	$(this).find("ul").css({
		"display": "block"
	});
	$(this).find("i").eq(1).removeClass("icon-moreunfold").addClass("icon-less")
})
$(".top_right").find("dd").eq(2).mouseleave(function() {
	$(this).find("ul").css({
		"display": "none"
	});
	$(this).find("i").eq(1).removeClass("icon-less").addClass("icon-moreunfold")
})




//顶部导航滑过效果
$(".pros li").mouseenter(function() {
	$li_index=$(this).index();
	$("#nav .nav_box .nav_con_item").css("display","none")
	$("#nav .nav_box .nav_con_item").eq($li_index).css("display","block")
	$(this).css({
		"background": "#f3f3f3"
	}).find("a").css({
		"color": "#c1121d"
	})
})
$(".pros li").mouseleave(function() {
	$li_index=$(this).index();
	$("#nav .nav_box .nav_con_item").eq($li_index).css("display","none")
	$(this).css({
		"background": "#272727"
	}).find("a").css({
		"color": "#fff"
	})
})
$("#nav .nav_box .nav_con_item").mouseenter(function(){
	$(this).css("display","block")
})
$("#nav .nav_box .nav_con_item").mouseleave(function(){
	$(this).css("display","none")
})
//顶部二级菜单字体滑过变色
$(".nav_con_left dl dd a").mouseenter(function(){
	$(this).css("color","orangered")
})
$(".nav_con_left dl dd a").mouseleave(function(){
	$(this).css("color","#000000")
})
//左侧导航动画效果
$(".sort-list li").mouseenter(function(){
	if($(this).index()>=4){
		$(".subCate").css("top",0).eq($(this).index()).css("top",100)
	}
	$(".subCate").css("display","none").eq($(this).index()).css("display","block")
	$(this).css("background-color","#2d2c2c")
})

$(".sort-list li").mouseleave(function(){
	$(".subCate").eq($(this).index()).css("display","none")
	$(this).css("background-color","#272727")
})






//轮播图
var timerlb = setInterval(autoPlay, 3000);
var index = 0;

function autoPlay() {
	index++;
	if(index == 3) {
		index = 0;
	}
	$("#banner ol li").eq(index)
		.addClass("current")
		.siblings()
		.removeClass("current");
	$("#banner ul").eq(0).find("li").eq(index)
		.fadeIn(300)
		.siblings()
		.fadeOut(300);

}
$("#banner").mouseenter(function() {
	clearInterval(timerlb)
	$("#spanL").animate({
		"opacity": "0.4"
	}, 100)
	$("#spanR").animate({
		"opacity": "0.4"
	}, 100)

})
$("#banner").mouseleave(function() {
	$("#spanL").animate({
		"opacity": "0"
	}, 100)
	$("#spanR").animate({
		"opacity": "0"
	}, 100)
	timerlb = setInterval(autoPlay, 3000);

})
$("#spanL").click(function() {
	index--;
	if(index == -1) {
		index = 2;
	}
	$("#banner ol li").eq(index)
		.addClass("current")
		.siblings()
		.removeClass("current");
	$("#banner ul").eq(0).find("li").eq(index)
		.fadeIn(300)
		.siblings()
		.fadeOut(300);
	console.log(index)

})
$("#spanR").click(function() {
	index++;
	if(index == 3) {
		index = 0;
	}
	$("#banner ol li").eq(index)
		.addClass("current")
		.siblings()
		.removeClass("current");
	$("#banner ul").eq(0).find("li").eq(index)
		.fadeIn(300)
		.siblings()
		.fadeOut(300);

})
//鼠标滑过ol 切换图
for(let i = 0; i < $("#banner .ban_con ol li").size(); i++) {
	$("#banner .ban_con ol li").eq(i).click(function() {
		$(this).addClass("current").siblings().removeClass("current");
		$("#banner ul").eq(0).find("li").eq(i).fadeIn(300).siblings().fadeOut(300);
	})
}
//rightshowbg
$("#rightshow").hover(function() {
	$(".rightshowbg").animate({
		"left": 0
	}, 300)
}, function() {
	$(".rightshowbg").animate({
		"left": 34
	}, 300)
})
$(window).resize(function() {
	$(".right_show_con").animate({
		"top": (window.innerHeight - $(".right_show_con").outerHeight()) / 2
	}, 10)
	$(".floatBar").animate({
		"top": (window.innerHeight - $(".floatBar").outerHeight()) / 2
	}, 10)
})
//items
$(".shadow").hover(function() {
	$(this).animate({
		"top": -2,
	}, 200)
	$(this).css({
		"boxShadow": "0px 1px 10px 1px #000000",
		"position":"relative"
	})
}, function() {
	$(this).animate({
		"top": 0,
	}, 200)
	$(this).css({
		"boxShadow": "0px 0px 0px 0px #fff",
		"position":"none"
	})
})
//公告切换按钮
$(".step").find("a").eq(1).click(function() {
	$liw = parseFloat($(".newsbox").css("left"));
	if($liw <= -510) {
		$(".newsbox").css({
			"left": -510
		})
	} else {
		$(".newsbox").animate({
			"left": ($liw - 255)
		}, 300)
	}

})
$(".step").find("a").eq(0).click(function() {
	$liw = parseFloat($(".newsbox").css("left"));
	if($liw >= 0) {
		$(".newsbox").css({
			"left": 0
		})
	} else {
		$(".newsbox").animate({
			"left": ($liw + 255)
		}, 300)
	}

})
$(".step").find("a").mouseenter(function() {
	$(this).find("i").css({
		"color": "orangered"
	})
})
$(".step").find("a").mouseleave(function() {
	$(this).find("i").css({
		"color": "#000"
	})
})
//ggLB
var timergglb = setInterval(gglb, 2000);
$index = 0;

function gglb() {
	$index++;
	if($index == 4) {
		$index = 0;
	}
	$(".focuslb .pic").animate({
		"left": -$index * 253
	})

}
//gglb L R btn
$(".focuslb").hover(function() {
	$(this).find("span").animate({
		"opacity": 1
	}, 300)
	clearInterval(timergglb)
}, function() {
	$(this).find("span").animate({
		"opacity": 0
	}, 300)
	timergglb = setInterval(gglb, 2000);
})
$(".focuslb").find("span").hover(function() {
	$(this).css({
		"backgroundColor": "#333"
	})
}, function() {
	$(this).css({
		"backgroundColor": "#fff"
	})
})
$(".gglbL").click(function() {
	gglb();
})
$(".gglbR").click(function() {
	$index--;
	if($index == -1) {
		$index = 3;
	}
	$(".focuslb .pic").animate({
		"left": -$index * 253
	});
})
//吸顶
var flag = false;
$(window).scroll(function() {
	$scrolltop = $(document).scrollTop();
	if($scrolltop >= 841) {
		flag = true;
		$("#nav").css({
			"position": "fixed",
			"top": "0",
			"zIndex": "1000"
		})
		$(".sort-list-box").css({
			"display": "none"
		})
	} else {
		flag = false;
		$("#nav").css({
			"position": ""
		})
		$(".sort-list-box").css({
			"display": "block"
		})
	}
})
	$(".allpro").hover(function() {
		if(flag){
			$(".sort-list-box").css({
				"display": "block"
			})
		}
	}, function() {
		if(flag){
			$(".sort-list-box").css({
				"display": "none"
			})
		}
	})


//选项卡 男女装切换
for(let i=0;i<$(".tab-item").size();i++){
	$(".tab-item").eq(2*i+1).mouseenter(function(){
		$(this).css({
			"color": "#d2050a",
	  		"border-bottom": "2px solid #c1121d"
		})
		$(this).prev().css({
			"color": "#000",
	  		"border-bottom": "none"
		})
		$(".floor-pro-item").eq(2*i).css("display","none")
		$(".floor-pro-item").eq(2*i+1).css("display","list-item")
	})
	$(".tab-item").eq(2*i).mouseenter(function(){
		$(this).css({
			"color": "#d2050a",
	  		"border-bottom": "2px solid #c1121d"
		})
		$(this).next().css({
			"color": "#000",
	  		"border-bottom": "none"
		})
		$(".floor-pro-item").eq(i*2).css("display","list-item")
		$(".floor-pro-item").eq(i*2+1).css("display","none")
	})
}
//楼层bar 
//scroll 时间控制
$(window).scroll(function(){
	//显示隐藏
	if($(document).scrollTop()>=1380){
		$(".floatBar").css({"display":"block"})
	}else{
		$(".floatBar").css({"display":"none"})
	}
	//对应楼 Bar高亮显示
	for(let i=0;i<$(".floor-guide li").size();i++){
		if($(document).scrollTop()>=$("#floor0").outerHeight()*(i)+1380&&$(document).scrollTop()<$("#floor0").outerHeight()*(i+1)+1380){
			$(".floor-guide li").eq(i).find("a").css({"color":"red"})
										.end().siblings().find("a").css({"color":"#656565"})
			$(".floor-guide li").eq(i).find("i").css({"color":"#fff","backgroundColor":"red"})
										.end().siblings().find("i").css({"color":"#fff","backgroundColor":"#656565"})
		}
	}
})
//鼠标滑过 Bar   增加下划线
$(".floor-guide li").mouseenter(function(){
	$(this).css({"text-decoration":"underline"})
})
$(".floor-guide li").mouseleave(function(){
	$(this).css({"text-decoration":"none"})
})
//鼠标点击Bar 返回到相应楼层
$(".floor-guide li").click(function(){
	$num=$(this).index();
	$("html,body").animate({
		"scrollTop":$num*$("#floor0").outerHeight()+1410
	},500)
})
//联系客服
$("#footer .x-kf a").hover(function(){
	$(this).css({"background":"url(img/zxkf2.png) no-repeat"})
},function(){
	$(this).css({"background":"url(img/zxkf1.png) no-repeat"})
	
})
//more friend link
var flagmfl=true;
$("#more_f_b").click(function(){
	if(flagmfl){
		$(".more_friend").css({"display":"block"});
		flagmfl=false;
	}else{
		$(".more_friend").css({"display":"none"});
		flagmfl=true;
	}
})



//右侧选项功能
//like
$(".right_iqr").find("a").hover(function(){
	$(".ewm").css("display","block")
},function(){
	$(".ewm").css("display","none")
})
//sale 咨询
$(".rightcontact").find("a").hover(function(){
	$(".sale").css("display","block")
},function(){
	$(".sale").css("display","none")
})
//top
$(".right_to_top").find("a").click(function(){
	$("html,body").animate({
		"scrollTop":0
	},500)
})
$("#header #sbtn").click(function(){
	if($("#header #sBox").val()==""){
		alert("搜索内容为空！")
	}else{
	setCookie("type",$("#header #sBox").val())
	location.href="prolist.html"
	}
})
$("#header #sbtn").keydown(function(e){
	console.log(1)
	var e=e||event;
	if(e.keyCode==13){
		setCookie("type",$("#header #sBox").val())
		location.href="prolist.html"
	}
})