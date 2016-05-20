<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	
    <link href="styles/base.css" rel="stylesheet" type="text/css">

    <!--Skeleton-->
    <script src="js/changeSkeSke.js"></script>
    <script src="js/sendScoreAndWritePhp.js"></script>


</head>
<body>
    <div id="Wrapper">

        <!--Title-->
        <div id="TitleBox">
            <p class="title"><b>Gem</b></p>
            <p class="title"><b>Collector</b></p>
        </div>

        <!--Music-->
         <div id="music">
            <img id="SkeSke" src="pictures/skeleton10default.gif" alt="skeske" onclick="changeSkeSke()">
        </div>

        <!--Play-->
	    <div id="playButton" class="LinkButton">
            <a href="playMode.html">Play</a>
        </div>

        <!--Tutorial-->
	    <div id="demoButton" class="LinkButton">
            <a href="">Tutorial</a>
        </div>

        <!--LeaderBoard-->
	    <div id="rankingButton" class="LinkButton">
            <p data-toggle="modal" data-target="#myModal">Leaderborad</p>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
    
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Modal Header</h4>
            </div>
            <div class="modal-body">

                    <!--Leaderboard-->
                <div id="leaderboard">
                <form id="scoreForm" action="">
                Name<input type="text" name="name"></input>
                <br>Score<input type="text" name="score"></input>
                <button type="button" onclick="sendScore()" id="select">Send</button>
                </form>
                </div>

                <!--Leaderboard-->
                <?php
                $servername = "mysql7.000webhost.com";
                $username = "a1753342_user";
                $password = "bladeands0ul";
                $dbname = "a1753342_main";

                // Create connection
                $conn = new mysqli($servername, $username, $password, $dbname);
                // Check connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                } 

                $sql = "SELECT Name, Score FROM Leaderboard";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    echo "<table width=400><tr><th>Name</th><th>Score</th></tr>";
                    // output data of each row
                    while($row = $result->fetch_assoc()) {
                        echo "<tr><td>" . $row["Name"]. "</td><td>" . $row["Score"]. " " . $row["lastname"]. "</td></tr>";
                    }
                    echo "</table>";
                    } else {
                        echo "0 results";
                    }

                    $conn->close();
                ?>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
      
    </div>
  </div>
  

</body>
</html>