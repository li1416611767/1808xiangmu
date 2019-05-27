$(document).ready(function () {
    //上传图片显示到前台
    $(document).on("change", "#files", function () {
        if ($(".choose_img").children("li").length > 9) {
            $(".reveal-modal").css("animation", "reveal-modal 0.3s ease-in forwards").delay(1000).slideUp(300);
            $(".reveal-modal h1").html("图片不能超过9张哦");
            return;
        }
        var fl = $(this).get(0).files[0];
        var fileSize = fl.size / 1024;
        var url = window.URL.createObjectURL(fl) || window.webkitURL.createObjectURL(fl);
        $(".add").before("<li class='moreImgs'><div class='delete'></div><img src=" + url + " alt=\"\"></li>");
        $(this).css("display", "none");
        $(this).attr("id", "");
        $(".add").append("<input type=\"file\" id=\"files\"  name=\"photo[]\">");
    });
    //双击的时候,删除图标出现
    var touchtime = new Date().getTime();
    $(document).on("click", ".moreImgs", function () {
        if (new Date().getTime() - touchtime < 500) {
            $(this).children(".delete").css("display", "block");
        } else {
            touchtime = new Date().getTime();
        }
    });
    //点击删除图标 删除节点和删除add相应的input
    $(document).on("click", ".delete", function () {
        var index = $(this).parents().index();
        $(this).parent().remove();
        $(".add").find("input:eq(" + index + ")").remove();
    });
    //点击发送
    $("#send").on("click", function () {
        if ($(".message").val().length == 0) {
            $(".reveal-modal").css("animation", "reveal-modal 0.3s ease-in forwards").delay(1000).slideUp(300);
            $(".reveal-modal h1").html("内容不能为空哦");
            return;
        }
        else {
            //上传头像+发布留言
                var arr=''
                $('.moreImgs img').each(function(i,item){
                    arr+=$(item).attr('src')
                })
                console.log(arr)
                $.ajax({
                    url:'php/index.php?c=Login&a=riji_register',
                    type: 'post',
                    data: {
                        countes: $('#text').val(),
                        img:arr,
                        name:111,
                    },
                    success:function(data) {
                        console.log(data)
                        var str=JSON.parse(data)
                        if (str.code=='200') {
                            alert('上传成功')
                        }
                    }
                })
        }
    })
});