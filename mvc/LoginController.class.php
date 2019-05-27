<?php
/*
 * 登录控制器
 */
class LoginController{
    
    //查询数据库
    public function query(){
        $data = $_POST;
        $id=$data['id'];
        $old_data1 = M()->query_sql("SELECT * FROM liuyan ORDER BY $id DESC");
        echo json_encode($old_data1);
    }
    public function verify($str){
        $str=md5(md5($str)."bokan");
        return $str;
    }
}