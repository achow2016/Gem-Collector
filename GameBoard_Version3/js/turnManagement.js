/*
This JS function should receive turn ID then
check through interval to decide if another turn can be made.
*/


//Global turn id for client to store turn number.

var myturnid;

//Stores turn id fom JSON.parse.

var receiveid;

//Takes turn id from remoteturnid through assignment.

var remoteturnid;

/*
This function will receive turn id, from php 
and set to global variable.
After that's done, runs checkTurn to check database
for turn made by other player by comparing row id.
*/

function receiveTurn(turnId) {
	//store int turn id to global variable
	myturnid = turnId;
	intervalcheckturn();
}

/*
launches function to check turn id every second unless condition
met, like if turn id received is even or odd (first or second).
*/

function intervalcheckturn(){
	if(!condition) {
	setInterval(checkTurn(), 1000);
	}
}

/*
This function will check database for additional lines.
*/

function checkTurn() {
	
	/*Check if remote id is equal to player.
	use other loop to start new turn if different.*/
	var xmlhttp = new XMLHttpRequest();
	//Take turns on 1,3 2,4 (example) which is why +2!
	if(remoteturnid != myturnid + 2) {
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readystate == 4 && xmlhttp.status == 200) {
			xmlhttp.open("post", "moveChecker.php");
			xmlhttp.send();
			receiveid = JSON.parse(xmlhttp.responseText);
			//what to do with id?
			remoteturnid = receiveid;
			} else {
				//to player turn
			}
		}
	}
}	