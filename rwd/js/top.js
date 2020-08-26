$(function () {

    /**
     * スモールスクリーン判定
     */

    function smallScreen() {
        // ミディアムスクリーン以上用のコピーライトが非表示の場合スモールスクリーンと判定
        if ($('.small-site-copyright').is(':hidden')) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * タイル
     * masonry.pkgd.min.js
     */

    var masonryType;
    // イベントリスナーにload、resizeイベントを設定
    $(window).on('load resize', function () {
        // スモールスクリーンの場合
        if (smallScreen()) {
            // ミディアムスクリーン以上用のMasonryが有効の場合
            if (masonryType === 'medium') {
                // ミディアムスクリーン以上用のMasonryを無効化
                $('.js-tile').masonry('destroy');
            }
            // スモールスクリーン用のMasonryを初期化
            $('.js-entries-tile').masonry({
                itemSelector: '.js-entry-tile-small',
                percentPosition: true,
                stamp: '.js-stamp-tile-small',
                // transitionDuration: '0.4s',
                // stagger: 30,
            });
            // 有効なMasonryのフラグを更新
            masonryType = 'small';
        } else {
            // スモールスクリーン用のMasonryが有効の場合
            if (masonryType === 'small') {
                // スモールスクリーン用のMasonryを無効化
                $('.js-entries-tile').masonry('destroy');
            }
            // ミディアムスクリーン以上用のMasonryを初期化
            $('.js-tile').masonry({
                itemSelector: '.js-entry-tile',
                stamp: '.js-stamp-tile',
                columnWidth: 1,
                // transitionDuration: '0.4s',
                // stagger: 30,
            });
            // 有効なMasonryのフラグを更新
            masonryType = 'medium';
        }
    });

    /**
     * アイキャッチ
     */
    var $singleEyecatch = $('.eyecatch-slide'),
        countEyecatch = $singleEyecatch.length,
        currentIndex = 0,
        interval = 5000,
        timer;

    var isTouchDevice = function() {
        return ('ontouchstart' in window || navigator.msPointerEnabled) ? true : false;
    };

    // 切替
    function driveEyecatch(index, fade) {
        $('.list-stage-eyecatch li').fadeOut(fade);
        $singleEyecatch.eq(index).fadeIn(fade);
        currentIndex = index;
    }

    // 自動再生
    function startTimer() {
        timer = setInterval(function () {
            var nextIndex = (currentIndex + 1) % countEyecatch;
            driveEyecatch(nextIndex, 500);
        }, interval);
    }

    // 停止
    function stopTimer() {
        clearInterval(timer);
    }

    // ステージ
    $('.list-stage-eyecatch li').css({'display': 'none'})// アイキャッチ非表示
        .mouseenter(function () {
            stopTimer();        // ステージホバー
        })
        .mouseleave(function () {
            startTimer();        // ステージホバー
        });

    // メニューホバー
    $('.list-menu-eyecatch li').mouseenter(function () {
        var index = $(this).find('a').attr('data-slide-index');
        $('.list-stage-eyecatch li').fadeOut(100);
        $('.list-stage-eyecatch').find('.stage-eyecatch-' + index).fadeIn(300);
        // メニューステータス更新
        $('.list-menu-eyecatch').find('li').removeClass('active');
        $(this).addClass('active');

        stopTimer();
    });
    $('.list-menu-eyecatch').mouseleave(function () {
        if(!isTouchDevice()){
            $('.list-menu-eyecatch').find('li').removeClass('active');
            driveEyecatch(currentIndex, 100);
            startTimer();
        }
    });

    $(window).load(function() {
        // 1枚目を表示
        driveEyecatch(currentIndex, 1000);
        // 自動再生開始
        startTimer();
    });


});

/**
 * お知らせエリアのタブ切替え
*/
$(function () {
    var tab = $('.head-news-tab li');
    tab.bind('click', function(e) {
        e.preventDefault();
        var index = tab.index(this);
        var target = $(this).attr("class"); 
        if(target == "newsrelease"){
            window.location.href = "NewsRelease/Default.htm";
            $(this).removeClass('on');
        }else if(target == "event"){
            window.location.href = "company/event.html";
            $(this).removeClass('on');
        }else{
            tab.removeClass('on');
            $(this).addClass('on');
            $('.news-tab-box').removeClass('show').eq(index).fadeIn(200, function(){
                $(this).addClass('show').css('display', '');
            });
        }
    });
});