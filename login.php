<?php
    DEFINE('DB_USERNAME', 'root');
    DEFINE('DB_PASSWORD', 'root');
    DEFINE('DB_HOST', 'localhost');
    DEFINE('DB_DATABASE', 'accounts');
    
    $email = $_POST['email'];
    $password = $_POST['password'];
    $return_data = array();

    $mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE); //nuovo oggetto di conness con questi parametri
  
    if ($mysqli->connect_error) {
        die('Connect Error ('.$mysqli->connect_errno.') '.$mysqli->connect_error);
    }
    
    $stmt = "SELECT * FROM users where email='$email' and password='$password'";
    $mysqli_result = $mysqli->query($stmt);
    
    if($mysqli_result->num_rows == 1) {
        $return_data['status'] = true;
        
    }
    else{
        $return_data['status'] = false;
        $return_data['errore'] = "Email e/o password errati";
    }

    $mysqli->close();
    echo json_encode($return_data);
?>