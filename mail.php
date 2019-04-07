<?php

header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])) die();

if($_POST) {

	// set response code - 200 OK

	http_response_code(200);
	$subject = "New message received from Pegasus Imagery Website";
	$to = "info@pegasusimagery.ca";
	$from = strip_tags($_POST['email']);

	// data

	$msg = '<html><body>';
	
	$msg .= "<h3 style=\"display:inline;\">Name: </h3><p style=\"font-size:15px;display:inline;\">" . $_POST['name'] . "</p><br />";

	if($_POST['company']) $msg .= "<h3 style=\"display:inline;\">Company: </h3><p style=\"font-size:15px;display:inline;\">" . $_POST['company'] . "</p><br />";

	if ($_POST['phone']) $msg .= "<h3 style=\"display:inline;\">Phone: </h3><p style=\"font-size:15px;display:inline;\">" . $_POST['phone'] . "</p><br />";

	$msg .= "<br />";

	$msg .= "<h3 style=\"display:inline;\">Email: </h3><p style=\"font-size:15px;display:inline;\">" . $_POST['email'] . "</p><br />";

	$msg .= "<h3 style=\"display:inline;\">Inquiry Type: </h3><p style=\"font-size:15px;display:inline;\">" . $_POST['inquiry'] . "</p><br />";	

	$msg .= "<h3 style=\"display:inline;\">Message: </h3><p style=\"font-size:15px;display:inline;\">" . $_POST['message'] . "</p><br />";

	$msg .= '</body></html>';

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">\r\n";
	$headers.= "Reply-To: ". $from . "\r\n";
	mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );

	echo json_encode(array(
		"sent" => true
	));
}
else {

	// tell the user about error

	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
}

?>