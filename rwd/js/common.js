$(document).ready(function () {

	/**
	 * ドロワーメニュー
	 * jquery.mmenu.min.js
	 */

	$('#offCanvas').mmenu({
		offCanvas: {
			position: 'right',
			zposition: 'front',
		},
		navbar: {
			title: 'メニュー',
		},
		extensions: [
			'pagedim-black',
		],
	});

	var API = $('#offCanvas').data('mmenu');

	$('.js-close-off-canvas').click(function () {
		API.close();
	});

	/**
	 * ページ内リンク（スムーススクロール）
	 * クラス名にjs-internal-linkを指定
	 * <a href="#example" class="js-internal-link">ページ内リンク</a>
	 * Android 2系は除外（ページ最下部からの動作に不具合）
	 */

	var ua = navigator.userAgent;
	$('a[href^="#"]').click(function () {
		var internalLinkHash = $(this.hash);
		// console.log(internalLinkHash);
		// オブジェクトが空ではない場合かつクラス名js-internal-linkが指定されている場合
		if (internalLinkHash.length && $(this).hasClass('js-internal-link')) {
			var offset = $(internalLinkHash).offset().top;
			// Android 2系の場合
			if ((ua.search(/Android 2./) != -1)) {
				window.scroll(0, offset);
			} else {
				$('html, body').animate({
					scrollTop: offset
				}, 500, 'swing');
			}
			return false;
		}
	});

	/**
	 * メールリンク
	 * ドメインをUnicode値に変換し配列unicodeに指定
	 * <a href="javascript:void(0)" onclick="activateMua('example')">メールリンク</a>
	 */

	function activateMua(local) {
		var unicode = [64, 115];
		var decode = '';
		for (var i = 0; i < unicode.length; i++) {
			decode += String.fromCharCode(unicode[i]);
		}
		location.href = 'mailto:' + local + decode;
	}
});

/**
 * プリント
 */

function activatePrint() {
	window.print();
}

/**
 * タブ切替え
 */
$(function () {
	$(".tab-menu a").on('click', function(e) {
		e.preventDefault();
		var target = $(this).attr('href');
		if (! $(target).length) return false;
		//ul.numの場合
		if ( target == '#cont2'){
			$('.num li:first-child').addClass('default');
			$('.box.first-child').addClass('default');
			if($('.debug-media.visible-sp')){
				$("img[src*='tab01_on']").attr('src',$("img[src*='tab01_on']").attr('src').replace('_on','_off'));;
				$("img[src*='tab02_off']").attr('src',$("img[src*='tab02_off']").attr('src').replace('_off','_on'));;
			}
		}else if ( target == '#cont1'){
			if($('.debug-media.visible-sp')){
				$("img[src*='tab01_off']").attr('src',$("img[src*='tab01_off']").attr('src').replace('_off','_on'));;
				$("img[src*='tab02_on']").attr('src',$("img[src*='tab02_on']").attr('src').replace('_on','_off'));;
			}
		}else{
			$('.num li:first-child').removeClass('default');
			$('.box.first-child').removeClass('default');
		}
		$('.tab', $(this).closest('.tab-menu')).removeClass('on');
		$(this).closest('.tab').addClass('on');
		$('.box', $(target).closest('.tab-box')).removeClass('on');
	 $(target).addClass('on');
	});
});

 /**
 * NewsRelease
 */
$(function () {
	$(".archive-link .list a").bind('click', function(e) {
		e.preventDefault();
		var target = $(this).attr('href');
		var id = '#' + target;
		if(target == 'y2003'){
			var year = '2003年以前';
		}else{
			var year = target.slice(1)+'年';
		}
//		console.log(id);
//		alert(id);
		$("#year").text(year);
		$('.archive-link .list li').removeClass('on');
		$(this).parents('li').addClass('on');
		$('.list-disp > div').css({'display':'none'});
		$('.list-disp > div').removeClass('disp');
		$(id).addClass('disp');
	});
});