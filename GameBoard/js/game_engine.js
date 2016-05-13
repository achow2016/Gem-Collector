$(document).ready(startGameEngine);
var MAX_CELL = 12;
var TURN = {
    BLACK: 0,
    WHITE: 1
};

var DIRECTION = {
    LEFT: 0,
    RIGHT: 1
};

var CELL_RANGE = {};
CELL_RANGE[TURN.BLACK] = [1, 5];
CELL_RANGE[TURN.WHITE] = [7, 11];

function GameBoard() {
    this.turn = null;
    this.direction = null;
    this.setupInternalCells();
}
GameBoard.prototype = {
    turn: null,
    direction: null,
    cells: null,
    setupInternalCells: function() {
        var i;
        this.cells = [];
        for (i = 0; i < MAX_CELL; i++) {
            if (i == 0 || i == 6) {
                var masterCell = new MasterCell(0, 1);
                this.cells.push(masterCell);
            } else {
                var cell = new Cell(5);
                this.cells.push(cell);
            }
        }
    },
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
    setupTurn: function(turn) {
        this.turn = turn; 
    },
    getDirection: function(cellId) {
        //Temporary method to test busines logic, Ebon will complete this
        var r = confirm('Go right?');
        if (r == true) {
            this.direction = DIRECTION.RIGHT;
        } else {
            this.direction = DIRECTION.LEFT;
        }
    }
};


function GameEngine() {
}
GameEngine.prototype = {
    start: function() {
        var gameBoard = new GameBoard();
        gameBoard.setupEventListener();
        gameBoard.setupTurn(TURN.BLACK);
    }
};
function startGameEngine() {
    var gameEngine = new GameEngine();   
    gameEngine.start();
}