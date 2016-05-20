<script>

/*
Calls php to grab last location of gamepieces and update.
Continues from turnManagement.js.
*/

//Stores the array of current game state of pieces.
var pieceData;

function updateGameboard() {
    
	//New XMLHttpRequest object.
    var xmlhttp = new XMLHttpRequest();
    
	//Convert turn id into string for sending.
    remoteTurnId = remoteTurnId.toString();
	
	//Encode string for POST sending.
    var payload = "datasent=" + encodeURIComponent(remoteTurnId);
	
	//Open connection to PHP page for processing.
    xmlhttp.open( "POST", "pullGameBoardPositions.php", true);
	
	//Set content type for POSTing string.
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    
	//Send it.
    xmlhttp.send(remoteTurnId);
		
	//get response string.
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				//Sends string to pieceData.
                pieceData = xmlhttp.responseText; 
				//convert string to indexed array.
				pieceData = string.split(',');
				//Empty cells.
				cells = [];
				//Fill Cells.
				cells = pieceData.slice();
				
				};
				

</script>