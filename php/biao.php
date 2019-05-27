<?php
header("content-type:text/html;charset=utf-8");
$conn = new mysqli('localhost', 'root', 'root','anlian');
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
$sql = "CREATE TABLE liuyan (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    img VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    countes VARCHAR(255) NOT NULL,
    time VARCHAR(255) NOT NULL
    )";
    if ($conn->query($sql) === TRUE) {
        echo "成功";
    } else {
        echo "创建数据表错误: ";
    }
    $conn->close();
?>