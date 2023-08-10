<?php 
    $conn = mysqli_connect("localhost", "root", "root", "login_register");
    // Retrieve user inputs
    $em = $_POST['email'];
    $pass = $_POST['password'];

    // Sanitize user inputs to prevent SQL injection
    $em = mysqli_real_escape_string($conn, $em);
    $pass = mysqli_real_escape_string($conn, $pass);

    // Hash the password before querying the database
    // $hashedPass = hash('sha256', $pass); // You can use a stronger hashing algorithm

    // Query to check if the email exists in the database
    $sql = "SELECT * FROM test_table WHERE email = '$em'";
    $result = mysqli_query($conn, $sql);

    if ($result) {
        $row = mysqli_fetch_assoc($result);
        if ($row) {
           
            if ($pass === $row['password']) { 
                header("Location: http://localhost:8888/lab.html"); // Redirect to the order page
                exit();
            } else {
                echo "Password is incorrect";
                header("Location: http://localhost:8888/passnot.html");
            }
        } else {
            // echo "Email does not exist";
            header("Location: http://localhost:8888/emailnot.html");
            exit();
        }
    } else {
        echo "Database error: " . mysqli_error($conn);
    }

    // Close the database connection
    mysqli_close($conn);
?>
