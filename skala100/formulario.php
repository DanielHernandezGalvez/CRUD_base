function send_email($to, $subject, $body) {
    $headers = array(
        'From: [Tu dirección de correo electrónico]',
        'Reply-To: [Tu dirección de correo electrónico]',
    );

    return mail($to, $subject, $body, $headers);
}

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $reason = $_POST['reason'];
    $message = $_POST['message'];

    $subject = "Formulario de contacto de [Tu nombre de empresa]";
    $body = "
Nombre: $name
Correo electrónico: $email
Teléfono: $phone
Motivo de contacto: $reason
Mensaje: $message

Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.";

    if (send_email($email, $subject, $body)) {
        echo "El correo electrónico se envió correctamente.";
    } else {
        echo "Se produjo un error al enviar el correo electrónico.";
    }
}