<?php 
   $conn = mysqli_connect("localhost", "root", "", "login_register" );
    if(!$conn){
         die("Error connecting to database: " . mysqli_connect_error());
    }
?>