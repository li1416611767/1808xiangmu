$('li').each(function (i, item) {
    $(this).css({ left: i * 100 + '%', top: "0px" })
})
// touchstart手指触摸到屏幕会触发
$('li').on('touchstart', function (event) {
    var screenWidth = $(window).width();
    var licount = $('ul li').length;
    var index = $(this).index();
    // 取第一个手指
    var touch = event.originalEvent.targetTouches[0];
    var clickX = touch.pageX;
    // touchmove：当手指在屏幕上移动时，会触发
    $('li').on('touchmove', function (event) {
        var sectouch = event.originalEvent.targetTouches[0];
        var distance = sectouch.pageX - clickX;
        // touchend：当手指离开屏幕时，会触发
        $('li').on('touchend', function () {
            if (distance < -100) {
                if (index + 1 >= licount) {
                    window.location.href="login.html"
                    return;
                }
                $('ul').css({ left: (index + 1) * -100 + '%' })
            }
            if (distance > 100) {
                if (index - 1 < 0) {
                    return;
                }
                $('ul').css({ left: (index - 1) * -100 + '%' })
            }
            $('li').off('touchmove');
        })
    })
})