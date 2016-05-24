<?php
//raw string data.
$rawdata = var_export($_POST, true);
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
echo $raw_data;
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title></title>
    </head>
    <body>
        
    </body>
</html>
