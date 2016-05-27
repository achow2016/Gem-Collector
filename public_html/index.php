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
	
	<script>

	
	function changeTable() {
		//alert("i am here");
		var rowCount = 1;
		//var achieveCol = 3;
		var selectTable = document.getElementById("scoreTable").rows[rowCount].cells[3];
		for(rowCount = 1; rowCount < 12; rowCount++) {
			
				if(selectTable.innerHTML == 2){
					selectTable.innerHTML = "<img src=\"pictures/level0.png\"><img src=\"pictures/level1.png\"><img src=\"pictures/level2.png\"><small>Captain</small>";
					}
				if(selectTable.innerHTML == 1){
					selectTable.innerHTML =  "<img src=\"pictures/level0.png\"><img src=\"pictures/level1.png\"><small>Parrot</small>";
					}
				if(selectTable.innerHTML == 0){
					selectTable.innerHTML =  "<img src=\"pictures/level0.png\"><small>Deckhand</small>";
					}
				
			selectTable = document.getElementById("scoreTable").rows[rowCount].cells[3];
		}
		}

	

	</script>


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
            <img id="SkeSke" src="pictures/skeleton10gifOn_s.gif" alt="skeske" onclick="changeSkeSke()">
        </div>

        <!--Play-->
	    <div id="playButton" class="LinkButton">
            <a href="playMode.html">Play</a>
        </div>

        <!--Tutorial-->
	    <div id="demoButton" class="LinkButton">
            <a href="tutorial.html">Tutorial</a>
        </div>

        <!--LeaderBoard-->
	    <div id="rankingButton" class="LinkButton" style="text-align:center">
            <a data-toggle="modal" data-target="#myModal" onclick="changeTable()">Leaderboard</a>
        </div>

        <!--Reference-->
	    <div id="referenceButton" class="LinkButton">
            <a href="reference.html">Reference</a>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
		<!-- Modal content-->
        <div class="modal-content" style="background-image: url('pictures/leaderboard.png');
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		"> 
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title" style="text-align:center; line-height:2; padding-top:20px;">Leaderboard</h4>
            </div>
            <div class="modal-body">

                    <!--Leaderboard-->
                <div id="leaderboard">
                <!--
				<form id="scoreForm" action="">
                Name<input type="text" name="name" id="name"></input>
                <br>Score<input type="text" name="score" id="score"></input>
                <button type="button" onclick="sendScore()" id="select">Send</button>
                </form>-->
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

                $sql = "SELECT Name, Level, Score, Achievement FROM Leaderboard ORDER BY Level DESC, Score DESC LIMIT 10";

                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    echo "<table width=400 style='margin-left:auto; margin-right: auto;' id='scoreTable'><tr><th>Name</th><th>Level</th><th>Score</th><th>Achievement</th></tr>";
                    // output data of each row
                    while($row = $result->fetch_assoc()) {
                        echo "<tr><td>" . $row["Name"]. "</td><td>" . $row["Level"]. "</td><td>" . $row["Score"] ."</td><td>" . $row["Achievement"]. "</td></tr>";
						}
                    echo "</table>";
					} else {
							echo "0 results";
							} 
				//echo "<script>
				 //function achievementImage() {
				 //alert('i am here');}
				 //</script>";


                    $conn->close();
                ?>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
      
    </div>
  </div>
  

  <!--Background music-->
  <audio id="backgroundMusic" autoplay loop>
      <source src="music/bensound-ukulele.mp3" type="audio/mpeg">
  </audio>

</body>
</html>
