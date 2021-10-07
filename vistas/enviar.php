<?php

$paracorreo = "jasvo1902@gmail.com";
$titulo = "esto es una humilde prueba";
$mensaje = "si funciona solo deves acoprarlo";
$tucorreo = "From:hardatasas@gmail.com";

if(mail($paracorreo, $titulo, $mensaje, $tucorreo)){
    echo "correo enviado";
}else{
    echo "error";
}


?>