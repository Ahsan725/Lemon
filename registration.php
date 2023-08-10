<?php

$nam = $_POST['fullname'];
$em = $_POST['email'];
$pass = $_POST['password'];
$passwordRepeat = $_POST["repeat_password"];

/* this is the code for checking the log in details 
$a = "admin";
$p = "admin123";

if(($um == $a) && ($ps == $pass)){
    header("Location:http://localhost:8888/summary.html");
    exit();
}
else{
    echo "Login failed";
}
*/

$conn = mysqli_connect("localhost", "root", "root", "login_register");

$sql = "SELECT * FROM test_table WHERE email = '$em'";
$result = mysqli_query($conn, $sql);
$rowCount = mysqli_num_rows($result);
if($rowCount > 0){
    echo "Email already exists"; //this is the error message that will be displayed if the email already exists
    exit();
}

if($pass == $passwordRepeat){
    $sql = "INSERT INTO test_table (full_name, email, password) VALUES ('$nam', '$em', '$pass')";
}else{
    echo "Passwords do not match";
    exit();
}
$result = mysqli_query($conn, $sql);
if($result){
    echo "Account created!";
}
else{
    echo "Error: Account Creation was unsuccessful";
}

$mysqli->close();

?>