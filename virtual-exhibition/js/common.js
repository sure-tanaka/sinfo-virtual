$(function(){
	// 新着情報ティッカー
	$('.news').infiniteslide({
		'speed': 50,
		'direction' : 'left',
		'responsive': true,
		'pauseonhover': true
	});

	// SPグローバルメニュー
	$('.btn-spmenu').on('click', function(){
		$('.sp-menu').fadeToggle(400);
		$('.overlay').fadeToggle(400);
		$(this).toggleClass('on');
	});

	$('.slides').slick({
		arrows: true,
		dots: true,
		slidesToShow:4, //768px以上のサイズに適用
		prevArrow:'<div class="arrow left"></div>',
		nextArrow:'<div class="arrow right"></div>',
		appendDots: '.bullets',
		responsive: [
			{
				breakpoint: 768, //767px以下のサイズに適用
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});