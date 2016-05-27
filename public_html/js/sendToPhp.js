//receive php response.
var receivePhp;

/*call this function with array name as parameter (cells)
to transmit array*/
function transmitToPhp(array) {
    
    //New XMLHttpRequest object.
    var xmlhttp = new XMLHttpRequest();
    //Convert array into string.
    cellsToString = cells.toString();
	//Encode string for POST sending.
    var payload = "datasent=" + encodeURIComponent(cellsToString);
	//Open connection to PHP page for processing.
    xmlhttp.open( "POST", "storeMoveToSql.php", true);
	//Set content type for POSTing string.
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //Send it.
    xmlhttp.send(stringsent);
		
	//get response ID.
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				//applies id as mess to moveId.
                moveId = xmlhttp.responseText; 
				//Snips extra off move ID and converts it to a usable global Int Var.
                moveId = parseInt(moveId.substr(0,4));				
				};
				
/*Move to timer function, to wait for new turn with interval checking.
Passes integer for turn as parameter.*/
receiveTurn(moveId);		
}