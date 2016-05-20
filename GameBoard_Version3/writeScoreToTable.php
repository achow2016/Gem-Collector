<?php

echo var_dump($_POST);
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

$sql = "INSERT INTO Leaderboard (Name, Score) VALUES ($name,$score)";

//debug this

?>