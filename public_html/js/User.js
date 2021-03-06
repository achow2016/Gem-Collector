function User(id, totalGem, totalBigGem) {
    this.id = id;
    this.totalGem = totalGem;
    this.totalBigGem = totalBigGem;
    this.updateGui();
}

//Creating turn object
User.TURN = {
    BLACK: 1,
    WHITE: -1
};

//Creating cell range 
User.CELL_RANGE = {};
User.CELL_RANGE[User.TURN.BLACK] = [1, 5];
User.CELL_RANGE[User.TURN.WHITE] = [7, 11];

//The score to push on the leaderboard
var SCORE;

User.prototype = {
    totalGem: null,
    totalBigGem: null,
    id: null,
    updateGui: function() {
        id = '#ScoreBox' + this.id;
		var div = $(id);
		var gemDiv = div.find('.gem');
        var bigGemDiv = div.find('.big');
		gemDiv.html(this.totalGem);
        bigGemDiv.html(this.totalBigGem)
    },
    gainGem: function(totalGem, totalBigGem) {
        this.totalGem = this.totalGem + totalGem;
        this.totalBigGem = this.totalBigGem + totalBigGem;
        this.updateGui();
    },
    isWinner: function(users, cells) {
        // the winner is:
        // - has 40 gem units more than the other has
        var gemUnit = this.totalGem + (this.totalBigGem * 10);
        if (gemUnit > 40) {
            return true;
        } 
        // - the other user is a loser
        var otherUserId = this.id == 0 ? 1 : 0;
        var otherUser = users[otherUserId];
        SCORE = gemUnit;
        return otherUser.isLoser(cells);
    },
    isLoser: function(cells) {
        var turn = (this.id == 0) ? User.TURN.BLACK : User.TURN.WHITE;
        var i;
        var range = User.CELL_RANGE[turn];
        var nothingLeft = true;
        for (i = range[0]; i <= range[1]; i++) {
            var cell = cells[i];
            var totalGem = cell.getTotalGem();
            if (totalGem > 0) {
                nothingLeft = false;
            }
        }
        return nothingLeft;
    }
}