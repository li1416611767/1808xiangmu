(function($){
		//手机号正则验证
	   //获取验证码
	   var off=true;
        var arr=new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
		function obtainCode() {
        value="";
        for(var i=0;i<+4;i++){
            var index=Math.floor(Math.random()*arr.length);
            value+=arr[index]
          }
        }
		obtainCode();
		$('.butt').click(function(){
			$.ajax({
			url:'php/index.php?c=Login&a=query1',
			type:'post',
			data:{
				page:$('#phone').val(),
			},
			success:function(data){
				var str=JSON.parse(data)
				console.log(str)
				if (str.code=='200') {
					off=false;
				}
				else{
					off=true;
				}
			}
		})
			if ($('#phone').val()=='') {
			alert('手机号码不能为空')
			return
		}else (alert(value))
		})

		$('.nums').onblur=function(){
			alert(1)
		}
  
        $('.denglu').click(function(){
		var transCode=code.value.toUpperCase();
		if(yz.value.length==0){
            alert("验证码不能为空");
        }
        yz.value="";
		})





		$('.denglu').click(function(){
			var transCode=code.value.toUpperCase();
		if(yz.value.length==0){
						alert("验证码不能为空");
						return
        }
				yz.value="";
			var reg2 = /^1[34578]{1}\d{9}$/;
	    if(reg2.test($('#phone').val())){
			console.log(21)
		}
		else{
			alert('手机号有误')
			return
		}
		if (off) {
		$.ajax({
			url:'php/index.php?c=Login&a=register1',
			type:'post',
			data:{
				username:$('#phone').val(),
			},
			success:function(data){
                var str=JSON.parse(data);
                console.log(str)
                if (str.code=='200') {
					window.location.href='index.html';
					localStorage.username=$('#phone').val();
                	alert('登录成功')
                }
                
			}
		})
	}
	else{
		window.location.href='index.html';
		localStorage.username=$('#phone').val();
		alert('登录成功')
	}
	})

})(jQuery)