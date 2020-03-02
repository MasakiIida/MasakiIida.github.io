$(function () {
    // リロード時、トップへ
    $('html,body').animate({
        scrollTop: 0
    }, '1');

    // ホバー時のフォントサイズ変更
    $(".panel__inner-image").hover(function () {
        $(this).stop().animate({
            'font-size': '30px',
            opacity: 0.8
        }, 500);
    }, function () {
        $(this).stop().animate({
            'font-size': '20px',
            opacity: 1
        }, 500);
    });

    // ホバー時の明るさ変更
    $(".main-images").hover(function () {
        $(this).stop().animate({
            opacity: 0.8
        }, 500);
    }, function () {
        $(this).stop().animate({
            opacity: 1
        }, 500);
    });

    // スムーススクロール
    $('a[href^="#"]').click(function () {
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });

    //スクロール表示
    $(window).scroll(function () {
        $('.info__inner__desc,#bottom-end,.panel__inner,.intro__identity,.intro__contact,.intro__skill').each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 0) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });

    // nav スライド表示
    $("#my-parts-icon").click(function () {
        if ($(".nav__menu-sp").is(":hidden")) {
            $(".nav__menu-sp").slideDown();

        } else {
            $(".nav__menu-sp").slideUp();
        }
    });

    var getWindowMovieHeight = function () {
        // ここでブラウザの縦横のサイズを取得します。
        var windowSizeHeight = $(window).outerHeight();
        var windowSizeWidth = $(window).outerWidth();

        // メディアの縦横比に合わせて数値は変更して下さい。(メディアのサイズが width < heightの場合で書いています。逆の場合は演算子を逆にしてください。)
        var windowMovieSizeWidth = windowSizeHeight * 1.76388889;
        var windowMovieSizeHeight = windowSizeWidth / 1.76388889;
        var windowMovieSizeWidthLeftMargin = (windowMovieSizeWidth - windowSizeWidth) / 2;

        if (windowMovieSizeHeight < windowSizeHeight) {
            // 横幅のほうが大きくなってしまう場合にだけ反応するようにしています。
            $("#video").css({
                left: -windowMovieSizeWidthLeftMargin
            });
        }
    };

    // 以下画面の可変にも対応できるように。
    $(window).on('load', function () {
        getWindowMovieHeight();
    });

    $(window).on('resize', function () {
        getWindowMovieHeight();
    });

    var appear = false;
    var pagetop = $('#page_top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { //100pxスクロールしたら
            if (appear == false) {
                appear = true;
                pagetop.stop().animate({
                    'bottom': '50px' //下から50pxの位置に
                }, 300); //0.3秒かけて現れる
            }
        } else {
            if (appear) {
                appear = false;
                pagetop.stop().animate({
                    'bottom': '-50px' //下から-50pxの位置に
                }, 300); //0.3秒かけて隠れる
            }
        }
    });
    
    pagetop.click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ戻る
        return false;
    });

    //スクロール発火イベント
    window.addEventListener("scroll", function () {
        //スクロールの高さを取得
        let scroll = window.pageYOffset;

        if (scroll > 600) {
            document.getElementById("header").style.backgroundColor = '#00bfff';
        } else {
            document.getElementById("header").style.backgroundColor = 'rgba(0, 0, 0, .0)';
        }
    });
});
