<?php
$nombre = $_POST['nombreEmpresa'];
$telefono = $_POST['telefonoContacto'];
$ciudad = $_POST['ciudadContacto'];
$mail = $_POST['mailContacto'];

$body = <<<HTML
    <h2>Contacto desde Pagina Web</h2>
    <p>De: $nombre / $mail </p>
    <h3>Mensaje: </h3>
    <p>Quiero ser contactad@ y recibir mas informacion:<br>
        $telefono<br>
        $ciudad<br>
        $mail<br>
    </p>
HTML;

$headers ="MIME-Version: 1.0 \r\n";
$headers.="Content-type: text/html; charset=utf-8 \r\n";
//REMITENTE (NOMBRE/APELLIDO)
//ASUNTO
//CUERPO
mail('sanityking@gmail.com', 'Email pagina web', $body, $headers);

header("Location:https://sanityking.com/#contacto");
