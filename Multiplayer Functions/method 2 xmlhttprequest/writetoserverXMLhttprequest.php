<?php
/*
This php script receives string data from gameinit.html,
should process string into array for further use
*/

$pass = file_get_contents("php://input");//pass is now string from JS.
$pass = json_decode($pass);//pass is now php array.

require_once('./private/connection.php');//use secure connection file.

/*
Insert data from array into SQL. Don't need to specify columns since whole row is populated except ID. 
$result call with requireonce uses secure credentials to access database.
*/

$sql = "INSERT INTO gameboard VALUES ($pass[0],$pass[1],$pass[2],$pass[3],$pass[4],
$pass[5],$pass[6],$pass[7],$pass[8],$pass[9],$pass[10],$pass[11])";
$result = $connection->query($sql);

?>