<?php
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $casada = $_POST['casada'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $fecha = $_POST['fecha'];

    // Configurar la información del correo electrónico
    $correoDestinatario = "correo@correo.com"; // Tu correo electrónico
    $asunto = "Formulario de contacto";
    $mensaje = "Datos del formulario:\n\n";
    $mensaje .= "Nombre: $nombre\n";
    $mensaje .= "Apellido: $apellido\n";
    $mensaje .= "Segundo appellido o casada: $casada\n";
    $mensaje .= "Teléfono: $telefono\n";
    $mensaje .= "Email: $email\n";
    $mensaje .= "Fecha de cumpleaños: $fecha\n";

    // Enviar el correo electrónico
    mail($correoDestinatario, $asunto, $mensaje);

    // Redireccionar a una página de agradecimiento
    header("Location: index.html"); // Cambia "gracias.html" por la página que deseas mostrar
