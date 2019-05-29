var off=true;
	$("#logo").click(function(){
		console.log(111)
		if (off) {
			$("#nav-list").stop().animate({'left':'0'},500);
			$("#logoimg").stop().animate({'left':'65%'},500)
			off=false;
		}
		else{
			$("#nav-list").stop().animate({'left':'-65%'},500);
			$("#logoimg").stop().animate({'left':'0'},500)
			off=true;
		}
	})
	$('.tx').click(function(){
		if ($('#span').text()=='未登录') {
			window.location.href='login.html'
		}
    })
$('#tui').click(function(){
	delete localStorage.username;
    delete localStorage.userimg;	
    window.location.href='login.html'
})
var val=localStorage.username
if (val!=undefined) {
	$('#span').text(val)
	$.ajax({
		url:'php/index.php?c=Login&a=index_query',
		type:'post',
		data:{
			phone:val,
		},
		success:function(data){
			if (data=='') {
				return;
			}
			var str=JSON.parse(data);
			console.log(str)
			$.each(str.data,function(i,item){
				console.log(item)
				$('.tx').attr('src',item.img)
				$('#span').text(item.name)
				localStorage.userimg=JSON.stringify({img:$('.tx').attr('src'),name:$('#span').text()})
			})
		}
	})
	localStorage.userimg=JSON.stringify({img:$('.tx').attr('src'),name:$('#span').text()})
}
else{
	$('.tx').attr('src','images/personal_03.png')
	$('#span').text('未登录');
	localStorage.userimg=JSON.stringify({img:$('.tx').attr('src'),name:$('#span').text()})
}
console.log(111)