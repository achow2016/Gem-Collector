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
	
/*Insert data from array into SQL*/

$sql = "INSERT INTO mainGame"	