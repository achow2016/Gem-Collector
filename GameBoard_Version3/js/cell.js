//Creating parent class name Cell
function Cell(totalGem){
	this.totalGem = totalGem;
};
//Creating object for Cell
Cell.prototype = {
	totalGem: null,
	//reset the gem in the cell when the user pickup the gem in that cell and make a move  
	reset: function() {
		this.totalGem = 0;
	},
	//add gem when user moving 
	addUp: function() {
		this.totalGem++;
	},
	//get the total gem on a cell
	getTotalGem: function() {
		return this.totalGem;
	}
}

Cell.prototype.constructor = Cell;