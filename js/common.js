$(function(){

/**
 * ページ内遷移のアニメーション効果
 */

	$('a[href^=#]').click(function(){
		// href属性値を取得
		var hash = $(this.hash);
		// 存在確認
		if(hash.length){
			// トップからのオフセットを取得
			var offset = $(hash).offset().top;
			$('html, body').animate({
				scrollTop: offset
			}, 500);
			return false;
		}
	});

});
