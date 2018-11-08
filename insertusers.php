<?php

//var_dump($_POST);
//exit;

try {
    $conn = new PDO("mysql:host=a07yd3a6okcidwap.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;dbname=p3slyityqr9arsx2", "gupazml2ebchali0", "ng7ehrbl1adzi9q0");
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