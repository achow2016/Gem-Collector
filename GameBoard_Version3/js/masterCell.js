//Creating class name MasterCell 
function MasterCell(index, totalGem) {
	Cell.call(this, index, totalGem);
	this.updateGui();
}
//Creating the object of MasterCell
MasterCell.prototype = Object.create(Cell.prototype);

// Displaying the number of gem on normal cell
MasterCell.prototype.updateGui = function() {
	var id = '#Boss' + this.index;
	var div = $(id);
	var numDiv = div.find('.NumberMark');
	numDiv.html(this.totalGem);
}
MasterCell.prototype.constructor = MasterCell;