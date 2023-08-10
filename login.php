<?php 
    $em = $_POST['email'];
    $pass = $_POST['password'];

    $sql = "SELECT * FROM test_table WHERE email = '$em'";
    $result = mysqli_query($conn, $sql);
    $resultArray = mysqli_fetch_array($result, MYSQL_ASSOC);
    if($resultArray){
        if(){
            
            header("Location:http://localhost:8888/lab.html"); //the order page 
            die();
        }else{
            echo "Password is incorrect";
        }
    }else{
        echo "Email does not exist";
        header("Location:http://localhost:8888/reg.html");
    }

?>