<?php
require_once '../vendor/autoload.php';
require_once '../secrets.php';

// \Stripe\Stripe::setApiKey('sk_test_51P6aVDBacad2NXeV6wdNwV5rzZ8CKPlcbipKqAYGxu2MXS823dUv2bBX2TkS68lzr2XblzjNwONInj9HWFcufTZC00mvInYWHT');
// Replace this endpoint secret with your endpoint's unique secret
// If you are testing with the CLI, find the secret by running 'stripe listen'
// If you are using an endpoint defined with the API or dashboard, look in your webhook settings
// at https://dashboard.stripe.com/webhooks
// $endpoint_secret = 'whsec_vjFAQjMn9yAgHONZ17fzzHHyzsygQ9sq';

		// This function is leveraged to search through the JSON for specific values
		function searchArrayValueByKey(array $array, $search) {
			foreach (new RecursiveIteratorIterator(new RecursiveArrayIterator($array)) as $key => $value) {
			    if ($search === $key)
				return $value;
			}
				return false;
			}

$input = @file_get_contents("php://input");			// this gets the POST data provided when the webhook pings this page

$event_json = json_decode($input, TRUE);			// decode the JSON, and TRUE turns it into a multidimensional array

$type = searchArrayValueByKey($event_json, 'type'); // Check the type of event sent from Stripe.com - example "charge.succeeded"

switch ($type) {									// depending on the event fired by Stripe, do something different. 
    case "account.updated":
		// do something
		break;
    case "balance.available":
		// do something
		break;
    case "checkout.session.succeeded":
      $customerID    = searchArrayValueByKey($event_json, 'customer');
			$customerName  = searchArrayValueByKey($event_json, 'name');
			$customerEmail = searchArrayValueByKey($event_json, 'receipt_email');
			//constuct the email
			$youremail= 'info.stembotics@gmail.com'; 	// set your email address
			$subject  = 'Test webhooks';	// set the subject
			$headers  = "From: " . strip_tags($customerName) . "<" . strip_tags($customerEmail) . ">\r\n";
			$headers .= "Reply-To: ". strip_tags($customerEmail) . "\r\n";
			$headers .= "MIME-Version: 1.0\r\n";
			$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
			$message = 'The customer with ID "'.$customerID.'" just pre registered';
			// actually send the email
			@mail($youremail, $subject, $message, $headers);
		break;
    case "charge.refunded":
		// do something
		break;
    case "charge.succeeded":
		// do something
		break;
    case "charge.updated":
		// do something
		break;
    case "charge.failed":
		// do something
		break;
    case "charge.dispute.created":
		// do something
		break;
    case "charge.dispute.updated":
		// do something
		break;
    case "charge.dispute.closed":
		// do something
		break;
    case "coupon.created":
		// do something
		break;
    case "coupon.deleted":
		// do something
		break;
    case "customer.created":
		// do something
		break;
    case "customer.updated":
		// do something
		break;
    case "customer.deleted":
		// do something
		break;
    case "customer.card.created":
		// do something
		break;
    case "customer.card.updated":
		// do something
		break;
    case "customer.card.deleted":
		// do something
		break;
    case "customer.discount.created":
		// do something
		break;
    case "customer.discount.updated":
		// do something
		break;
    case "customer.discount.deleted":
		// do something
		break;
    case "customer.subscription.created":
		// do something
		break;
    case "customer.subscription.updated":
		// do something
		break;
    case "customer.subscription.deleted":
		// do something
		break;
    case "customer.subscription.trial_will_end":
		// do something
		break;
    case "invoice.created":
		// do something
		break;
    case "invoice.updated":
		// do something
		break;
    case "invoice.payment_succeeded":
		// do something
		break;
    case "invoice.payment_failed":
		// do something
		break;
    case "invoiceitem.created":
		// do something
		break;
    case "invoiceitem.updated":
		// do something
		break;
    case "invoiceitem.deleted":
		// do something
		break;
    case "plan.created":
		// do something
		break;
    case "plan.updated":
		// do something
		break;
    case "plan.deleted":
		// do something
		break;
    case "transfer.created":
		// do something
		break;
    case "transfer.updated":
		// do something
		break;
    case "transfer.paid":
		// do something
		break;
    case "transfer.failed":
		// do something
		break;
    default:
		
}

		/*
		EXAMPLE - UPDATE A MYSQL DATABASE
			
			//get some of the customers details from the webhook
			$customerID    = searchArrayValueByKey($event_json, 'customer');
			$customerName  = searchArrayValueByKey($event_json, 'name');
			$customerEmail = searchArrayValueByKey($event_json, 'receipt_email');
			
			// your MySQL database credentials
			$servername = "localhost";
			$username = "username";
			$password = "password";
			$dbname = "myDB";
			
			$conn = mysqli_connect($servername, $username, $password, $dbname);		// connect to your database
			$sql = "UPDATE MyGuests SET lastname='Doe' WHERE id=2";					// build the query
			mysqli_query($conn, $sql);												// actually tap the database
			mysqli_close($conn);													// close the connection
		
		*/

http_response_code(200);
?>