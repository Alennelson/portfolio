<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Check if POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get JSON data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate input
if (!$data || !isset($data['name'], $data['email'], $data['subject'], $data['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit();
}

// Sanitize inputs
$name = htmlspecialchars(trim($data['name']));
$from_email = htmlspecialchars(trim($data['email']));
$subject = htmlspecialchars(trim($data['subject']));
$message = htmlspecialchars(trim($data['message']));

// Validate email
if (!filter_var($from_email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit();
}

// Your email address
$to_email = 'alennelson2004@gmail.com';

// Prepare email headers
$headers = "From: " . $from_email . "\r\n";
$headers .= "Reply-To: " . $from_email . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Prepare email body
$email_body = "
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
    .header { background: #ffa500; color: white; padding: 10px; border-radius: 5px; }
    .content { margin: 20px 0; }
    .field { margin: 15px 0; }
    .label { font-weight: bold; color: #ffa500; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <h2>New Contact Form Submission</h2>
    </div>
    <div class='content'>
      <div class='field'>
        <div class='label'>Name:</div>
        <div>" . $name . "</div>
      </div>
      <div class='field'>
        <div class='label'>Email:</div>
        <div><a href='mailto:" . $from_email . "'>" . $from_email . "</a></div>
      </div>
      <div class='field'>
        <div class='label'>Subject:</div>
        <div>" . $subject . "</div>
      </div>
      <div class='field'>
        <div class='label'>Message:</div>
        <div>" . nl2br($message) . "</div>
      </div>
    </div>
  </div>
</body>
</html>
";

// Send email
if (mail($to_email, "Portfolio Contact: " . $subject, $email_body, $headers)) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
?>
