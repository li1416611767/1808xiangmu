<?php
/*
 * 登录控制器
 */
class LoginController{
    /*
     * 插入方法
     */
    public function register(){
            $data = $_POST;
            $tel = $data["tel"];
            $old_data = M()->query_sql("SELECT * FROM data WHERE tel='{$tel}'");
            $old_data = current($old_data);
            $result = M()->add("data", $data);
                if ($result) {
                    echo ajax_return("200", "插入成功", $old_data);
                    exit;
                } else {
                    echo ajax_return("404", "插入失败", "");
                    exit;
                }
        }
    //查询数据库
    public function query(){
        $data = $_POST;
        $head = $data["head"];
        $old_data= M()->query_sql("SELECT head FROM data");
        $old_data= current($old_data);
        if (!empty($old_data)) {
            echo ajax_return("505", "用户名已存在", $old_data);
            exit;
        }
    }
    
    
		 public function change(){
			$data = $_POST;
			$head = $data['head'];
			$name = $data['name'];
			$tel = $data['tel']; 
			$talk = $data['talk']; 
			$result=M()->update("data",Array('head'=>"$head",'name'=>"$name",'talk'=>"$talk"),"tel",$tel);
			echo "1";
		}
    
		
    /*
     * 加密方法
     */
    public function verify($str){
        $str=md5(md5($str)."bokan");
        return $str;
    }
}