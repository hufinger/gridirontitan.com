<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'hufinger18@gmail.com';
    $email_subject = "New User Message";
    $email_body = "User Name: $name. \n".
        "User Email: $visitor_email. \n".
        "User Message $message.\n";

    $to = "hufinger18@gmail.com";

    $headers = "From: $email_from \r\n";
    
    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$emai_subject,$email_body,$headers);
    
    header("Location: index,html");
?>