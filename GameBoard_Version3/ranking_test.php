<?php

$servername = "mysql7.000webhost.com";
$username = "a1753342_user";
$password = "bladeands0ul";
$dbname = "a1753342_main";
$sql = "SELECT * FROM 'Leaderboard' LIMIT 0, 30";

$con = mysqli_connect($servername, $username, $password, $dbname);


mysql_select_db($dbname);


$quryset = mysql_query($sql);

echo "<TABLE  border='1' >";
echo "<TR>";
echo "<TD>name";
echo "</TD>";
echo "<TD>score";
echo "</TD>";
echo "</TR>";


while ($data = mysql_fetch_array($quryset)){

    echo "<TR>";
    

        echo "<TD>" . $data[0];
        echo "</TD>";



        echo "<TD>" . $data[1];
        echo "</TD>";

      
    echo "</TR>";
}
echo "</TABLE>";
?>