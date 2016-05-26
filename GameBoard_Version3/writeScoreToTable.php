<?php

/*
This php script receives score string data from the JS
operated form and writes it to SQL before passing control back to the page, where
the score box is updated. All of this is done without a screen refresh.
*/

$name = $_POST["name"];
$score = $_POST["score"];
$level = $_POST["level"];
$achievement = $_POST["achievement"];

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
Insert data into SQL.
*/

$sql = "INSERT INTO Leaderboard (Name, Level, Score, Achievement) VALUES ('$name','$level','$score','$achievement')";

if (mysqli_query($conn, $sql)) {
    //echo "Created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

//echo $name;
?>
