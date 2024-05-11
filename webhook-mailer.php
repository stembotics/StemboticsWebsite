<?php
require_once '../vendor/autoload.php';
require_once '../stripe/lib/Stripe.php';
require_once '../stripe/lib/Event.php';
require_once '../stripe/lib/Webhook.php';

Stripe.setApiKey('sk_test_51P6aVDBacad2NXeV6wdNwV5rzZ8CKPlcbipKqAYGxu2MXS823dUv2bBX2TkS68lzr2XblzjNwONInj9HWFcufTZC00mvInYWHT');
// Replace this endpoint secret with your endpoint's unique secret
// If you are testing with the CLI, find the secret by running 'stripe listen'
// If you are using an endpoint defined with the API or dashboard, look in your webhook settings
// at https://dashboard.stripe.com/webhooks
$endpoint_secret = 'whsec_vjFAQjMn9yAgHONZ17fzzHHyzsygQ9sq';

$payload = @file_get_contents('php://input');
$event = null;

try {
  $event = Event.constructFrom(
    json_decode($payload, true)
  );
} catch(UnexpectedValueException $e) {
  // Invalid payload
  echo '⚠️  Webhook error while parsing basic request.';
  http_response_code(400);
  exit();
}
if (true) {
  // Only verify the event if there is an endpoint secret defined
  // Otherwise use the basic decoded event
  $sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];
  try {
    $event = Webhook.constructEvent(
      $payload, $sig_header, $endpoint_secret
    );
  } catch(SignatureVerificationException $e) {
    // Invalid signature
    echo '⚠️  Webhook error while validating signature.';
    http_response_code(400);
    exit();
  }
}

// Handle the event
switch ($event->type) {
  case 'checkout.session.succeeded':
    $paymentIntent = $event->data->object; // contains a \Stripe\PaymentIntent
    // Then define and call a method to handle the successful payment intent.
    // handlePaymentIntentSucceeded($paymentIntent);
    mail('info.stembotics@gmail.com', "TEST", 'webhooks');
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