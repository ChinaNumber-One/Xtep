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
$(".color ul li").click(function(){
	$(this).addClass("current").siblings().removeClass("current")
	$(".choose").css("display","block")
	$("#e1").html($(this).find("a>img").data("color")).css("display","inline-block")
	$(this).find("a").append("<i></i>")
})
$(".size ul li").click(function(){
	$(this).addClass("current").siblings().removeClass("current")
	$(".choose").css("display","block")
	$("#e2").html($(this).find("a").data("size")).css("display","inline-block")
	$(this).find("a").append("<i></i>")
})

var count=Number($("#numtxt").val());
var sumnum=0;
$(".add").click(function(){
	count++;
	$("#numtxt").val(count)
})
$(".cut").click(function(){
	count--;
	if(count<=1){
		count=1;
	}
	$("#numtxt").val(count)
})
$("#shopcar").click(function(){
	if($(".size ul li").hasClass("current")&&$(".color ul li").hasClass("current")){
		sumnum+=count;
		$(".rightshopcar a i").html(sumnum);
	}else{
		alert("请选择颜色跟尺码！")
	}
	
})
