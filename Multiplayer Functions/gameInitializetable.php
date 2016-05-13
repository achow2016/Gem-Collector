<?php
/*PHP script initializes SQL table.*/

$servername = "mysql7.000webhost.com";
$username = "a1753342_player";
$password = "player123!";
$database = "a1753342_databas";

//create connection
$con = mysqli_connect($servername, $username, $password, $database);

//check connection
if(!$conn) {
	die("connection failed!" . mysqli_connect_error());
	}

//create table, as database exists.
//Database is a1753342_databas
//Info in control panel.
//DROP TABLE maingame to destroy.

$sql = "CREATE TABLE mainGame(
	id int NOT NULL AUTO-INCREMENT,
	PRIMARY KEY (ID),
	OneSquare INT(999),
	TwoSquare INT(999),
	ThreeSquare INT(999),
	FourSquare INT(999),
	FiveSquare INT(999),
	SixSquare INT(999),
	SevenSquare INT(999),
	EightSquare INT(999),
	NineSquare INT(999),
	TenSquare INT(999),
	ElevenSquare INT(999),
	TwelveSquare INT(999)
	)"
/*Close connection to database*/	
if(mysqli_query($conn, $sql) {
	echo "ok";
	} else {
		echo "Connection Error" . mysql_error($conn);
	}	
	



