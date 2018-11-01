<?php

//var_dump($_POST);
//exit;

try {
    $conn = new PDO("mysql:host=localhost;dbname=walk", "root", "root");
}
catch(PDOException $e)
{
    echo "Error: " .$e->getMessage();
}
$email =$_POST['email'];
$password =$_POST['password'];
$query = "INSERT INTO users (email, password) VALUES ('$email', '$password')";

$result = $conn->query($query);
if($result){
echo json_encode (true);
} else {
    echo json_encode (false);
}
?>