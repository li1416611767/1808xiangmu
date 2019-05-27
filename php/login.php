<?php
	$names=$_REQUEST['names'];
	$pwds=$_REQUEST['pwds'];
	//创建对象并打开连接，最后一个参数是选择的数据库名称
	$mysqli = new mysqli('localhost','root','root','test');
	//检查连接是否成功
	if (mysqli_connect_errno()){
		//注意mysqli_connect_error()新特性
		die('Unable to connect!'). mysqli_connect_error();
	}
	$mysqli->query("SET NAMES utf8");//编码
	$sql = "select password from user where username='{$names}'";
	//$sql = "select userPwd from user";
	//执行sql语句，完全面向对象的
	$result = $mysqli->query($sql);
	$temp=0;
	while($row = $result->fetch_array()){
		if($pwds==$row[0]){
			$temp=1;
		}
	}
	if($temp==1){
		echo "1";
	}
	else{
		echo '0';
	}
?>