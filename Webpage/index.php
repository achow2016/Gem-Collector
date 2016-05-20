<!DOCTYPE html>
<html onload="getSetHeight()">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	
    <link href="styles/base.css" rel="stylesheet" type="text/css">
    <script src="js/getSetHeight.js"></script>
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
        <div id="music"></div>

        <!--Play-->
	    <div id="playButton" class="LinkButton">
            <a href="levels.html">Play</a>
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
                <form id="scoreForm" onsubmit="sendScore()">
                Name<input type="text" name="name"></input>
                <br>Score<input type="text" name="score"></input>
                <input type="submit" value="Submit">
                </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
      
    </div>
  </div>
  

</body>
</html>