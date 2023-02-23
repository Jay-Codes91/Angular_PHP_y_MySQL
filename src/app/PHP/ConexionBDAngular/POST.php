<?php

include "Conexion.php";

$persona = json_decode(file_get_contents("php://input"));

$exec = "INSERT INTO personas(Cedula, Nombre, Edad) VALUES ('$persona->cedula', '$persona->nombre', $persona->edad)";
$response =  mysqli_query($con, $exec);

echo json_encode($response);
