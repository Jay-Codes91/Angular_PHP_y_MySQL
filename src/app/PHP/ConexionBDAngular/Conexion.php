<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Credentials: true');
    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Content-Type: application/json; charset=UTF-8");
    
    $serv = "127.0.0.1";
    $user = "root";
    $pass = "";
    $db = "usuarios";
    $con = mysqli_connect($serv, $user, $pass, $db);

    /*if($con){
        echo "Conexion exitosa";
    }else{
        echo "No hay conexion";
    }*/
?>