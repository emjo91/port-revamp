<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$from = 'From: emilyjohnson.xyz' 
$to = '3mle33@gmail.com'; 
$subject = 'Hello,';

$body = "From: $name\n E-Mail: $email\n Message:\n $message";

if ($_POST['submit']) {
    mail ($to, $subject, $body, $from)) 
}
?>