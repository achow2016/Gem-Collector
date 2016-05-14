//Run the game 
$(document).ready(startGameEngine);

//Creating the maximum number of cells 
var MAX_CELL = 12;

//Creating turn object
var TURN = {
    BLACK: 0,
    WHITE: 1
};

//Creating direction object
var DIRECTION = {
    LEFT: 0,
    RIGHT: 1
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
}
//Creating object for GameBoard
GameBoard.prototype = {
    turn: null,
    direction: null,
    cells: null,
    //Setup cell variable
    setupInternalCells: function() {
        var i;
        //Creating an array name cells
        this.cells = [];
        for (i = 0; i < MAX_CELL; i++) {
            //Creating master cells and normal cells
            if (i == 0 || i == 6) {
                var masterCell = new MasterCell(0, 1);
                this.cells.push(masterCell);
            } else {
                var cell = new Cell(5);
                this.cells.push(cell);
            }
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
                that.getDirection(cellId);
                var sign;
                if (that.direction == DIRECTION.RIGHT) {
                    sign = -1;
                } else {
                    sign = 1;
                }
                //to be countinue
            } else {
                return false;
            }
        });
    },
    //Deciding player turn
    setupTurn: function(turn) {
        this.turn = turn; 
    },
    //Get the direction from player (not done yet)
    getDirection: function(cellId) {
        //Temporary method to test busines logic, Ebon will complete this in sprint 2
        var r = confirm('Go right?');
        if (r == true) {
            this.direction = DIRECTION.RIGHT;
        } else {
            this.direction = DIRECTION.LEFT;
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