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
var color_index=0;
window.onload=function(){
	if(getCookie("islogin")=="1"){
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
		//退出登录
		$(".exit").click(function(){
			setCookie("islogin","0")
			location.reload();
		})
	
	fdjobj=JSON.parse(getCookie("proinfo"))
	//创建中图
	var fdjbox=		`<div class="fdj">
						<div class="midimg">
							<a href="javascript:;" >
								<img src="fdj/${fdjobj.fdjm[0][0]}"/>
							</a>
						</div>
						<div class="bigimg">
							<img src="fdj/${fdjobj.fdjb[0][0]}"/>
						</div>
					</div>`
	$(".pro_box").html(fdjbox)
	$('<div class="bigjing"></div>').appendTo(".midimg");
	$('<div class="bigimg"></div><div class="share"></div>').appendTo(".pro_box")
	// 创建小图
	for(var i=0;i<fdjobj.fdjs.length;i++){
		$('<ul class="smlimg"></ul>').appendTo(".fdj")
	
		var fdjsimg="";
		for(var j=0;j<fdjobj.fdjs[i].length;j++){
		fdjsimg+=	`<li>
						<div>
							<a href="javascript:;" >
								<img src="fdj/${fdjobj.fdjs[i][j]}"/>
							</a>
						</div>
					</li>`
		}
		$(".smlimg").eq(i).html(fdjsimg)
	}
	//创建颜色
	var color="";
	for(var i=0;i<fdjobj.color.length;i++){
		color+=		`<li>
						<a href="javascript:;">
							<img src="fdj/${fdjobj.fdjs[i][0]}" alt="" data-color="${fdjobj.color[i]}"/>
						</a>
					</li>`
	}
	$(".color ul").html(color)
	//创建尺码
	var size="";
	for(var i=0;i<fdjobj.size.length;i++){
		size+=		`<li>
						<a href="javascript:;" data-size="${fdjobj.size[i]}">
							${fdjobj.size[i]}
						</a>
					</li>`
	}
	$(".size ul").html(size)
	//创建详情超大图
	var xqimg="";
	for(var i=0;i<fdjobj.des.length;i++){
		xqimg+=		`<tr>
						<td>
							<img  src="fdj/${fdjobj.des[i]}">
						</td>
					</tr>`
	}
	$("#tab4 tbody").html(xqimg)
	
	
	$(".color ul li").click(function(){
	//选择颜色  显示对应的小图 ul
	color_index=$(this).index();
	$(".smlimg").css("display","none")
	$(".smlimg").eq(color_index).css("display","block")
	//显示对应的中图
	$(".midimg a img").attr("src","fdj/"+fdjobj.fdjm[color_index][0])
	$(".bigimg img").attr("src","fdj/"+fdjobj.fdjb[color_index][0])
	//给当前颜色li 红色边框
	$(this).addClass("current").siblings().removeClass("current")
	//获取选择的信息并显示
	$(".choose").css("display","block")
	$("#e1").html($(this).find("a>img").data("color")).css("display","inline-block")
	//显示已经选中时的对号标记
	$(this).find("a").append("<i></i>")
})
$(".size ul li").click(function(){
	$(this).addClass("current").siblings().removeClass("current")
	$(".choose").css("display","block")
	$("#e2").html($(this).find("a").data("size")).css("display","inline-block")
	$(this).find("a").append("<i></i>")
})
	
	
	$(".smlimg").css("display","none")
	$(".smlimg").eq(0).css("display","block")
	$(".infohd>h1").html(fdjobj.name)
	$(".moneynum").html(Number(fdjobj.price).toFixed(2))
	$(".jifen").html(Number(fdjobj.price).toFixed(2))
	//商品详情   传递值
	$(".detailso li").eq(0).find("strong").html(fdjobj.name)
	$(".detailso li").eq(0).find("strong").attr("title",fdjobj.name)
	
	
	$(".detailso li").eq(1).find("strong").html(fdjobj.id)
	$(".detailso li").eq(2).find("strong").html("特步")
	$(".detailso li").eq(3).find("strong").html(fdjobj.sex)
	$(".detailso li").eq(4).find("strong").html(fdjobj.type)
	$(".detailso li").eq(5).find("strong").html(fdjobj.color.join("， "))
	$(".detailso li").eq(6).find("strong").html(fdjobj.size.join("， "))
	$(".detailso li").eq(7).find("strong").html(fdjobj.price)
}








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
//鼠标移入中图 显示 放大镜大图跟蒙版
$(".pro_box").on("mouseenter",".midimg",function(){
	$(".bigimg").css("display","block")
})
$(".pro_box").on("mouseleave",".midimg",function(){
	$(".bigimg").css("display","none")
})
$(".pro_box").on("mouseenter",".midimg",function(){
	$(".bigjing").css("display","block")
})
$(".pro_box").on("mouseleave",".midimg",function(){
	$(".bigjing").css("display","none")
})
//放大镜效果
$(".pro_box").on("mousemove",".midimg",function(e){
	var e=e||event;
	var x=e.pageX-$(".bigjing").outerWidth()/2-$(".pro_box").offset().left;
	var y=e.pageY-$(".bigjing").outerHeight()/2-$(".pro_box").offset().top;
	var maxL=$(".midimg a img").outerWidth()-$(".bigjing").outerWidth();
	var maxT=$(".midimg a img").outerHeight()-$(".bigjing").outerHeight();
	x=Math.min(maxL,Math.max(0,x));
	y=Math.min(maxT,Math.max(0,y));
	$(".bigjing").css({
		"left":x,
		"top":y
	})
	$(".bigimg img").css({
		"left":-x*$(".bigimg img").outerWidth()/$(".midimg a img").outerWidth(),
		"top":-y*$(".bigimg img").outerHeight()/$(".midimg a img").outerHeight()
	})
})
//滑过小图，显示对应中图
$(".pro_box").on("mouseenter",".smlimg li div",function(){
	var simg_index=$(this).parent().index();
	$(".smlimg li div").css("border","1px solid #CDCDCD");
	$(this).css("border","1px solid red");
	$(".midimg a img").attr("src","fdj/"+fdjobj.fdjm[color_index][simg_index]);
	$(".bigimg img").attr("src","fdj/"+fdjobj.fdjb[color_index][simg_index]);
	//如果是当前ul 的最后一个li 改变蒙版大小
	if(simg_index==$(this).parent().parent().find("li").size()-1){
		$(".bigjing").css({
			"width":440.217,
			"height":440.217
		})
	}else{
		$(".bigjing").css({
			"width":253.125,
			"height":253.125
		})
	}
})




//description menu
$(".left_menu h3").mouseenter(function(){
	$(this).next().css("display","block")
})
$(".left_menu h3").mouseleave(function(){
	$(this).next().css("display","none")
})
$(".left_menu ul").mouseenter(function(){
	$(this).css("display","block")
})
$(".left_menu ul").mouseleave(function(){
	$(this).css("display","none")
})
//li 
$(".left_menu ul li").mouseenter(function(){
	$(this).find("a").css("color","orangered")
})
$(".left_menu ul li").mouseleave(function(){
	$(this).find("a").css("color","#0B0B0B")
})

//right_bar
$(".right_bar ul li").click(function(){
	var des_index=$(this).index();
	$(this).addClass("current").siblings().removeClass("current");
	$(".c-box").eq(des_index).css("display","block").siblings().css("display","none")
})
//评论bar
$(".comment-filter a").click(function(){
	var index=$(this).index();
	$(this).addClass("current").siblings().removeClass("current")
	if(index>0){
		$(".comment-list").css("display","none")
		$(".comment-list").eq(index-1).css("display","block")
	}else{
		$(".comment-list").css("display","block")
	}
})
