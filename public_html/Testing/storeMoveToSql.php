<?php

/*
This php script receives string data from gameinit.html,
should process string into array for further use
*/

//Store the array.
$storeArray = array();

//$rawdata = var_export($_POST, true);
//echo $rawdata;
//$textarray = substr($rawdata,25,-4);
//$textarray = str_replace(',', '', $textarray);
//$cleanarray = str_split($textarray);
//$pass = array_values($cleanarray);

/*
connect to database.
*/
$servername = "mysql7.000webhost.com";
$username = "a1753342_user";
$password = "bladeands0ul";
$dbname = "a1753342_main";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

/*
Insert data from array into SQL. Don't need to specify columns since 
whole row is populated except ID. 
$result call with requireonce uses secure credentials to access database.
*/

//$sql = "INSERT INTO gameboard (cell1,cell2,cell3,cell4,cell5,cell6,	cell7,cell8,cell9,cell10,cell11,cell12) VALUES ($pass[0],$pass[1],$pass[2],$pass[3],$pass[4],$pass[5],$pass[6],$pass[7],$pass[8],$pass[9],$pass[10],$pass[11])";

//if (mysqli_query($conn, $sql)) {
//    //echo "Created successfully";
//} else {
//    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
//}
//
/*
Retreive last ID of table to check if next move is to be made. 
ID should be stored as global variable back
at client browser JS.
*/
//$last_id = mysqli_insert_id($conn);

/*
Send last ID to client-side. Record Last ID in JS and poll
(interval) to check if next move can be made.
*/
//echo $last_id;



//test bringing entire row.



//Select latest set of game piece positions.
$sql = "SELECT * FROM gameboard ORDER BY id DESC LIMIT 1";

//Store the raw result into var.
$result = mysqli_query($conn,$sql);

//Pull row from result as array of strings..
$row = mysqli_fetch_row($result);

//send back as responseText.

echo implode(",",$row);
?>

