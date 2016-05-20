<?php
//$_POST["name"]
//$_POST["score"]

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

$sql = "INSERT INTO Leaderboard (name, score) VALUES ($_POST["name"],$_POST["score"])";

//debug this

?>