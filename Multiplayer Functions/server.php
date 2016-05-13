<?php
/*Receives string data from gameinit.html,
should process string into array for further use*/

$pass = $POST['arrayToString'];
$arrayName = explode(",", $pass); 

/*Connect to database to write*/

$servername = "mysql7.000webhost.com";
$username = "a1753342_player";
$password = "player123!";
$database = "a1753342_databas";

/*create connection*/

$con = mysqli_connect($servername, $username, $password, $database);

/*check connection*/

if(!$conn) {
	die("connection failed!" . mysqli_connect_error());
	}
	
/*Insert data from array into SQL. Don't need to specify columns
since whole row is populated except ID.*/

$sql = "INSERT INTO mainGame VALUES (arrayName[0],arrayName[1],arrayName[2],
arrayName[3],arrayName[4],arrayName[5],arrayName[6],arrayName[7],arrayName[8],
arrayName[9],arrayName[10],arrayName[11]);
