<?php
$db=@mysql_connect('localhost', 'root', 'root') or @mysql_connect('localhost', 'root', 'admin');

mysql_query("set names 'utf8'");
mysql_query('CREATE DATABASE anlian');

mysql_select_db('anlian');

$sql= <<< END
CREATE TABLE  `anlian`.`anlian` (
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`img` TEXT NOT NULL ,
`name` INT NOT NULL ,
`countes` INT NOT NULL ,
`time` INT NOT NULL
) CHARACTER SET utf8 COLLATE utf8_general_ci
END;

mysql_query($sql);

//正式开始

//header('Content-type:zns/json');

$act=$_GET['act'];
// echo $act
$PAGE_SIZE=6;

switch($act)
{
	case 'add':
		$content=urldecode($_GET['content']);
		$time=time();
		
		$content=str_replace("\n", "", $content);
		
		$sql="INSERT INTO liuyan (id, img, name, countes, time) VALUES(0, '{$content}', {$time}, 0, 0)";
		
		mysql_query($sql);
		
		$res=mysql_query('SELECT LAST_INSERT_ID()');
		
		$row=mysql_fetch_array($res);
		
		$id=(int)$row[0];
		
		echo "{error: 0, id: {$id}, time: {$time}}";
		break;
	case 'get_page_count':
		$sql="SELECT COUNT(*)/{$PAGE_SIZE}+1 FROM liuyan";
		
		mysql_query($sql);
		
		$res=mysql_query($sql);
		
		$row=mysql_fetch_array($res);
		
		$count=(int)$row[0];
		
		echo "{count: {$count}}";
		break;
	case 'get':  //获得一页数据
		$page=(int)$_GET['page'];
		if($page<1)$page=1;
		
		$s=($page-1)*$PAGE_SIZE;
		
		$sql="SELECT id, img, name, countes, time FROM liuyan ORDER BY time DESC LIMIT {$s}, {$PAGE_SIZE}";
		
		$res=mysql_query($sql);
		
		$aResult=array();
		while($row=mysql_fetch_array($res))
		{
			$arr=array();
			array_push($arr, 'id:'.$row[0]);
			array_push($arr, 'img:"'.$row[1].'"');
			array_push($arr, 'name:'.$row[2]);
			array_push($arr, 'countes:'.$row[3]);
			array_push($arr, 'time:'.$row[4]);
			
			array_push($aResult, implode(',', $arr));
		}
		if(count($aResult)>0)
		{
			echo '[{'.implode('},{', $aResult).'}]';
		}
		else
		{
			echo '[]';
		}
		break;
?>