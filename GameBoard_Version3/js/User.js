function User(id, totalGem, totalBigGem) {
    this.id = id;
    this.totalGem = totalGem;
    this.totalBigGem = totalBigGem;
    this.updateGui();
}

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
        this.totalBigGem = totalBigGem;
        this.updateGui();
    }
}