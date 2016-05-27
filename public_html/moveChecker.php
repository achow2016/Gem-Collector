<?php
/*
This php script receives last ID from table to determine turns.
*/

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

//select last row ID.

$sql = SELECT id FROM gameboard WHERE idate = (SELECT max(ID) FROM gameboard);

//puts query info into variable.

$result = $conn->query($sql);

//change query into asociative array.

$row = $result->fetch_assoc();

//change into indexed array.

$row = array_values($row);

//echo back the row ID for checking.

echo $row[0];    
}


