<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// =========================================================================
// CONFIGURATION: CHANGE THIS TO THE EMAIL ADDRESS WHERE YOU WANT TO RECEIVE BOOKINGS
// =========================================================================
define("RECEIVER_EMAIL", "Rahulwp007@gmail.com"); 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Receive JSON raw input or standard form POST
    $input = json_decode(file_get_contents("php://input"), true);
    
    if (!$input) {
        $input = $_POST;
    }

    $name = strip_tags(trim($input["name"] ?? ''));
    $email = filter_var(trim($input["email"] ?? ''), FILTER_VALIDATE_EMAIL);
    $phone = strip_tags(trim($input["phone"] ?? ''));
    $date = strip_tags(trim($input["date"] ?? ''));
    $address = strip_tags(trim($input["address"] ?? ''));
    $pest = strip_tags(trim($input["pest"] ?? ''));
    $size = strip_tags(trim($input["size"] ?? ''));
    $notes = strip_tags(trim($input["notes"] ?? ''));
    $price = strip_tags(trim($input["price"] ?? ''));

    // Validate parameters
    if (empty($name) || !$email || empty($phone) || empty($date) || empty($address)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Please complete all required fields correctly."]);
        exit;
    }

    // Set up email subjects
    $subject = "Uttam Business: New Booking Reservation from " . $name;

    // High fidelity email body
    $message = '
    <html>
    <head>
      <title>New Uttam Business Booking Details</title>
      <style>
        body { font-family: "Segoe UI", Arial, sans-serif; line-height: 1.6; color: #334155; margin: 0; padding: 0; background-color: #f8fafc; }
        .wrapper { background-color: #f8fafc; padding: 30px 15px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
        .header { background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%); color: #ffffff; padding: 25px; text-align: center; }
        .header h2 { margin: 0; font-size: 24px; font-weight: 700; }
        .content { padding: 30px; }
        .intro { font-size: 16px; color: #475569; margin-bottom: 20px; }
        .table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        .table th, .table td { padding: 12px 15px; border-bottom: 1px solid #f1f5f9; text-align: left; font-size: 15px; }
        .table th { color: #64748b; width: 35%; font-weight: 600; text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em; }
        .table td { color: #0f172a; font-weight: 500; }
        .notes-section { margin-top: 25px; }
        .notes-title { font-size: 14px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; }
        .notes-box { background-color: #f8fafc; border-left: 4px solid #10b981; padding: 15px; border-radius: 0 8px 8px 0; font-style: italic; color: #475569; font-size: 14px; }
        .footer { font-size: 12px; color: #94a3b8; text-align: center; padding: 20px; background-color: #f8fafc; border-top: 1px solid #f1f5f9; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <div class="header">
            <h2>🛡️ Uttam Business Booking</h2>
          </div>
          <div class="content">
            <p class="intro">You have received a new service booking request from your website form:</p>
            <table class="table">
              <tr><th>Customer Name</th><td>' . htmlspecialchars($name) . '</td></tr>
              <tr><th>Email Address</th><td>' . htmlspecialchars($email) . '</td></tr>
              <tr><th>Phone Number</th><td>' . htmlspecialchars($phone) . '</td></tr>
              <tr><th>Service Date</th><td>' . htmlspecialchars($date) . '</td></tr>
              <tr><th>Property Address</th><td>' . htmlspecialchars($address) . '</td></tr>
              <tr><th>Target Pest</th><td>' . htmlspecialchars(ucfirst($pest)) . '</td></tr>
              <tr><th>Home Size</th><td>' . htmlspecialchars(ucfirst($size)) . '</td></tr>
              <tr><th>Price Quote Lock</th><td style="color: #10b981; font-weight: 700; font-size: 18px;">' . htmlspecialchars($price) . '</td></tr>
            </table>
            
            ' . (!empty($notes) ? '
            <div class="notes-section">
              <div class="notes-title">Customer Notes</div>
              <div class="notes-box">' . nl2br(htmlspecialchars($notes)) . '</div>
            </div>
            ' : '') . '
          </div>
          <div class="footer">
            This notification was automatically sent by the web server at ' . htmlspecialchars($_SERVER['SERVER_NAME']) . '.
          </div>
        </div>
      </div>
    </body>
    </html>
    ';

    // Email Headers
    $headers = [];
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=UTF-8';
    $headers[] = 'From: Uttam Business <no-reply@' . $_SERVER['SERVER_NAME'] . '>';
    $headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';

    if (mail(RECEIVER_EMAIL, $subject, $message, implode("\r\n", $headers))) {
        echo json_encode(["status" => "success", "message" => "Booking email sent successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to dispatch email. Check server configuration."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed."]);
}
?>
