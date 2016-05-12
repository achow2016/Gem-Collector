//turn == 0 --> player's turn
//index == array's number
//sign == -1 --> right; sigh == 1 --> left
var turn = 0;


var cell = [10, 5, 5, 5, 5, 5, 10, 5, 5, 5, 5, 5];

function checkingField() {
    if (cell[1] == 0 && cell[2] == 0 && cell[3] == 0 && cell[4] == 0 && cell[5] == 0) {
        return true;
    }
    return false;
}


var playerScore; (an integer value)

function scoreDecrease() {
    if (checkingField()) {
        playerScore = playerScore – 5;
        cell[1] = 1;
        cell[2] = 1;
        cell[3] = 1;
        cell[4] = 1;
        cell[5] = 1;
    }
}



var validRange = [];
function checkTurn() {
    if(turn == 0) {
        validRange = [1,5];
    } else {
        validRange = [7,11];
        }
}


//accepting a value from graphic game board, onclick(?),
//checking javascript variable(?) 

var validRange = [];
var boxValue;
val clickCellPass;

//example click cell one, works with onclick().
function clickcell1() {
    boxValue = 1;
    for(i = 0; i < validRange.length; i++) {
        if(validRange[i] == boxValue] {
            clickCellPass = 1; 
        } else {
            clickCellPass = 0;
        }
    }

}

function cellChoose() {
    if(clickCellPass == 1) {
        //left or right function in other file
    } else {
        //alert user with popup or alert(?)
    }

}


function direction(el) {
            //Set key to corresponding code. This one is set to the left arrow key.
            var key = 37;
            if(document.createEventObject) {
                var eventObj = document.createEventObject();
                eventObj.keyCode = key;
                el.direction("onkeydown", eventObj);   
            } else if(document.createEvent) {
                var eventObj = document.createEvent("Events");
                eventObj.initEvent("keydown", true, true);
                eventObj.which = key;
                el.dispatchEvent(eventObj);
            }
        }


var direction;

/* Function to run when clicking left arrow. 
onclick="chooseLeft(); direction();" 
Multiple function calls for event.
*/

function chooseLeft() {
    direction = 0;
}

//Function to run when clicking right arrow. Same as above.

function chooseRight() {
    direction = 1;
}

//Takes the choice 
function direction() {
    //Left
    if(direction == 0) {
        sign = -1;
    } else {
        //Right
        sign = 1;   
    }
}


var n;
var N;
function pickUp {
    n = cell[i].getTotalGem();
    N = n;
    cell[i].reset();
}

//Set 0 the value by Inochi
function setZero(cell){
    this.currentCell = cell;
    this.currentCell = 0;
                
    return currentCell;
};


function checkHoldingGem {
    while (N != 0) {
    //Spread method
    }
}


var square = [10, 5, 5, 5, 5, 5, 10, 5, 5, 5, 5, 5];
var selectedSquareValue; (the array value)
var selectedSquare; (the array)
var selectedDirection; (0 == left; 1 == right)
var holdingGem; (an integer value)

function spreadingGem() {
    if (selectedDirection == 0) {
        for (int n = holdingGem; n > 0; n--) {
            reducingGem();
            //selectedSquareValue = 0;  Reset square function
            square[selectedSquare + 1]++;
            selectedSquare++;
        }
    }

    if (selectedDirection == 1) {
        for (int n = holdingGem; n == 0; n--) {
            reducingGem();
            //selectedSquare = 0;   Reset square function
            //keepSpreading function (checking array[0] to array[11])
            square[selectedSquareNumber - 1]++;
            selectedSquareNumber--;
        }
    }

}


var square = [10, 5, 5, 5, 5, 5, 10, 5, 5, 5, 5, 5];
var selectedSquareValue; (the array value)
var holdingGem; (an integer value)

function reducingGem() {
    holdingGem = selectedSquareValue;
    for (int n = holdingGem; n > 0; n--) {
        holdingGem--;
        //spreadingGem();
    } 
}


function keepSpreading {
    if((i == 11 && sign == 1) || (i == 0 && sign == -1)) {
        i = (sign)*(-6) + 6;
    }
}


//Checking the Boss room by Inochi
function checkBossBox(currentCell){
    var cellNum = currentCell;
    
    if(cellNum == 0 || cellNum == 6){
        return false;
    }else{
        return true;
    }
}

function getScoreAndCombo() {
    while (N == 0) {
        if (cell[i + sign].getTotalGem == 0) {
            if (cel[i + ((sign) * 2)].getTotalGem() == 0) {
                turn = 1;
            } else {
                totalScore = cell[i + ((sign) * 2)].getTotalGem();
                i = i + ((sign) * 2);
            }
        }
    }
}


    //Checking score (+-50) by Inochi
function checkNumGem(gem){
    var gem = gem;
    
    if(gem <= 50){
            return true;
    }else if(gem >= 50){
        return false;
    }else{
        return null;
    }
}


function changeTurn(){
    
    var timer = timer();
    var cell = cell;
    var currentCell = currentCell;
    var holdingGems = holdingGems;
    var combo = combo();
    
    if(cell(currentCell) == 0 
        && cell(currentCell+1) == 0
        && holdingGems == 0)
        {
        if(!combo){             

            return true;

        }else{

            return false;

        }
    }else if(!timer){

        return true;

    }else{
        return false;
    
    }
}