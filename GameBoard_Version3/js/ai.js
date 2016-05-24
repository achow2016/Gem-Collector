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
        AI.findTheBestMoveAmateur(cells);
    } else if (level == AI.LEVEL.SEMI_PRO) {
        AI.findTheBestMoveSemiPro(cells);
    } else {
        AI.findTheBestMoveProfessional(cells);
    }
    return {
        cellId: cellId,
        direction: GameBoard.DIRECTION.RIGHT
    };
}

// Amateur
AI.findTheBestMoveAmateur = function (cells) {
    // Simple algorithm: randomly picking the cell which has at least 1 gem inside
    // and randomly choosing direction
    var i;
    var validRange = User.CELL_RANGE[User.TURN.WHITE];
    var cell = null;
    var randomIndex;
    while (cell == null || cell.getTotalGem() == 0) {
        randomIndex = //random lay gia tri tu valid range 0 -> valid range 1;
        // cell = cells[randomIndex];    
    }
    var randomDirection = Math.floor((Math.random() + 0.5));
    var direction = randomDirection == 1 ? GameBoard.DIRECTION.RIGHT : GameBoard.DIRECTION.LEFT;
    return {
        cellId: randomIndex,
        direction: direction
    };
}

// Semi-Pro
AI.findTheBestMoveSemiPro = function (cells) {
    var i;
    var validRange = User.CELL_RANGE[User.TURN.WHITE];
    for (i = validRange[0]; i <= validRange[1]; i++) {
        var cell = cells[i];
        if (cell.getTotalGem() > 0) {
            cellId = i;
            break;
        }
    }
    return {
        cellId: cellId,
        direction: GameBoard.DIRECTION.RIGHT
    };
}

// Professional
AI.findTheBestMoveProfessional = function (cells) {
    var i;
    var validRange = User.CELL_RANGE[User.TURN.WHITE];
    for (i = validRange[0]; i <= validRange[1]; i++) {
        var cell = cells[i];
        if (cell.getTotalGem() > 0) {
            cellId = i;
            break;
        }
    }
    return {
        cellId: cellId,
        direction: GameBoard.DIRECTION.RIGHT
    };
}