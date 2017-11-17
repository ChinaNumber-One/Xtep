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
	var index = 1;
	var tp = getCookie("type")
	$(".searchres ul li:first a").html(tp)
	var diff = $.ajax({
		type: "get",
		url: "http://127.0.0.1/Xtep/data.json",
		async: true,
		success: function(json) {
			if(json[tp]) {
				total = Math.ceil(json[tp].list.length / 8); //总页数
				showpro(index, json, tp);
				fn(index,json,tp);
				$('.M-box').pagination({
					pageCount: total,
					callback: function(api) {
						var data = {
							page: api.getCurrent(), //返回当前页码
						};
						var index = data.page; //页码
						$.getJSON('http://127.0.0.1/Xtep/data.json', function(json) {
							showpro(index, json, tp);
							fn(index,json,tp);
						});
					}
				});
				
			} else {
				var failed = `<p id="no_sepro">
								抱歉，没有您想要搜索的商品！
							</p>`
				$(".pro_list").html(failed);

			}
			
			$(".pro_info").click(function(){
				var arr=[];
				var info={
					"proname":$(this).find(".pro_title").html(),
					"proprice":$(this).find(".pro_price b").html(),
					"prosrc":$(this).find("a").eq(2).find("img").attr("src")
				}
				arr.push(info);
				console.log(arr);
			})

		},

	});

}

function showpro(index, json, tp) {
	var conStr = "";
	for(var j = (index - 1) * 8; j < index * 8; j++) {
		if(j < json[tp].list.length) {
			var product = json[tp].list[j]; //一个商品对象
			var simg = "";
			for(let i = 0; i < product.smpic.length; i++) {
				simg += `<li>
								<a href="javascript:;">
									<img src="images/${product.smpic[i]}"/>
								</a>
						    </li>`

			}
			conStr += `<li class="pro_item">
						<div class="pro_info">
							<a href="javascript:;" class="pro_like">
								<i class="iconfont icon-favorite"></i>
								收藏
							</a>
							<a href="javascript:;"  class="pro_add-cart">
								加入购物车
							</a>
							<a href="javascript:;"  class="pro_img">
								<img src="images/${product.src[0]}"/>
							</a>
							<div class="pro_scroll">
								<div class="pro_wrap">
									<ul class="smallpic">
									${simg}
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
						<span style="display:none" data-id=${product.id} data-name=${product.name}></span>
					</li>`
		}
	}
	$(".pro_list").html(conStr);

}
function fn(index,json,tp){
	//滑过小图改变对应大图
				$(".pro_wrap ul li").mouseenter(function() {
					var bigindex = $(this).parent().parent().parent().parent().parent().index()+(index-1)*8;//获取所在大图li的下标
					var smallindex = $(this).index();//获取小图的li下标
					$(this).parent().parent().parent().prev().find("img").attr("src", "images/" + json[tp].list[bigindex].src[smallindex])
					$(this).css("border", "1px solid #f00")
				})
				$(".pro_wrap ul li").mouseleave(function() {
					$(this).css("border", "1px solid #ddd")
				})

				//商品
				$(".pro_item").mouseenter(function() {
					$(this).find(".pro_like").css({
						"display": "inline-block",
						"position": "absolute",
						"left": 20,
						"bottom": 5,
						"color": "#666",
						"fontSize": 14
					})
					$(this).find(".pro_add-cart").css({
						"display": "inline-block",
						"position": "absolute",
						"right": 20,
						"bottom": 5,
						"color": "#fff",
						"background": "red",
						"fontSize": 14
					})
					$(this).find(".pro_info").css({
						"height": "420",
						"border": "1px solid #B7B7B7",
						"zIndex": "100",
						"background": "#fff"
					})
					$(this).find(".pro_title").css({
						"height": "38"
					})
				})
				$(".pro_item").mouseleave(function() {
					$(this).find(".pro_like").css({
						"display": "none",
						"position": "",
					})
					$(this).find(".pro_add-cart").css({
						"display": "none",
						"position": "",
					})
					$(this).find(".pro_info").css({
						"height": "370",
						"border": "1px solid #fff",
						"zIndex": "1"
					})
					$(this).find(".pro_title").css({
						"height": "19"
					})
				})
}





