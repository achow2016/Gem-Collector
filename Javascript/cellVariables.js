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