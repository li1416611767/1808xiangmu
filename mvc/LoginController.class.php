<?php
/*
 * 登录控制器
 */
class LoginController{
    /*
     * 注册方法
     */
    public function register(){
        //if(IS_AJAX) {
            $data = $_POST;
            $username = $data["username"];
                $result = M()->add("user", $data);
                if ($result) {
                    echo ajax_return("200", "插入成功", "");
                    exit;
                } else {
                    echo ajax_return("404", "插入失败", "");
                    exit;
                }
        }

    // public function verify($str){
    //     $str=md5(md5($str)."bokan");
    //     return $str;
    //}
}