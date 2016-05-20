//Creating class name MasterCell 
function MasterCell(index, totalGem, totalBigGem) {
	Cell.call(this, index, totalGem);
	this.totalBigGem = totalBigGem;	
	this.updateGui();
}
//Creating the object of MasterCell
MasterCell.prototype = Object.create(Cell.prototype);
MasterCell.prototype.totalBigGem = null;
MasterCell.prototype.getTotalBigGem = function() {
	return this.totalBigGem;
}
// Creating the reset method for master cell 
MasterCell.prototype.reset = function() {
	this.totalBigGem = 0;
	this.totalGem = 0;
	this.updateGui();
}
// Displaying the number of gem on normal cell
MasterCell.prototype.updateGui = function() {
	var id = '#Boss' + this.index;
	var div = $(id);
	var numDiv = div.find('.NumberMark');
	numDiv.html(this.totalGem + ' ' + this.totalBigGem);
}
MasterCell.prototype.constructor = MasterCell;