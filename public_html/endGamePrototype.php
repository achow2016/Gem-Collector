<!--
-add this to end of game page to post to leaderboard with
writescoretotable.php.
-Style modal where inline is.
-needs to use variable that stores score in main program.
-JQuery setTimeout can close Modal on delay if needed.
-Updates table, user closes it.

-gemunit is the gobal variable for storing score.

-->
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Enter Score</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>  
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</head>
<!--uses score already present.-->
<body onload="setScore(playerScore)">
<script>
//player score.
var playerScore = 1;



function loadphp(){
	$("#initial").load( "printScoresFromSql.php" );
}

function setScore(playerScore){
	//game difficulty
var gameLevel = 1;
	//achievements
var achievement = 111;
document.getElementById("scoreNumber").innerHTML = playerScore;
document.getElementById("score").value  =  playerScore;
document.getElementById("level").value  =  gameLevel;
document.getElementById("achievement").value  =  achievement;
console.log(playerScore);
console.log(gameLevel);
console.log(achievement);

}

$(function() {		 
	$("#scoreForm").on("submit", function(e) {
    e.preventDefault();
	$.ajax({
		type:"POST",
		url: $(this).attr("action"),
		data:$(this).serialize(),
		success: function (data) {
              $("#initial").removeData();
			  $("#initial").load("printScoresFromSql.php");
			  $("#form").hide();
			  //$("#myModal").modal("hide");
			  $("#score").html(playerScore);
            }
		});
	});
});	

</script>
<div class="container">
  <h2>Leaderboards Entry</h2>
  <p>You scored:</p>
  <p id="scoreNumber"></p>
  <!-- Trigger the modal with a button -->
  <div style="height:100px; width:100px; background-color:yellow;" data-toggle="modal" data-target="#myModal" onclick="loadphp()">Open Leaderboard</div>

  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content" style="background-color:green;">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Leaderboards</h4>
        </div>
        <div class="modal-body">
		<div id="form">
		<form id="scoreForm" action="writeScoreToSql.php">
		Your Name<input type="text" name="name"></input>
		<p>Your Score is <p id="scoreNumber"></p></p> 
		<input type="hidden" id="score" name="score" value="">
		<input type="text" id="level" name="level" value="" readonly>
		<input type="text" id="achievement" name="achievement" value="" readonly>
		<input type="submit" value="submit" style="float:right;top:-86px;position:relative;"></submit>
		</form>
		</div>
		<div id="initial">
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

			$sql = "SELECT Name, Level, Score, Achievement FROM Leaderboard ORDER BY Score DESC LIMIT 10";
			$result = $conn->query($sql);
			
			if ($result->num_rows > 0) {
				echo "<table width=400><tr><th>Name</th><th>Level</th><th>Score</th><th>Achievements</th></tr>";
				// output data of each row
				while($row = $result->fetch_assoc()) {
					echo "<tr><td>" . $row["Name"]. "</td><td>" . $row["Level"]. "</td><td>" . $row["Score"]. "</td><td>" . $row["Achievement"]. "</td></tr>";
				}
				echo "</table>";
				} else {
    echo "0 results";
}
				
			

			//$conn->close();
			?>  

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" style="background-color:green;">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>
</div>
</body>
</html>
