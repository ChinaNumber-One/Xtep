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
	}
	if(getCookie("shopcar")){
		var shopcar=JSON.parse(getCookie("shopcar"))
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
					<td>￥${shopcar[i].price}</td>
					<td style="text-align: center;">
						<div class="num">
							<b>-</b><input type="text" value="${shopcar[i].count}"/><b>+</b>
						</div>
					</td>
					<td>￥${shopcar[i].price*shopcar[i].count}</td>
					<td><a href="javascript:;">加入收藏</a><a href="javascript:;">删除</a></td>
				</tr>`).appendTo(".shopcar table tbody");
		}
	}
}
