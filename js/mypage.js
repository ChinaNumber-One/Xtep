$(".allpro").mouseenter(function(){
	$(".sort-list-box").css("display","block")
})
$(".allpro").mouseleave(function(){
	$(".sort-list-box").css("display","none")
})


$(window).scroll(function(){
	$(".sort-list-box").css("display","none")
})

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
$(".myinfo_R_2 ul li").css("display","block")
var timer=setInterval(function(){
	indexli++;
	$(".myinfo_R_2 ul li").eq(indexli).fadeIn().siblings().fadeOut()
	if(indexli==2){
		indexli=0;
	}
},3000)

