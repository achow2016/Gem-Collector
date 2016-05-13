function Cell(totalGem){
	this.totalGem = totalGem;
};

Cell.prototype = {
	totalGem: null,
	reset: function() {
		this.totalGem = 0;
	},
	addUp: function() {
		this.totalGem++;
	},
	getTotalGem: function() {
		return this.totalGem;
	}
}

Cell.prototype.constructor = Cell;