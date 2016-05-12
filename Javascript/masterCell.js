masterCell.prototype = Object.create(cell.prototype);
masterCell.prototype.constructor = masterCell;

function masterCell(totalGem,totalBigGem) {
	cell.call(this.totalGem);
	this.totalBigGem = totalBigGem;	
}
	
masterCell.prototype.getTotalBigGem = function(){
	return this.totalBigGem;
};