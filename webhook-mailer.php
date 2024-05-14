<?php

// Get the webhook data from the request body
$request = file_get_contents('php://input');
$data = json_decode($request, true);

// Extract the email data from the webhook data
$name = $data['form_data']['name'];
$email = $data['form_data']['email'];

// Set the email subject and body
$subject = 'Stembotics Request Recieved';
$body = "Hey there $name,\n We recieved your inquiry, expect a follow-up email in around 24 hours.\n\nThanks,\nStembotics Academy ";

// Set the email headers
$headers = array(
    'From' => 'info@stembotics.org'
);

// Send the email using the mail() function
if (mail($email, $subject, $body, implode("\r\n", $headers))) {
    echo "Email sent successfully!";
} else {
    echo "Error sending email!";
}

?>