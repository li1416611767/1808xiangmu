$.ajax({
    url: 'php/index.php?c=Login&a=query',
    type: 'post',
    data: {
        id: 'id',
    },
    success: function (data) {
        var json = JSON.parse(data)
        $.each(json, function (i, item) {

            var d = new Date().getTime();
            var e = Math.ceil(d / 1000)
            var f = e - item.time
            // d.setTime(data[i].time*1000);


            var timer1 = item.time
            var time = ((new Date().getTime() / 1000) - timer1)
            // console.log(time)
            var days = Math.floor(time / (24 * 3600))
            var leave1 = time % (24 * 3600)
            var hours = Math.floor(leave1 / (3600))
            var leave2 = leave1 % (3600)
            var minutes = Math.floor(leave2 / (60))
            var leave3 = leave2 % (60)
            var seconds = Math.round(leave3)
            var cha;
            if (days <= 3) {
                if (days != 0) {
                    cha = days + '天前'
                }
                else if (days == 0 && hours != 0) {
                    cha = hours + '小时前'
                }
                else if (days == 0 && hours == 0 && minutes != 0) {
                    cha = minutes + '分钟前'
                }
                else{
                    cha = '刚刚'
                }
            }
            var xuan=JSON.parse(localStorage.userimg)
            var img=item.img.split(',')
            $('.big').append(`<div id="numb"><div id="numbimg"><img src="${item.logoimg}" alt=""></div>
        <div id="numbcountes">
            <p>${item.name}</p>
            <p id="ptime">${cha}</p>
            <p>${item.countes}</p>
        <p class="p"></p>
        </div></div>`)
        $(img).each(function(j,item){
            console.log(i)
            console.log(item)
            if (item=='') {
                return;
            }
            $('.p').eq(i).append(`<img src="${item}" alt="" style="height:4rem;width:4rem;float:left;margin-left:30px">`)
        })
        })

    }
})
$('#add img').click(function(){
    window.location.href="riji.html"
})
$('.click img').click(function(){
    window.location.href="index.html"
})