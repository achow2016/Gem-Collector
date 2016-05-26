function AI() {
    
}
AI.LEVEL = {
    AMATEUR: 0,
    SEMI_PRO: 1,
    PROFESSIONAL: 2
};

AI.prototype = {
    
};

AI.findTheBestMove = function (level, cells) {
    if (level == AI.LEVEL.AMATEUR) {
        return AI.findTheBestMoveAmateur(cells);
    } else if (level == AI.LEVEL.SEMI_PRO) {
        return AI.findTheBestMoveSemiPro(cells);
    } else {
        return AI.findTheBestMoveProfessional(cells);
    }
}

// Amateur
AI.findTheBestMoveAmateur = function (cells) {
    // Simple algorithm: randomly picking the cell which has at least 1 gem inside
    // and randomly choosing direction
    console.log('findTheBestMoveAmateur');
    var validRange = User.CELL_RANGE[User.TURN.WHITE];
    var cell = null;
    var randomIndex;
    while (cell == null || cell.getTotalGem() == 0) {
        randomIndex = Math.floor((Math.random() * (11 - 7 + 1)) + 7);
        cellId = randomIndex;
        cell = cells[cellId];
    }
    var randomDirection = Math.floor((Math.random() + 0.5));
    var direction = randomDirection == 1 ? GameBoard.DIRECTION.RIGHT : GameBoard.DIRECTION.LEFT;
    return {
        cellId: cellId,
        direction: direction
    };
}

// Semi-Pro
AI.findTheBestMoveSemiPro = function (cells) {
    console.log('findTheBestMoveSemiPro');
    // The first for loop is using the two possible direction 
    // The second nested for loop is using all possible cellId within the valid range
    // In each inner for loop we will create a new AI move object and let it run 
    // to return the gem gain for each move.
    // The first move that return a positive gem will be selected and break the loop.
    var validRange = User.CELL_RANGE[User.TURN.WHITE];
    var directionType;
    for (directionType = 0; directionType <= 1; directionType++) {
        var possibleCellId;
        var direction = directionType == 1 ? GameBoard.DIRECTION.RIGHT : GameBoard.DIRECTION.LEFT; 
        for (possibleCellId = validRange[0]; possibleCellId <= validRange[1]; possibleCellId++) {
            var aiMove = new AIMove(cells, direction, possibleCellId);

            var possibleGainGem = aiMove.makeTrialMove();

            if ((possibleGainGem.smallGem + (possibleGainGem.bigGem * 10)) > 0) {
                return {
                    cellId: possibleCellId,
                    direction: direction
                };
            }
        }
    }
    // At this point no possible direction or possible cellId that can gain gem
    // Let fall back to AI.findTheBestMoveAmatuer(); to make move
    return AI.findTheBestMoveAmateur(cells);
}

// Professional
AI.findTheBestMoveProfessional = function (cells) {
    console.log('findTheBestMoveProfessional');
     // The first for loop is using the two possible direction 
    // The second nested for loop is using all possible cellId within the valid range
    // In each inner for loop we will create a new AI move object and let it run 
    // to return the gem gain for each move.
    // Finally compare the gained gem in all steps to make the best move
    return {
        cellId: cellId,
        direction: GameBoard.DIRECTION.RIGHT
    };
}

function AIMove(cells, trialDirection, trialCellId) {
    // Deep copy the cells so that each trial move doesn't change
    // the original cells of the game_engine
    this.cells = cells.map(function(cell) {
        if (cell.isMaster()) {
            return new MasterCell(cell.index, cell.getTotalGem(), cell.getTotalBigGem());
        }
        return new Cell(cell.index, cell.getTotalGem());
    });
    
    this.trialCellId = trialCellId;
    this.trialDirection = trialDirection;
} 

AIMove.prototype = {
    // Using the current cellId, current direction to execute the move
    // until gain something or end turn. (should return the total gain gem)
    makeTrialMove: function() {
        var gainGem = this.makeMove(this.trialCellId);

        return gainGem;
    },
    makeMove: function(cellId) {
        var sign = this.trialDirection * User.TURN.WHITE;
        var cell = this.cells[cellId];
        var holdingGem = cell.getTotalGem();
        cell.reset(true);
        if (holdingGem > 0) {
            var nextOneCellIndex = cell.getNextOneIndex(sign);
            return this.spreadGem(holdingGem, nextOneCellIndex);
        }
        return {
            smallGem: 0,
            bigGem: 0
        };
    },
    // This cellId is the cellId of the first cell to spread the gem 
    spreadGem: function(holdingGem, cellId) {
        var sign = this.trialDirection * User.TURN.WHITE;
        var cell = this.cells[cellId];
        cell.addUp(true);
        holdingGem = holdingGem - 1;
        if (holdingGem > 0) {
            var nextOneCellIndex = cell.getNextOneIndex(sign);
            cellId = nextOneCellIndex;
            return this.spreadGem(holdingGem, cellId);
       } else {
            return this.handleLandedCell(cellId);
       }
    },
    handleLandedCell: function(cellId) {
        var sign = this.trialDirection * User.TURN.WHITE;
        var landedCell = this.cells[cellId];
        var nextOneCellIndex = landedCell.getNextOneIndex(sign);
        var nextOneCell = this.cells[nextOneCellIndex];
        if (nextOneCell.getTotalGem() != 0) {
            if (!nextOneCell.isMaster()) {
                // continue spreading
                var holdingGem = nextOneCell.getTotalGem();
                nextOneCell.reset(true);
                var cellId = nextOneCell.getNextOneIndex(sign);
                return this.spreadGem(holdingGem, cellId);
            } else {
                return {
                    smallGem: 0,
                    bigGem: 0
                };
            }
        } else {
            var landedNextTwoCellIndex = landedCell.getNextTwoIndex(sign); 
            var landedNextTwoCell = this.cells[landedNextTwoCellIndex];
            if (landedNextTwoCell.getTotalGem() == 0) {
                return {
                    smallGem: 0,
                    bigGem: 0
                };
            } else {
                return this.handleGainGem(landedNextTwoCellIndex);
            }
        }
    },
    handleGainGem: function(cellId) {
        // This cellId is where user gain gem
        var sign = this.trialDirection * User.TURN.WHITE;
        var cell = this.cells[cellId];
        var smallGem = cell.getTotalGem();
        var bigGem = cell.isMaster() ? cell.getTotalBigGem() : 0;
        var totalSmallGem = smallGem;
        var totalBigGem = bigGem;
        cell.reset(true); 
        var nextOneCellIndex = cell.getNextOneIndex(sign);
        var nextOneCell = this.cells[nextOneCellIndex];
        if (nextOneCell.getTotalGem() != 0) {
            // No more gem to gain. Return the gem gained from previous cell
            return {
                smallGem: totalSmallGem,
                bigGem: totalBigGem
            };
        } else {
            var continuousGain = this.handleGainGem(nextOneCell.getNextOneIndex(sign));
            return {
                smallGem: totalSmallGem + continuousGain.totalSmallGem,
                bigGem: totalBigGem + continuousGain.totalBigGem
            };
        }
    } 
}
