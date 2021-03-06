<!DOCTYPE html>
<html>
<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<title>Gem Collector - Game</title>
	<link href="GameBoardStyle.css" rel="stylesheet" type="text/css">

	
    <!--Game board engine script-->
    <script src="js/jquery-2.2.3.min.js"></script>
	<script src="js/cell.js"></script>
	<script src="js/masterCell.js"></script>
    <script src="js/User.js"></script>
    <script src="js/ai.js"></script>
    <script src="js/game_state.js"></script>
	<script src="js/game_engine.js"></script>
    <script>
        <!--
        // First rename index.html to gameBoard.php
        
        // This is where php code need to check REQUEST['type']
        // and REQUEST['level'] to generate the global config
        // for game engine.
        // for example, if the link of button Easy points to
        // /gameBoard.php?type=computer&level=0 then the php should
        // generate 
        //    var gameConfig = {
        //        type: GameBoard.TYPE.HUMAN_VS_COMPUTER,
        //        level: AI.LEVEL.AMATEUR
        //    }
        //
        // another example, if the link of button Normal points to
        // /gameBoard.php?type=computer&level=1 then the php should
        // generate 
        //    var gameConfig = {
        //        type: GameBoard.TYPE.HUMAN_VS_COMPUTER,
        //        level: AI.LEVEL.SEMI_PRO
        //    }
        //
        // another example if the link of button 2 player points to
        // /gameBoard.php?type=human then the php should
        // generate
        //    var gameConfig = {
        //        type: GameBoard.TYPE.HUMAN_VS_COMPUTER,
        //    }
        //
        -->
        
        <?php
            $type = $_REQUEST['type'];
            $level = $_REQUEST['level'];
            if ($type == 'computer') {
                if ($level == 0) {
                    echo "var gameConfig = {";
                    echo "    type: GameBoard.TYPE.HUMAN_VS_COMPUTER,";
                    echo "    level: AI.LEVEL.AMATEUR";
                    echo "}";
                    echo "\n";
                }

                if ($level == 1) {
                    echo "var gameConfig = {";
                    echo "    type: GameBoard.TYPE.HUMAN_VS_COMPUTER,";
                    echo "    level: AI.LEVEL.SEMI_PRO";
                    echo "}";
                    echo "\n";
                }

                if ($level == 2) {
                    echo "var gameConfig = {";
                    echo "    type: GameBoard.TYPE.HUMAN_VS_COMPUTER,";
                    echo "    level: AI.LEVEL.PROFESSIONAL";
                    echo "}";
                    echo "\n";
                }
            }

            if ($type == 'human') {
                echo "var gameConfig = {";
                echo "type: GameBoard.TYPE.HUMAN_VS_HUMAN,";
                echo "}";
                echo "\n";
            }
        ?>

        
        
    </script>    
	
    <!--Up date GameBoard-->
    <script src="js/updateGameBoard.js"></script>

    <!--Ester eggs script-->
    <script src="js/Eggs.js"></script>
    
    <!--Set page height-->
    <!--<script src="js/setGameBoardHeight.js"></script> Temp removed-->

    <!--Skeleton-->
    <script src="js/changeSkeSke.js"></script>
    
    <!--Getting Gem animation-->
    <!--<script src="js/animationP0.js"></script>
    <script src="js/animationP1.js"></script>
    <script src="js/animationP2.js"></script>
    <script src="js/animationP3.js"></script>-->
    
    <!--Set Profiles-->
    <!--<script src="js/setProfiles.js"></script>-->

