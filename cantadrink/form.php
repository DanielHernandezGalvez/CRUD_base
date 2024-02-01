<?php
// Capturar datos del formulario
$nombre = $_POST['name'];
$email = $_POST['email'];
$mensaje = $_POST['message'];

// Validar datos (reemplaza con tu lógica de validación)
if (empty($nombre) || empty($email) || empty($mensaje)) {
  $error = "Completa todos los campos.";
} else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $error = "Correo electrónico no válido.";
} else {
  // **Configurar correo electrónico**
  $destinatario = "hernandezgalvezalejandro@gmail.com"; // Reemplaza con tu dirección de Gmail
  $asunto = "Formulario de contacto";
  $cuerpo = "**Nombre:** $nombre\n**Correo electrónico:** $email\n**Mensaje:** $mensaje";

  // **Enviar correo electrónico**
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/plain; charset=utf-8\r\n";
  $headers .= "From: $email\r\n";

  if (mail($destinatario, $asunto, $cuerpo, $headers)) {
    $success = "¡Formulario enviado exitosamente!";
    header("Location: index.php");
  } else {
    $error = "Error al enviar el correo electrónico.";
    // Alert
    header("Location: index.php");
    echo "<script>alert('$error');</script>";
  }
}

// Mostrar mensaje de error o éxito
if (isset($error)) {
  echo "<p class='error'>$error</p>";
  header("Location: index.php");
  echo "<script>alert('$error');</script>";
} else if (isset($success)) {
  echo "<p class='success'>$success</p>";
}
?>