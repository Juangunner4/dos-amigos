<?php

session_start();

if ($_POST) {

    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];
    $visitor_phone = $_POST['phone'];

    $email_subject = "Contact:New Form Submission";

    $email_body = "Client Name: $name.\n".
                    "User Email: $visitor_email.\n".
                    "User Phone: $visitor_phone.\n".
                        "User Message: $message.\n";

    $to = "2amigosmovingexpress@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers = "Reply-To: $visitor_email \r\n";

    if (mail($to,$email_subject,$email_body,$headers)) {
      header("Location: emailsent");

    }
    else
    {
      echo "<p>Mail not Sent</p> ";
  	  $email_from = "contact@dosamigosmoving.com";
  	  $email_subject = "New Form Submission Error";
  	  $email_body = "was not able to send email to $to.\n".
                    " $visitor_email is requesting access ".
  	  $errorto = "contact@dosamigosmoving.com";
  	  $headers = "From: $email_from \r\n";
  	  $headers = "Reply-To: $visitor_email \r\n";
  	  mail($errorto,$email_subject,$email_body,$headers);
    }

} else {
  echo "<p>Something went wrong</p>]";
}

?>
