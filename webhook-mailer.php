<?php
require_once '../vendor/autoload.php';
require_once '../secrets.php';

\Stripe\Stripe::setApiKey('sk_test_51P6aVDBacad2NXeV6wdNwV5rzZ8CKPlcbipKqAYGxu2MXS823dUv2bBX2TkS68lzr2XblzjNwONInj9HWFcufTZC00mvInYWHT');
// Replace this endpoint secret with your endpoint's unique secret
// If you are testing with the CLI, find the secret by running 'stripe listen'
// If you are using an endpoint defined with the API or dashboard, look in your webhook settings
// at https://dashboard.stripe.com/webhooks
$endpoint_secret = 'whsec_2c413b00338ec42a47c7522ab2b20035328232703852b0d556671a7e179488f5';

$payload = @file_get_contents('php://input');
$event = null;

try {
  $event = \Stripe\Event::constructFrom(
    json_decode($payload, true)
  );
} catch(\UnexpectedValueException $e) {
  // Invalid payload
  echo '⚠️  Webhook error while parsing basic request.';
  http_response_code(400);
  exit();
}
if ($endpoint_secret) {
  // Only verify the event if there is an endpoint secret defined
  // Otherwise use the basic decoded event
  $sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];
  try {
    $event = \Stripe\Webhook::constructEvent(
      $payload, $sig_header, $endpoint_secret
    );
  } catch(\Stripe\Exception\SignatureVerificationException $e) {
    // Invalid signature
    echo '⚠️  Webhook error while validating signature.';
    http_response_code(400);
    exit();
  }
}

// Handle the event
switch ($event->type) {
  case 'checkout.session.completed':
    $checkout = $event->data->object; // contains a \Stripe\PaymentIntent
    // Now that the payment has succeeded, email the customer.
    $customer_id = $checkout->customer;
    $customer_email = $checkout->customer_details->email;
    $customer_name = $checkout->customer_details->name;
    $customer_number = $checkout->customer_details->phone;
    $custom_fields = $checkout->custom_fields;
    $child_name = $custom_fields[0]->text->value;
    $child_age = $custom_fields[2]->numeric->value;
    $email_message = sprintf("Dear %s,\n\nThank you for your payment to Stembotics Academy.\n\nWe are pleased to confirm %s's enrollment for the upcoming class.\n\n%s's first class is scheduled for June 1st.\n\nPlease feel free to contact us at info@stembotics.com if you have any questions.\n\nBest regards,\nStembotics Academy", $customer_name, $child_name, $child_name); 
    mail($customer_email, "Stembotics Reciept Paid", $email_message);
    break;
  case 'payment_method.attached':
    $paymentMethod = $event->data->object; // contains a \Stripe\PaymentMethod
    // Then define and call a method to handle the successful attachment of a PaymentMethod.
    // handlePaymentMethodAttached($paymentMethod);
    break;
  default:
    // Unexpected event type
    error_log('Received unknown event type');
}
http_response_code(200);