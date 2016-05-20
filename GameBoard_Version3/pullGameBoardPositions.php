<?php
//Pull the last set of moves as string seperated by commas.

/*
connect to database.
*/
$servername = "mysql7.000webhost.com";
$username = "a1753342_user";
$password = "bladeands0ul";
$dbname = "a1753342_main";
$conn = mysqli_connect($servername, $username, $password, $dbname);

//Check connection.
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

//Select latest set of game piece positions.
$sql = "SELECT * FROM gameboard ORDER BY id DESC LIMIT 1";

//Store the raw result into var.
$result = mysqli_query($conn,$sql);

//Pull row from result as array of strings..
$row = mysqli_fetch_row($result);

//send back as responseText.

echo implode(",",$row);

?>