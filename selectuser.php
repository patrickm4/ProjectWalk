<?php

try {
    $conn = new PDO("mysql:host=localhost;dbname=walk", "root", "root");
}
catch(PDOException $e)
{
    echo "Error: " .$e->getMessage();
}

$email =$_POST['email'];
$password =$_POST['password'];

//$query = "SELECT * FROM users";
$query = "SELECT * FROM users WHERE email='$email' AND password='$password'";

$result = $conn->query($query);
if($result){
$users = $result->fetchAll();
echo json_encode($users);
} else {
    echo json_encode (false);
}
?>