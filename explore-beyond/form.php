<?php

// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$tour = $_POST['tour'];

// Validar los datos (por ejemplo, para evitar campos vacíos)
if (empty($nombre) || empty($correo) || empty($tour)) {
    echo '<p class="enviado-correctamente">Enviado correctamente</p>';
    echo '<script type="text/javascript">window.location.href = "index.html?success=correo_enviado";</script>';
    exit;
}

// Configurar la información del correo electrónico
$to = 'hernandezgalvezalejandro@gmail.com'; // Reemplaza con tu correo electrónico de Gmail
$subject = 'Formulario de contacto Explore Beyond';
$body = "Nombre: $nombre\nCorreo: $correo\nTour: $tour";

// Enviar el correo electrónico
if (mail($to, $subject, $body)) {
    echo '<script type="text/javascript">alert("¡Formulario enviado con éxito!");</script>';

    // Redireccionar a la página principal con un mensaje de éxito
    header('Location: index.php?success=correo_enviado');
    exit;
} else {
    header('Location: index.html?error=correo_no_enviado'); // Redireccionar a la página principal con un mensaje de error
    exit;
}

?>