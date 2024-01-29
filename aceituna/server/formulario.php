<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Recibir datos del formulario
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
  
    // Configuración de correo
    $to = "hernandezgalvezalejandro@gmail.com";
    $subject = "Nuevo mensaje desde el formulario";
    $message = "Nombre: $nombre\nCorreo: $correo";
  
    // Enviar correo
    mail($to, $subject, $message);
  
    // Establecer encabezado Location
    header("Location: index.html");
  } 
