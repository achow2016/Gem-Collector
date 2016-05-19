/*
This JS function should receive turn ID then
check through interval to decide if another turn can be made.
*/


//Will use moveId Global turn id for client to store turn number.

var myTurnId;

//Stores turn id fom JSON.parse.

var receiveId;

//Takes turn id from remoteturnid through assignment in loop.

var remoteTurnId;

/*
This function will receive turn id, from php 
and set to global variable.
After that's done, runs checkTurn to check database
for turn made by other player by comparing row id.
*/

function receiveTurn(turnId) {
	//store int turn id to global variable
	myTurnId = turnId;
	intervalcheckturn();
}

/*
launches function to check turn id every half second unless condition
met, like if turn id received is even or odd (first or second).
*/

//Mark player as going first. (Odd)
var firstTurnOdd;

//Mark player as going second. (even)
var secondTurnEven;

//To turn on or off interval checking.
var intervalSwitch;

//Store timer function so you can switch it off.
var storeInterval;

function intervalCheckTurn() {
    //If You go first, return ID must be even for you to take a turn.
    
    //Set interval to check.
    if (intervalSwitch == 0) {
            storeInterval = setInterval(intervalCheckTurn(), 500);
            intervalSwitch = 1;
    }
    
    //If first in turn order.
    if (iAmFirst == 1) {
        if (iAmFirst == 1 & (remoteTurnId % 2 != 0)) {
           //pull move ID here with function.
           
           .
        } else {
            //switch to taking turn here.
            
            //reset interval check for next turn.
            intervalSwitch = 0;
            //disable interval loop.
            clearInterval(storeInterval);
            //update the gameboard before taking turn.
            updateGameboard();
            //Move to function to start your turn.
            takeMyTurn();
        }
    }
    //If You go second, return ID must be odd for you to take a turn.
    if (iAmSecond == 1) {
        if (iAmSecond == 1 & (remoteTurnId % 2 == 0)) {
            //pull move ID here with function.
            
            
        } else {
            //switch to taking turn here.
            
            //reset interval check for next turn.
            intervalSwitch = 0;
            //disable interval loop.
            clearInterval(storeInterval);
            //update the gameboard before taking turn.
            updateGameboard();
            //Move to function to start your turn.
            takeMyTurn();
        }
    }
}
/*
This function will check database for additional lines.
*/

function checkTurn() {
    var stringTurn;
	/*Check if remote id is equal to player.
	use other loop to start new turn if different.*/
	var xmlhttp = new XMLHttpRequest();
	//Take turns on 1,3 2,4 (example) which is why +2!
	if(remoteturnid != myturnid + 2) {
	    //convert to string to send.
        stringTurn = myTurnId.toString();
        xmlhttp.open("post", "moveChecker.php", true);
        //Set content type for POSTing turn string.
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		//Send.
        xmlhttp.send();
        //get response turn ID.
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				//applies id as mess to remoteTurnId.
                remoteTurnId = xmlhttp.responseText; 
				//Snips extra off move ID and applies it to a usable global Int Var.
                remoteTurnId = parseInt(remoteTurnId.substr(0,4));				
				};
			   
		}
	}




