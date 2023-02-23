<?php

include "Conexion.php";

$exec = "select * from personas";
$personas = mysqli_query($con, $exec);
$person = [];

$result = $con->query($exec);
$myArr = array();
if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        $myArr[] = $row;
    }
} else {
    echo "0 results";
}
$myJSON = json_encode($myArr);
echo $myJSON;
