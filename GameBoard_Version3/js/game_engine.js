// Run the game 
$(document).ready(startGameEngine);

// Creating the maximum number of cells 
var MAX_CELL = 12;
var MAX_USER = 2;

// Chosen cell number
var chosenCell;

// Creating the delay time when we spread the gem 
var DURATION = 500;

// Creating direction object
var DIRECTION = {
    LEFT: 1,
    RIGHT: -1
};

// Creating class GameBoard to store turn, direction and setupInternalCells method
function GameBoard() {
    this.turn = null;
    this.direction = null;
    this.setupInternalCells();
    this.setupUsers();
}
// Creating object for GameBoard
GameBoard.prototype = {
    turn: null,
    direction: null,
    cells: null,
    users: null,
    // Setup cell variable
    setupInternalCells: function() {
        var i;
        // Creating an array name cells
        this.cells = [];
        for (i = 0; i < MAX_CELL; i++) {
            // Creating master cells and normal cells
            if (i == 0 || i == 6) {
                var masterCell = new MasterCell(i, 0, 1);
                this.cells.push(masterCell);
            } else {
                var cell = new Cell(i, 5);
                this.cells.push(cell);
            }
        }
    },
    // Creating the score box
    setupUsers: function() {
        var i;
        this.users = [];
        for (i = 0; i < MAX_USER; i++) {
            var user = new User(i, 0, 0);
            this.users.push(user);
        }
    },
    // Mouse listener
    setupEventListener: function() {
        var that = this;
        // Mouse listener of cell 
        $('div.cell')
          .off('click')
          .on('click', function() {
            var cell = $(this);
            var cellId = cell.data('cell');
            var validRange = User.CELL_RANGE[that.turn];
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
        left.off('click')
            .on('click', function() {
            // Updating the selected direction
            that.direction = DIRECTION.LEFT;
            // Hiding the arrow sign after user choose
            directionDiv.toggle(false);
            // Resolve the promise
            done.resolve(); 
        });
        var right = directionDiv.find('.arrowSignRight');
        right
            .off('click')
            .on('click', function() {
                // Updating the selected direction
            that.direction = DIRECTION.RIGHT; 
            // Hiding the arrow sign after user choose
            directionDiv.toggle(false);
            // Resolve the promise
            done.resolve();
        });
        return done.promise();
    },
    // Disable the mouse listener when the game end 
    endGame: function() {
        $('div.cell').off('click');
    },
    // Checking the player score
    handleGainGem: function(cellId) {
        // This cellId is where user gain gem
        var sign = this.direction * this.turn;
        var cell = this.cells[cellId];
        // Gain small gem
        var smallGem = cell.getTotalGem();
        // Gain big gem if the gain-cell is a master cell
        var bigGem = cell.isMaster() ? cell.getTotalBigGem() : 0;
        // Checking the user id to add the gain gem in their score box 
        var userId = (this.turn == User.TURN.BLACK) ? 0 : 1;
        // Gain gem method 
        this.users[userId].gainGem(smallGem, bigGem);
        // Reset the gain-gem cell after the player gain the gem on that cell
        cell.reset();
        // Checking did any player win
        if (this.users[userId].isWinner(this.users, this.cells)) {
            alert('User '+ userId + ' win!!!');
            this.endGame();
            return; 
        }
        // Checking for combo gain
        var nextOneCellIndex = cell.getNextOneIndex(sign);
        var nextOneCell = this.cells[nextOneCellIndex];
        if (nextOneCell.getTotalGem() != 0) {
            // No more gem to gain. Change turn
            this.turn = this.turn * (-1);
        } else {
            this.handleGainGem(nextOneCell.getNextOneIndex(sign));
        }
    },
    // Deciding gain gem, continue to move or end turn
    handleLandedCell: function(gameState) {
        // Creating the direction to calculate where to move
        var sign = this.direction * this.turn;
        // Creating the landed cell when ever player make a move
        var landedCell = this.cells[gameState.cellId];
        // Move to next cell 
        var nextOneCellIndex = landedCell.getNextOneIndex(sign);
        // Getting the gem of next cell
        var nextOneCell = this.cells[nextOneCellIndex];
        if (nextOneCell.getTotalGem() != 0) {
            if (!nextOneCell.isMaster()) {
                // continue spreading if the total gem of the next cell is not empty and not a master cell
                gameState.holdingGem = nextOneCell.getTotalGem();
                // Reset the gem after pick up the gem of that cell 
                nextOneCell.reset();
                // Getting user chosing direction 
                gameState.cellId = nextOneCell.getNextOneIndex(sign);
                // Spread the gem 
                this.spreadGem(gameState);
            } else {
                // End turn if the total gem of the next cell is not empty but it is a master cell
                this.turn = this.turn * (-1);
            }
        } else {
            var landedNextTwoCellIndex = landedCell.getNextTwoIndex(sign); 
            var landedNextTwoCell = this.cells[landedNextTwoCellIndex];
            if (landedNextTwoCell.getTotalGem() == 0) {
                // When the next box is empty and the next two box is also empty
                // end turn
                this.turn = this.turn * (-1);
            } else {
                // If not, move to the next step
                this.handleGainGem(landedNextTwoCellIndex);
            }
        } 
    },
    // Spreading gem method
    spreadGem: function(gameState) {
        // Get the sign to spread
        var sign = this.direction * this.turn;
        // Get the next cellId
        var cellId = gameState.cellId;
        // Get the variable of the next cell
        var cell = this.cells[cellId];
        // Add 1 gem in 
        cell.addUp();
        // Subtract 1 in the holding gem
        gameState.holdingGem = gameState.holdingGem - 1;
        var that = this;
        // Making the delay every time we move the gem
        setTimeout(function() {
            console.log('after wait', gameState, that);
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
    // Move method
    makeMove: function(cellId) {
        // Getting the direction to move 
        var sign = this.direction * this.turn;
        // Getting the chosen cell id
        var cell = this.cells[cellId];
        // Pick up the gem on the chosen cell
        var holdingGem = cell.getTotalGem();
        // Reset the gem on the chosen cell to 0
        cell.reset();
        // Keep spreading if the holding gem is not run out
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
    start: function() {
        var gameBoard = new GameBoard();
        gameBoard.setupEventListener();
        gameBoard.setupTurn(User.TURN.BLACK);
    }
};
//Creating method startGameEngine
function startGameEngine() {
    var gameEngine = new GameEngine();   
    gameEngine.start();
}