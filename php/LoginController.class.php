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
        public function register1(){
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
    
            public function query1(){
                $data = $_POST;
                $page = $data["page"];
                $old_data1 = M()->query_sql("SELECT * FROM user WHERE username={$page}");
                $counta=count($old_data1);
                if ($counta) {
                    echo ajax_return('200','',$old_data1);
                }
                else{
                    echo ajax_return('404','',$old_data1);
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