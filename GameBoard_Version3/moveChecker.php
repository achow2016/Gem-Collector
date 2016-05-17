<?php

$SQLCommand = "SELECT * FROM gameboard ORDER BY id DESC Limit 1";

$result = mysql_query($SQLCommand); //This line executes the MySQL query above

$sqlline = array(); //Array to hold all line data

$index = 0;
while($row = mysql_fetch_assoc($result)){ 
    //loop to store data in an associative array.
     $sqlline[$index] = $row;
     $index++;
}
$properarray = array_values($_sqlline);

//should return row ID (or turn number)
echo $properarray[0];
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
