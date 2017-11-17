$(".allpro").mouseenter(function() {
	$(".sort-list-box").css("display", "block")
})
$(".allpro").mouseleave(function() {
	$(".sort-list-box").css("display", "none")
})

$(window).scroll(function() {
	$(".sort-list-box").css("display", "none")
})


window.onload = function() {
	var tp=getCookie("type")
	$.ajax({
		type: "get",
		url: "http://127.0.0.1/Xtep/data.json",
		async: true,
		success: function(json) {
			var conStr = "";
				for(var j = 0; j < json[tp].list.length; j++) {
					var product = json[tp].list[j]; //一个商品对象
					conStr +=`<li class="pro_item">
						<div class="pro_info">
							<a href="#" target="_blank" class="pro_like">
								<i class="iconfont icon-favorite"></i>
								收藏
							</a>
							<a href="#" target="_blank" class="pro_add-cart">
								<i class="iconfont icon-cart"></i>
								加入购物车
							</a>
							<a href="#" target="_blank" class="pro_img">
								<img src="images/${product.src}"/>
							</a>
							<div class="pro_scroll">
								<div class="pro_wrap">
									<ul>
										<li>
											<a href="#" target="_blank">
												<img src="img/1.jpg"/>
											</a>
										</li>
										<li>
											<a href="#" target="_blank">
												<img src="img/1.jpg"/>
											</a>
										</li>
										<li>
											<a href="#" target="_blank">
												<img src="img/1.jpg"/>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<p class="pro_title">${product.name}</p>
							<div class="pro_price">
								<span>
									￥<b>${product.price}</b>
								</span>
							</div>
							<div class="pro_new">新品</div>
						</div>
					</li>`
				}
			$(".pro_list").html(conStr);
		}
	});

}