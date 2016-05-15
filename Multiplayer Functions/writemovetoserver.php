<?php
/*This php script receives string data from gameinit.html,
should process string into array for further use*/
$pass = $POST['arrayToString'];
$arrayName = explode(",", $pass); 
require_once('./private/connection.php');
/*
Insert data from array into SQL. Don't need to specify columns since whole row is populated except ID. $result call with requireonce uses secure credentials to access database.
*/
$sql = "INSERT INTO gameboard VALUES (arrayName[0],arrayName[1],arrayName[2],
arrayName[3],arrayName[4],arrayName[5],arrayName[6],arrayName[7],arrayName[8],
arrayName[9],arrayName[10],arrayName[11])";
$result = $connection->query($sql);
/*passed back to AJAX call.*/
echo 'move sent!';
?>