</head>
<body>
	<div id="Border">
		<!--First Line-->
        <div id="OppntLine">
		    <div id="ScoreBox1" class="ScoreBox">
                <div class="Words">Gem:<span class="gem"></span></div>
                <div class="Words">Big Gem:<span class="big"></span></div>
            </div>
            <div class="BodyBlock" id="OppntLeft1"><img src="pictures/bottle.png" alt="btl"></div>
		    <div class="BodyBlock" id="OppntLeft2"><img src="pictures/profiles/side/rightWingResized.png" alt="arm"></div>
		    <div class="Profile" id="OppntProfile" onmouseover="Q2check()"  onmouseout="Q2uncheck()"></div>
		    <div class="BodyBlock" id="OppntRight1"><img src="pictures/profiles/side/leftWingResized.png" alt="arm"></div>
            <div><img id="arm1" name="arm1 src="" alt=""></div>
		    <div class="BodyBlock" id="OppntRight2"><img src="pictures/map.png" alt="map"></div>
		    <div class="Block" id="SkeskeRoom"><img id="SkeSke" src="pictures/skeleton10gifOn_s.gif" alt="skeske" onclick="changeSkeSke()"></div>
        </div>

		<!--Second Line-->
        <div id="GameBoardLine">
		    <div class="HalfCircle cell left" id="Boss6" data-cell=6>
                <div class="NumberMark BossRoomMark">
                </div>
            </div>
		    <div class="Pipe">
			    <div class="GameBoard cell" id="Square7" data-cell=7 onclick="chosenCell=7">
                    <div class="NumberMark">
                    </div>
                </div>
			    <div class="GameBoard BottomSquare cell" id="Square5" data-cell=5 onclick="chosenCell=5">
                    <div class="NumberMark">
                    </div>
                </div>
		    </div>
		    <div class="Pipe">
			    <div class="GameBoard cell" id="Square8" data-cell=8 onclick="chosenCell=8">
                    <div class="NumberMark">
                    </div>
                </div>
			    <div class="GameBoard BottomSquare cell" id="Square4" data-cell=4 onclick="chosenCell=4">
                    <div class="NumberMark">
                    </div>
                </div>
		    </div>
		    <div class="Pipe">
			    <div class="GameBoard cell" id="Square9" data-cell=9 onclick="chosenCell=9">
                    <div class="NumberMark">
                    </div>
                </div>
			    <div class="GameBoard BottomSquare cell" id="Square3" data-cell=3 onclick="chosenCell=3">
                    <div class="NumberMark">
                    </div>
                </div>
		    </div>
		    <div class="Pipe">
			    <div class="GameBoard cell" id="Square10" data-cell=10 onclick="chosenCell=10">
                    <div class="NumberMark">
                    </div>
                </div>
			    <div class="GameBoard BottomSquare cell" id="Square2" data-cell=2 onclick="chosenCell=2">
                    <div class="NumberMark">
                    </div>
                </div>
		    </div>
		
		    <div class="LastPipe">
			    <div id="Square11" class="cell" data-cell=11 onclick="chosenCell=11">
                    <div class="NumberMark">
                    </div>
                </div>
			    <div class="BottomSquare cell" id="Square1" data-cell=1 onclick="chosenCell=1">
                    <div class="NumberMark">
                    </div>
                </div>
		    </div>	
		    <div class="HalfCircle cell right" id="Boss0" data-cell=0>
                <div class="NumberMark BossRoomMark">
                </div>
            </div>
		</div>

		<!--Third Line-->
        <div id="UserLine">
		    <div id="ScoreBox0" class="ScoreBox">
                <div class="Words">Gem:<span class="gem"></span></div>
                <div class="Words">Big Gem:<span class="big"></span></div>
            </div>
            <div class="BodyBlock" id="UserLeft1"><img src="pictures/mass.png" alt="mass"></div>
		    <div class="BodyBlock" id="UserLeft2"><img src="pictures/profiles/side/leftArmResized.png" alt="arm"></div>
		    <div class="Profile" id="UserProfile" onmouseover="Q1check()"  onmouseout="Q1uncheck()"></div>
		    <div class="BodyBlock" id="UserRight1"><img src="pictures/profiles/side/rightArmResized.png" alt="arm"></div>
            <div><img id="arm0" name="arm0" src="" alt="" ></div>
		    <div class="BodyBlock" id="UserRight2"><img src="pictures/compass.png" alt="cmps"></div>
		    <div class="Block"></div>
        </div>
	</div>
    <div class="arrowSign" id="direction-selection">
        <div class="arrowSignLeft"></div>
        <div class="arrowSignRight"></div>
    </div>

    <!--Background music-->
    <audio id="backgroundMusic" autoplay loop>
        <source src="music/bensound-littleidea.mp3" type="audio/mpeg">
    </audio>
</body>
</html>