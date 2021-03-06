//Creating class name MasterCell 
function MasterCell(index, totalGem, totalBigGem) {
	Cell.call(this, index, totalGem);
	this.totalBigGem = totalBigGem;	
	this.updateGui();
	this.displayGem();
}
//Creating the object of MasterCell
MasterCell.prototype = Object.create(Cell.prototype);
MasterCell.prototype.totalBigGem = null;
MasterCell.prototype.getTotalBigGem = function() {
	return this.totalBigGem;
}
// Trial move of the AI
MasterCell.prototype.reset = function(trialMove) {
	this.totalBigGem = 0;
	this.totalGem = 0;
	if (!trialMove) {
		this.updateGui();
		this.displayGem();
	}
}
// Displaying the number of gem on normal cell
MasterCell.prototype.updateGui = function() {
	var id = '#Boss' + this.index;
	var div = $(id);
	var numDiv = div.find('.NumberMark');
	numDiv.html(this.totalGem + ' ' + this.totalBigGem);
}
MasterCell.prototype.constructor = MasterCell;
// Displaying gem in the master cell
MasterCell.prototype.displayGem = function () {
    var id = '#Boss' + this.index;
    if (this.totalBigGem == 0 && this.totalGem == 0) {
        $(id).css("background-image", "url()")
    } else if (this.totalBigGem == 0 && this.totalGem == 1) {
        $(id).css("background-image", "url(pictures/gems/g1.png)");
    } else if (this.totalBigGem == 0 && this.totalGem == 2) {
        $(id).css("background-image", "url(pictures/gems/g2.png)");
    } else if (this.totalBigGem == 0 && this.totalGem == 3) {
        $(id).css("background-image", "url(pictures/gems/g3.png)");
    } else if (this.totalBigGem == 0 && this.totalGem == 4) {
        $(id).css("background-image", "url(pictures/gems/g4.png)");
    } else if (this.totalBigGem == 0 && this.totalGem == 5) {
        $(id).css("background-image", "url(pictures/gems/g5.png)");
    } else if (this.totalBigGem == 0 && this.totalGem == 6) {
        $(id).css("background-image", "url(pictures/gems/g6.png)");
    } else if (this.totalBigGem == 0 && this.totalGem == 7) {
        $(id).css("background-image", "url(pictures/gems/g7.png)");
    } else if (this.totalBigGem == 0 && this.totalGem == 8) {
        $(id).css("background-image", "url(pictures/gems/g8.png)");
    } else if (this.totalBigGem == 0 && this.totalGem == 9) {
        $(id).css("background-image", "url(pictures/gems/g9.png)");
    } else if (this.totalBigGem == 0 && this.totalGem == 10) {
        $(id).css("background-image", "url(pictures/gems/g10.png)");
    } else if (this.totalBigGem == 0 && this.totalGem < 10) {
        $(id).css("background-image", "url(pictures/gems/gg.png)");
    } else if (this.totalBigGem == 1 && this.totalGem == 0) {
        $(id).css("background-image", "url(pictures/gems/b10.png)");
    } else if (this.totalBigGem == 1 && this.totalGem == 1) {
        $(id).css("background-image", "url(pictures/gems/b11.png)");
    } else if (this.totalBigGem == 1 && this.totalGem == 2) {
        $(id).css("background-image", "url(pictures/gems/b12.png)");
    } else if (this.totalBigGem == 1 && this.totalGem == 3) {
        $(id).css("background-image", "url(pictures/gems/b13.png)");
    } else if (this.totalBigGem == 1 && this.totalGem == 4) {
        $(id).css("background-image", "url(pictures/gems/b14.png)");
    } else if (this.totalBigGem == 1 && this.totalGem == 5) {
        $(id).css("background-image", "url(pictures/gems/b15.png)");
    } else if (this.totalBigGem == 1 && this.totalGem == 6) {
        $(id).css("background-image", "url(pictures/gems/b16.png)");
    } else if (this.totalBigGem == 1 && this.totalGem == 7) {
        $(id).css("background-image", "url(pictures/gems/b17.png)");
    } else if (this.totalBigGem == 1 && this.totalGem == 8) {
        $(id).css("background-image", "url(pictures/gems/b18.png)");
    } else if (this.totalBigGem == 1 && this.totalGem == 9) {
        $(id).css("background-image", "url(pictures/gems/b19.png)");
    } else if (this.totalBigGem == 1 && this.totalGem == 10) {
        $(id).css("background-image", "url(pictures/gems/b110.png)");
    } else if (this.totalBigGem == 1 && this.totalGem < 10) {
        $(id).css("background-image", "url(pictures/gems/bb.png)");
    } 
}
