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
// Displaying the number of gem on normal cell
MasterCell.prototype.updateGui = function() {
	var id = '#Boss' + this.index;
	var div = $(id);
	var numDiv = div.find('.NumberMark');
	numDiv.html(this.totalGem + ' ' + this.totalBigGem);
}
MasterCell.prototype.constructor = MasterCell;