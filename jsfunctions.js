<script>

function cell(totalGem){
	this.totalGem = 0;
	reset = function(){
		this.totalGem = 0;
	}
	addUp = function(){
		this.totalGem++;
	}
	getTotalGem = function() {
	return this.totalGem;
	}
};

masterCell.prototype = Object.create(cell.prototype);
masterCell.prototype.constructor = masterCell;

function masterCell(totalGem,totalBigGem) {
	cell.call(this.totalGem);
	this.totalBigGem = totalBigGem;	
}
	
masterCell.prototype.getTotalBigGem = function(){
	return this.totalBigGem;
};

var MAX_CELL = 12;
var cells = [];
var i;

for(i = 0; i < MAX_CELL; i++){
	if(i == 0 || i ==6){
	var mCell = new masterCell(0,1);
	cells.push(mCell);
	} else {
		var cell = new cell(5);
		cells.push(cell);
			}
};

