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
		$('.sp-menu').fadeToggle();
		$('.overlay').fadeToggle();
		$(this).toggleClass('on');
	});
});