<?php
/*
 * 登录控制器
 */
class LoginController{
    /*
     * 插入方法
     */
    public function riji_register(){
        //if(IS_AJAX) {
            $data = $_POST;
            $img = $data["img"];
            $name = $data["name"];
            $countes=$data["countes"];
            $data['time']=time();
                $result = M()->add("liuyan", $data);
                if ($result) {
                    echo ajax_return("200", "插入成功", "");
                    exit;
                } else {
                    echo ajax_return("404", "插入失败", "");
                    exit;
                }
        }
    /*
     * 加密方法
     */
    public function verify($str){
        $str=md5(md5($str)."bokan");
        return $str;
    }
}