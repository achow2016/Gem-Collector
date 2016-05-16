var sign;
//Creating parent class name Cell
function Cell(index, totalGem) { 
	this.index = index;
	this.totalGem = totalGem;
	this.updateGui();
};
//Creating object for Cell
Cell.prototype = {
	totalGem: null,
	index: null,
	//reset the gem in the cell when the user pickup the gem in that cell and make a move  
	reset: function() {
		this.totalGem = 0;
		this.updateGui();
	},
	//add gem when user moving 
	addUp: function() {
		this.totalGem++;
		this.updateGui();
	},
	//get the total gem on a cell
	getTotalGem: function() {
		return this.totalGem;
	},
	// Displaying the number of gem on normal cell
	updateGui: function() {
		var id = '#Square' + this.index;
		var div = $(id);
		var numDiv = div.find('.NumberMark');
		numDiv.html(this.totalGem);
	}
}

Cell.prototype.constructor = Cell;