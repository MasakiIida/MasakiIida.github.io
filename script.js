$(function(){
    // ホバー時のフォントサイズ変更
    $(".menu").hover(function(){
        $(this).stop().animate({'font-size':'30px', opacity:0.8},500);
        }, function(){
        $(this).stop().animate({'font-size':'20px', opacity:1},500);
        });
    
    // ホバー時の明るさ変更
    $(".main-images").hover(function(){
        $(this).stop().animate({opacity:0.8},500);
        }, function(){
        $(this).stop().animate({opacity:1},500);
        });
        
    
    // ホバー時のフォントカラー切り替え
    $(".footer-li").hover(function(){
        $(this).stop().animate({'border':'1px solid #fff', 'color':'#82cddd'},300);
        }, function(){
        $(this).stop().animate({'border':'1px solid #fff', 'color':'#fff'},300);
        });
    
    // スムーススクロール
    $(function(){
        $('a[href^="#"]').click(function() {
            var speed = 400;
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top;
            $('body,html').animate({scrollTop:position}, speed, 'swing');
            return false;
        });
    });
    
    //スクロール表示
    $(function(){
        $(window).scroll(function (){
            $('.bottom-div,#bottom-end').each(function(){
                var position = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > position - windowHeight + 0){
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
        });
    });
    
});

