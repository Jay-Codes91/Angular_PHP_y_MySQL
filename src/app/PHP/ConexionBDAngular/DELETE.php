<?php

include "Conexion.php";
$output = json_decode(file_get_contents('php://input'), true);
$idPersona = $output['ID'];

$exec = "DELETE from personas WHERE ID = $idPersona";

$response =  mysqli_query($con, $exec);

echo json_encode($response);
