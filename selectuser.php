<?php

try {
    $conn = new PDO("mysql:host=a07yd3a6okcidwap.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;dbname=p3slyityqr9arsx2", "gupazml2ebchali0", "ng7ehrbl1adzi9q0");
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