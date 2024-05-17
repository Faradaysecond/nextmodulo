<?php

$name = $_POST['name'];
$subject = "Nowy zapis na newsletter";
$to = "info@nextmodulo.com";

$txt = "Email: " . $name;

$headers = "From: " . $name;

$mail_status = mail($to, $subject, $txt, $headers);

if($mail_status){
    $redirect = $_SERVER['HTTP_REFERER'];
    header("Location: $redirect?mail_status=sent");
} else {
    $redirect = $_SERVER['HTTP_REFERER'];
    header("Location:   $redirect?mail_status=error");
}

$redirect = $_SERVER['HTTP_REFERER'];



echo $redirect;

// if($mail_status){
//     header("Location: /index.html?mail_status=sent");
// } else {
//     header("Location:  /index.html?mail_status=error");
// }



