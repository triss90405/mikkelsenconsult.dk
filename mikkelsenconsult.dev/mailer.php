<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the form fields and remove whitespace.
  $name = strip_tags(trim($_POST["name"]));
	$name = str_replace(array("\r","\n"),array(" "," "),$name);
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $message = trim($_POST["message"]);

  // Check that data was sent to the mailer.
  if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Set a 400 (bad request) response code and exit.
    http_response_code(400);
    echo "Oops! lader til at være et problem, udfyld venligs formularen og prøv igen.";
    exit;
  }

  $recipient = "rasmus@mikkelsenconsult.dk";

  $subject = "Besked fra $name";

  $email_content = "<strong>Navn:</strong> $name" . "<br>";
  $email_content .= "<strong>Email:</strong> $email" . "<br><br>";
  $email_content .= "<strong>Message:</strong><br>$message" . "<br>";

  $email_headers = "From: $name <$email>";
  $email_headers .= "Reply-To: ". $email . "\r\n";
  $email_headers .= "MIME-Version: 1.0\r\n";
  $email_headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  if (mail($recipient, $subject, $email_content, $email_headers)) {
    // Set a 200 (okay) response code.
    http_response_code(200);
    echo "Tak for din henvendelse, vi vender tilbage hurtigst muligt";
  } else {
    // Set a 500 (internal server error) response code.
    http_response_code(500);
    echo "Oops! Noget gik galt! Vi har desværre ikke modtaget de besked. Prøv igen.";
  }

} else {
  // Not a POST request, set a 403 (forbidden) response code.
  http_response_code(403);
  echo "Der lader til at være et problem med formularen, prøv igen.";
}

?>
