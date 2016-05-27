<?php
/*
This php script receives string data from gameinit.html,
should process string into array for further use
*/
//Gets RAW url from $_POST
$rawdata = var_export($_POST, true);

//Extract cell number set, seperated by commas.
$textarray = substr($rawdata,25,-4);

//Remove all commas.
$textarray = str_replace(',', '', $textarray);

//Split number string into associative PHP array.
$cleanarray = str_split($textarray);

//Split associative array into indexed array.
$pass = array_values($cleanarray);

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

/*
Insert data from array into SQL. Don't need to specify columns since 
whole row is populated except ID. 
$result call with requireonce uses secure credentials to access database.
*/
$sql = "INSERT INTO gameboard (cell1,cell2,cell3,cell4,cell5,cell6,	cell7,cell8,
cell9,cell10,cell11,cell12) VALUES ($pass[0],$pass[1],$pass[2],$pass[3],$pass[4],
$pass[5],$pass[6],$pass[7],$pass[8],$pass[9],$pass[10],$pass[11])";

//Check writing to SQL.

if (mysqli_query($conn, $sql)) {
    echo "Created successfully";
    } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

/*
Retreive last ID of table to check if next move is to be made. 
ID should be stored as global variable back
at client browser JS.
*/
$last_id = mysqli_insert_id($conn);

/*
Send last ID to client-side. Record Last ID in JS and poll
(interval) to check if next move can be made.
*/
 
echo $last_id;
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
