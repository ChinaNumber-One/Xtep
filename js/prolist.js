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
			//点击商品进入详情页
			$(".pro_item").click(function(){
				//s
				var fdjs0_str=$(this).find("#record").data("fdjs0")
				var fdjs0_arr=fdjs0_str.split(",")
				var fdjs1_str=$(this).find("#record").data("fdjs1")
				var fdjs1_arr=fdjs1_str.split(",")
				var fdjs2_str=$(this).find("#record").data("fdjs2")
				var fdjs2_arr=fdjs2_str.split(",")
				var fdjs=[];
				fdjs.push(fdjs0_arr)
				fdjs.push(fdjs1_arr)
				fdjs.push(fdjs2_arr)
				//m
				var fdjm0_str=$(this).find("#record").data("fdjm0")
				var fdjm0_arr=fdjm0_str.split(",")
				var fdjm1_str=$(this).find("#record").data("fdjm1")
				var fdjm1_arr=fdjm1_str.split(",")
				var fdjm2_str=$(this).find("#record").data("fdjm2")
				var fdjm2_arr=fdjm2_str.split(",")
				var fdjm=[];
				fdjm.push(fdjm0_arr)
				fdjm.push(fdjm1_arr)
				fdjm.push(fdjm2_arr)
				//b
				var fdjb0_str=$(this).find("#record").data("fdjb0")
				var fdjb0_arr=fdjb0_str.split(",")
				var fdjb1_str=$(this).find("#record").data("fdjb1")
				var fdjb1_arr=fdjb1_str.split(",")
				var fdjb2_str=$(this).find("#record").data("fdjb2")
				var fdjb2_arr=fdjb2_str.split(",")
				var fdjb=[];
				fdjb.push(fdjb0_arr)
				fdjb.push(fdjb1_arr)
				fdjb.push(fdjb2_arr)
				var colorcookie=$(this).find("#record").data("color").split(",");
				var sizecookie=$(this).find("#record").data("size").split(",");
				var info={
					"id":$(this).find("#record").data("id"),
					"name":$(this).find("#record").data("name"),
					"sex":$(this).find("#record").data("sex"),
					"type":$(this).find("#record").data("type"),
					"price":$(this).find("#record").data("price"),
					"color":colorcookie,
					"size":sizecookie,
					"fdjs":fdjs,
					"fdjm":fdjm,
					"fdjb":fdjb
				}
				console.log(info)
				setCookie("proinfo",JSON.stringify(info))
				window.open("proinfo.html")
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
									<img src="fdj/${product.smpic[i]}"/>
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
								<img src="fdj/${product.src[0]}"/>
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
						<span style="display:none" id="record" 
						data-id="${product.id}" 
						data-name="${product.name}" 
						data-sex="${product.sex}"
						data-price="${product.price}"
						data-color="${product.color}"
						data-size="${product.size}"
						data-type="${product.type}"
						data-fdjs0="${product.fdj.s[0]}" 
						data-fdjs1="${product.fdj.s[1]}" 
						data-fdjs2="${product.fdj.s[2]}"  
						data-fdjm0="${product.fdj.m[0]}" 
						data-fdjm1="${product.fdj.m[1]}"
						data-fdjm2="${product.fdj.m[2]}"
						data-fdjb0="${product.fdj.b[0]}"
						data-fdjb1="${product.fdj.b[1]}" 
						data-fdjb2="${product.fdj.b[2]}" 
						></span>
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
					$(this).parent().parent().parent().prev().find("img").attr("src", "fdj/" + json[tp].list[bigindex].src[smallindex])
					$(this).css("border", "1px solid #f00").siblings().css("border", "1px solid #ddd")
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




