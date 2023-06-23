<?php
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$ciudad = $_POST['ciudad'];
$mail = $_POST['correo'];
$asunto = $_POST['asunto'];

$body = <<<HTML
    <h2>Contacto desde Pagina Web</h2>
    <p>De: $nombre / $mail </p>
    <h3>Mensaje: </h3>
    <p>Quiero ser contactad@ y recibir mas informacion:<br>
        $telefono<br>
        $ciudad<br>
        $mail<br>
        $asunto
    </p>
HTML;

$headers ="MIME-Version: 1.0 \r\n";
$headers.="Content-type: text/html; charset=utf-8 \r\n";
//REMITENTE (NOMBRE/APELLIDO)
//ASUNTO
//CUERPO
mail('comercial1sanityking@gmail.com', 'Email pagina web', $body, $headers);

header("Location:https://sanityking.com/#home");
