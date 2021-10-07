<?php
//lectura del destinario
    $destinatario = 'jasvo1902@gmail.com';
//estos son los mismos campos que definiste en el index 
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];
    
//mensaje que llevara el header o encabezado
    $header = "Enviado desde la pagina de J&L electronics";

//concatenamos las variables para formar el mensaje
$mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

//funsion para enviar el correo
    mail($destinatario, $asunto, $mensajeCompleto, $header);

//notificacion de envio de correo
    echo "<script>alert('Correo enviado exitosamente')</script>";

//definimos que una vez enviado el correo nos redirija a la pagina principal que para el caso sera index
    echo "<script> setTimeout(\"location.href='../index.php'\",1000)</script>"; 


?>