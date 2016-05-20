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

User.prototype = {
    totalGem: null,
    totalBigGem: null,
    id: null,
    // Updating the score box 
    updateGui: function() {
        id = '#ScoreBox' + this.id;
		var div = $(id);
		var gemDiv = div.find('.gem');
        var bigGemDiv = div.find('.big');
		gemDiv.html(this.totalGem);
        bigGemDiv.html(this.totalBigGem)
    },
    // Getting gem and store in the score box 
    gainGem: function(totalGem, totalBigGem) {
        this.totalGem = this.totalGem + totalGem;
        this.totalBigGem = this.totalBigGem + totalBigGem;
        this.updateGui();
    },
    // Checking do any player win 
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
        return otherUser.isLoser(cells);
    },
    // cehcking the other player is lost or not 
    isLoser: function(cells) {
        var turn = (this.id == 0) ? User.TURN.BLACK : User.TURN.WHITE;
        var i;
        var range = User.CELL_RANGE[turn];
        var nothingLeft = true;
        // Checking the opponent field is empty or not 
        for (i = range[0]; i <= range[1]; i++) {
            var cell = cells[i];
            var totalGem = cell.getTotalGem();
            // if it not empty continue to play 
            if (totalGem > 0) {
                nothingLeft = false;
            }
        }
        return nothingLeft;
    }
}