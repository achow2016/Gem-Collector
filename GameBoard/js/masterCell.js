//Creating class name MasterCell 
function MasterCell(totalGem, totalBigGem) {
	Cell.call(this.totalGem);
	this.totalBigGem = totalBigGem;	
}
//Creating the object of MasterCell
MasterCell.prototype = Object.create(Cell.prototype);
MasterCell.prototype.totalBigGem = null;
MasterCell.prototype.getTotalBigGem = function() {
	return this.totalBigGem;
}
MasterCell.prototype.constructor = MasterCell;