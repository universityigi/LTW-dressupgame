<?php
    DEFINE('DB_USERNAME', 'root');
    DEFINE('DB_PASSWORD', 'root');
    DEFINE('DB_HOST', 'localhost');
    DEFINE('DB_DATABASE', 'accounts');
    
    $nome = $_POST['nome'];
    $cognome = $_POST['cognome'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $username = $_POST['username'];
    $data = $_POST['data'];
    $return_data = array();

    $mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE); //nuovo oggetto di conn con questi parametri
  
    if ($mysqli->connect_error) {
        die('Connect Error ('.$mysqli->connect_errno.') '.$mysqli->connect_error);
    }
    
    $stmt = "SELECT * FROM users where email='$email'";  //scrivo query
    $mysqli_result = $mysqli->query($stmt);              // la mando in esecuzione
    
    if($mysqli_result->num_rows == 1) {
        $return_data['status'] = false;
        $return_data['errore'] = "Attenzione esiste già un account legato a questo indirizzo email.";
    }
    else{
        $stmt = "INSERT INTO users (nome, cognome, dataNascita, username, email, password) VALUES ('$nome', '$cognome', '$data', '$username', '$email','$password')";
        $mysqli_result = $mysqli->query($stmt);
        if($mysqli_result === FALSE){
            $return_data['status'] = false;
            $return_data['errore'] = "Attenzione c'è stato un errore nella registrazione, riprova.";
        }
        else{
            $return_data['status'] = true;
        }
    }

    $mysqli->close();
    echo json_encode($return_data);
?>