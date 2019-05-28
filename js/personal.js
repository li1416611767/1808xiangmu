$("#myUpload").upload({uploadPath:'php/upload.php', isMulti:false,callback:function(msg){}});
$('#phone').val(localStorage.username)
$('#btn').click(function(){
    $.ajax({
        url:'php/index.php?c=Login&a=personal_register',
        type:'post',
        data:{
            img:$('.table-cell img').attr('src'),
            name:$('#username').val(),
            phone:$('#phone').val(),
            text:$('#messages').val(),
        },
        success:function(data){
            var str=JSON.parse(data);
            if (str.code) {
                window.location.href='index.html'
                alert('保存成功')
            }
        }
    })
})
$('.aside').click(function(){
    window.location.href='index.html'
})