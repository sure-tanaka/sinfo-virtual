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
});