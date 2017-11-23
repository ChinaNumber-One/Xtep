window.onload=function(){
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
	}else{
		location.href="login.html"
	}
	if(getCookie("shopcar")){
		shopcar=JSON.parse(getCookie("shopcar"))
		for(var i=0;i<shopcar.length;i++){
			$(`<tr>
					<td><input type="checkbox" class="check1" style="margin-left: 60px;"/></td>
					<td>
						<img src="fdj/${shopcar[i].src}" alt="" />
						<div class="des">
							<p>${shopcar[i].name}</p>
						<p>颜色<span class="sccolor">${shopcar[i].color}</span>尺寸<span class="sccolor">${shopcar[i].size}</span></p>
						</div>
					</td>
					<td>${shopcar[i].price}</td>
					<td style="text-align: center;">
						<div class="num">
							<b>-</b><input type="text" class="shopnum" value="${shopcar[i].count}"/><b>+</b>
						</div>
					</td>
					<td class="sum">${shopcar[i].price*shopcar[i].count}</td>
					<td><a href="javascript:;">加入收藏</a><a href="javascript:;" class="delcar">删除</a></td>
				</tr>`).appendTo(".shopcar table tbody");
		}
	}
}
$(".shopcar table tbody").on("click",".delcar",function(){
	var delindex=$(this).parent().parent().index()
	console.log(delindex)
	$(this).parent().parent().remove();
	shopcar.splice(delindex-1,1)
	if(shopcar.length!=0){
		setCookie("shopcar",JSON.stringify(shopcar))
	}else{
		setCookie("shopcar","",-1)
	}
})
var num=0;
var sump=0
$(".shopcar table tbody").on("click",".check1",function(){
	num+=Number($(this).parent().parent().find(".shopnum").val());
	sump+=Number($(this).parent().parent().find(".sum").html())
	$(".payfor i").html(num)
	$(".payfor em").html(sump+"元")
	console.log($("table tbody tr").size())
	
})

