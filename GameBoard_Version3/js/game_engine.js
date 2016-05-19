//Run the game 
$(document).ready(startGameEngine);

//Creating the maximum number of cells 
var MAX_CELL = 12;
var MAX_USER = 2;
//Chosen cell number
var chosenCell;

//Creating turn object
var TURN = {
    BLACK: 1,
    WHITE: -1
};

//Creating direction object
var DIRECTION = {
    LEFT: 1,
    RIGHT: -1
};

//Creating cell range 
var CELL_RANGE = {};
CELL_RANGE[TURN.BLACK] = [1, 5];
CELL_RANGE[TURN.WHITE] = [7, 11];

//Creating class GameBoard to store turn, direction and setupInternalCells method
function GameBoard() {
    this.turn = null;
    this.direction = null;
    this.setupInternalCells();
    this.setupUsers();
}
//Creating object for GameBoard
GameBoard.prototype = {
    turn: null,
    direction: null,
    cells: null,
    users: null,
    //Setup cell variable
    setupInternalCells: function() {
        var i;
        //Creating an array name cells
        this.cells = [];
        for (i = 0; i < MAX_CELL; i++) {
            //Creating master cells and normal cells
            if (i == 0 || i == 6) {
                var masterCell = new MasterCell(i, 0, 1);
                this.cells.push(masterCell);
            } else {
                var cell = new Cell(i, 5);
                this.cells.push(cell);
            }
        }
    },
    setupUsers: function() {
        var i;
        this.users = [];
        for (i = 0; i < MAX_USER; i++) {
            var user = new User(i, 0, 0);
            this.users.push(user);
        }
    },
    //Mouse listener
    setupEventListener: function() {
        var that = this;
        $('div.cell').on('click', function() {
            var cell = $(this);
            var cellId = cell.data('cell');
            var validRange = CELL_RANGE[that.turn];
            if (cellId >= validRange[0] && cellId <= validRange[1]) {
            // checking totalGem in a cell 
            // if the totalGem == 0 
            // dissable the click function
                if (that.cells[cellId].getTotalGem() == 0) {
                    return false;
                } else {
                    that.getDirection(cellId).done(function() {
                        that.makeMove(cellId);
                    });
                }
            } else {
                return false;
            }
        });
    },
    // Deciding player turn
    setupTurn: function(turn) {
        this.turn = turn;
    },
    // Get the direction from player (not done yet)
    getDirection: function(cellId) {
        // Because we want the user to be blocked when we show the arrows
        // until they clicked one of these arrow no code should run
        // To do so, we firstly create a defer object and return a promise 
        // which will be resolved when left or right arrow is clicked.
        var done = $.Deferred();
        // Select the div containing 2 arrows
        var directionDiv = $('#direction-selection');
        // Now show it
        directionDiv.toggle(true);
        // Build the ID to select the cell 
        var id = '#Square' + cellId;
        // Using JQuery to grab that
		var cellDiv = $(id);
        // Getting the position of the clicked cell
        var offset = cellDiv.offset();
        // Moving the arrow container to that new position
        directionDiv.css({
            top: offset.top + 12,
            left: offset.left,
            position: 'absolute'
        });
        // Now setup click event for these arrows
        var left = directionDiv.find('.arrowSignLeft');
        var that = this;
        left.on('click', function() {
            // Updating the selected direction
            that.direction = DIRECTION.LEFT;
            // Hiding the arrow sign after user choose
            directionDiv.toggle(false);
            // Resolve the promise
            done.resolve(); 
        });
        var right = directionDiv.find('.arrowSignRight');
        right.on('click', function() {
            that.direction = DIRECTION.RIGHT; 
            directionDiv.toggle(false);
            done.resolve();
        });
        return done.promise();
    },
    makeMove: function(cellId) {
        var sign = this.direction * this.turn;
        //console.log(this.direction * this.turn);
        // Getting cell location
        var cell = this.cells[cellId];
        // Storing the gem that we pick up
        var holdingGem = cell.getTotalGem();
        cell.reset();
        while (holdingGem > 0) {
            var nextOneCellIndex = cell.getNextOneIndex(sign);
            var nextOneCell = this.cells[nextOneCellIndex];
            nextOneCell.addUp();
            cell = nextOneCell;
            //nextOneCell.highLight();
            //this.delay(400);
            //nextOneCell.unHighLight();
            holdingGem--;
	    }
        var landedNextIndex = cell.getNextOneIndex(sign);
        var landedNextCell = this.cells[landedNextIndex];
        var landedNextTwoIndex = cell.getNextTwoIndex(sign);
        var landedNextTwoCell = this.cells[landedNextTwoIndex];
        if (landedNextCell.isMaster()) {
           this.turn = this.turn * (-1);
           console.log('doi luot vi o tiep la o quan', new Date().getTime() / 1000);
        } else if (landedNextCell.isEmpty()) {
            //while (landedNextCell.isEmpty()) {
                if (!landedNextTwoCell.isEmpty()) {
                    console.log('an gem', landedNextTwoCell.getTotalGem(), landedNextTwoCell, new Date().getTime() / 1000);
                    if (landedNextTwoCell.isMaster()) {
                        var smallGem = landedNextTwoCell.getTotalGem();
                        var bigGem = landedNextTwoCell.getTotalBigGem();
                        landedNextTwoCell.resetMaster();
                    } else {
                        var smallGem = landedNextTwoCell.getTotalGem();
                        landedNextTwoCell.reset();
                    }
                    // Updating the totalGem and total bigGem to the user 
                    //var n = this.turn * (-1);
                    var n = (this.turn - 1) / (-2);
                    this.users[n].gainGem(smallGem, bigGem);
              //      cell = landedNextTwoIndex;
                    this.turn = this.turn * (-1);
                } else {
                    console.log('doi luot vi ko co o an', new Date().getTime() / 1000);
                    this.turn = this.turn * (-1);
                }
            //}
        } else {
            // Taking the next landed cell to start over again
            console.log('lay o landed index de di tiep', landedNextIndex, new Date().getTime() / 1000);
            this.makeMove(landedNextIndex);
        }
    }
};

//Creating class GameEngine
function GameEngine() {
}
//Creating object for GameEngine
GameEngine.prototype = {
    start: function() {
        var gameBoard = new GameBoard();
        gameBoard.setupEventListener();
        gameBoard.setupTurn(TURN.BLACK);
    }
};
//Creating method startGameEngine
function startGameEngine() {
    var gameEngine = new GameEngine();   
    gameEngine.start();
}