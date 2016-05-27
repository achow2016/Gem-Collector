//Run the game 
$(document).ready(startGameEngine);

//Creating the maximum number of cells 
var MAX_CELL = 12;
var MAX_USER = 2;
//Chosen cell number
var chosenCell;

var DURATION = 500;

//Creating class GameBoard to store turn, direction and setupInternalCells method
function GameBoard() {
    this.turn = null;
    this.gameType = null;
    this.level = null;
    this.direction = null;
    this.setupInternalCells();
    this.setupUsers();
}

GameBoard.TYPE = {
    HUMAN_VS_COMPUTER: 0,
    HUMAN_VS_HUMAN: 1
};

//Creating direction object
GameBoard.DIRECTION = {
    LEFT: 1,
    RIGHT: -1
};

//Creating object for GameBoard
GameBoard.prototype = {
    turn: null,
    gameType: null,
    level: null,
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
        $('div.cell')
          .off('click')
          .on('click', function() {
            var cell = $(this);
            var cellId = cell.data('cell');
            var validRange = User.CELL_RANGE[that.turn];
            if (that.direction == GameBoard.DIRECTION.LEFT 
                || that.direction == GameBoard.DIRECTION.RIGHT) {
                return false;
            }
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
    setupGameType: function(gameType) {
        this.gameType = gameType;
    },
    setupLevel: function(level) {
        this.level = level;
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
        left.off('click')
            .on('click', function() {
            // Updating the selected direction
            that.direction = GameBoard.DIRECTION.LEFT;
            // Hiding the arrow sign after user choose
            directionDiv.toggle(false);
            // Resolve the promise
            done.resolve(); 
        });
        var right = directionDiv.find('.arrowSignRight');
        right
            .off('click')
            .on('click', function() {
            that.direction = GameBoard.DIRECTION.RIGHT; 
            directionDiv.toggle(false);
            done.resolve();
        });
        return done.promise();
    },
    changeTurn: function() {
        this.turn = this.turn * (-1);
        this.direction = null;
        var userId = (this.turn == User.TURN.BLACK) ? 0 : 1;
        if (this.users[userId].isWinner(this.users, this.cells)) {
            if (userId == 0) {
                alert('Congratulation! You are the winner!!!');
            } else {
                alert('Sorry! Try better next time.')
            }
            this.endGame();
            return; 
        }
        if (this.gameType == GameBoard.TYPE.HUMAN_VS_COMPUTER && this.turn == User.TURN.WHITE) {
            var computerMove = AI.findTheBestMove(this.level, this.cells);
            console.log(computerMove);
            // Expected computerMove will contain {
            //   cellId: the best cell index to move, 
            //   direction: the best direction to move,
            // }
            this.direction = computerMove.direction;
            this.makeMove(computerMove.cellId);
        }  
    },
    endGame: function() {
        $('div.cell').off('click');
    },
    handleGainGem: function(cellId) {
        // This cellId is where user gain gem
        var sign = this.direction * this.turn;
        var cell = this.cells[cellId];
        var smallGem = cell.getTotalGem();
        var bigGem = cell.isMaster() ? cell.getTotalBigGem() : 0;
        var userId = (this.turn == User.TURN.BLACK) ? 0 : 1;
        this.users[userId].gainGem(smallGem, bigGem);
        cell.reset();
        if (this.users[userId].isWinner(this.users, this.cells)) {
            alert('User '+ userId + ' win!!!');
            this.endGame();
            return; 
        }
        var nextOneCellIndex = cell.getNextOneIndex(sign);
        var nextOneCell = this.cells[nextOneCellIndex];
        if (nextOneCell.getTotalGem() != 0) {
            // No more gem to gain. Change turn
            this.changeTurn();
        } else {
            this.handleGainGem(nextOneCell.getNextOneIndex(sign));
        }
    },
    handleLandedCell: function(gameState) {
        var sign = this.direction * this.turn;
        var landedCell = this.cells[gameState.cellId];
        var nextOneCellIndex = landedCell.getNextOneIndex(sign);
        var nextOneCell = this.cells[nextOneCellIndex];
        if (nextOneCell.getTotalGem() != 0) {
            if (!nextOneCell.isMaster()) {
                // continue spreading
                gameState.holdingGem = nextOneCell.getTotalGem();
                nextOneCell.reset();
                gameState.cellId = nextOneCell.getNextOneIndex(sign);
                this.spreadGem(gameState);
            } else {
                this.changeTurn();
            }
        } else {
            var landedNextTwoCellIndex = landedCell.getNextTwoIndex(sign); 
            var landedNextTwoCell = this.cells[landedNextTwoCellIndex];
            if (landedNextTwoCell.getTotalGem() == 0) {
                this.changeTurn();
            } else {
                this.handleGainGem(landedNextTwoCellIndex);
            }
        } 
    },
    spreadGem: function(gameState) {
        var sign = this.direction * this.turn;
        var cellId = gameState.cellId;
        var cell = this.cells[cellId];
        cell.addUp();
        gameState.holdingGem = gameState.holdingGem - 1;

        var that = this;
        setTimeout(function() {
            if (gameState.holdingGem > 0) {
                var nextOneCellIndex = cell.getNextOneIndex(sign);
                gameState.cellId = nextOneCellIndex;
                that.spreadGem(gameState);
            } else {
                // gameState.cellId at this point is holding the landed cellId
                that.handleLandedCell(gameState);
            }
        }, DURATION);
    },
    makeMove: function(cellId) {
        var sign = this.direction * this.turn;
        var cell = this.cells[cellId];
        var holdingGem = cell.getTotalGem();
        cell.reset();
        if (holdingGem > 0) {
            var nextOneCellIndex = cell.getNextOneIndex(sign);
            this.spreadGem(new GameState(holdingGem, nextOneCellIndex));
        }
    }
};

//Creating class GameEngine
function GameEngine() {
}
//Creating object for GameEngine
GameEngine.prototype = {
    start: function(gameConfig) {
        var gameBoard = new GameBoard();
        gameBoard.setupGameType(gameConfig.type);
        gameBoard.setupEventListener();
        gameBoard.setupTurn(User.TURN.BLACK);
        if (gameConfig.hasOwnProperty('level')) {
            gameBoard.setupLevel(gameConfig.level);
        }
    }
};
//Creating method startGameEngine
function startGameEngine() {
    var gameEngine = new GameEngine();
    gameEngine.start(gameConfig);
}