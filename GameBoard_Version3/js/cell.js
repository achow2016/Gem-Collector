var sign;
//Creating parent class name Cell
function Cell(index, totalGem) { 
	this.index = index;
	this.totalGem = totalGem;
	this.updateGui();
    this.displayGem();
};
//Creating object for Cell
Cell.prototype = {
    totalGem: null,
    index: null,
    //reset the gem in the cell when the user pickup the gem in that cell and make a move  
    reset: function () {
        this.totalGem = 0;
        this.updateGui();
        this.displayGem();
    },
    //add gem when user moving 
    addUp: function () {
        this.totalGem++;
        this.updateGui();
        this.displayGem();
    },
    //get the total gem on a cell
    getTotalGem: function () {
        return this.totalGem;
    },
    //Display Gem on cell 
    displayGem: function () {
        var id = '#Square' + this.index;
        if ( this.totalGem == 0) {
            $(id).css("background-image", "url()")
        } else if (this.totalGem == 1) {
            $(id).css("background-image", "url(pictures/gems/g1.png)");
        } else if (this.totalGem == 2) {
            $(id).css("background-image", "url(pictures/gems/g2.png)");
        } else if (this.totalGem == 3) {
            $(id).css("background-image", "url(pictures/gems/g3.png)");
        } else if (this.totalGem == 4) {
            $(id).css("background-image", "url(pictures/gems/g4.png)");
        } else if (this.totalGem == 5) {
            $(id).css("background-image", "url(pictures/gems/g5.png)");
        } else if (this.totalGem == 6) {
            $(id).css("background-image", "url(pictures/gems/g6.png)");
        } else if (this.totalGem == 7) {
            $(id).css("background-image", "url(pictures/gems/g7.png)");
        } else if (this.totalGem == 8) {
            $(id).css("background-image", "url(pictures/gems/g8.png)");
        } else if (this.totalGem == 9) {
            $(id).css("background-image", "url(pictures/gems/g9.png)");
        } else if (this.totalGem == 10) {
            $(id).css("background-image", "url(pictures/gems/g10.png)");
        } else if (this.totalGem > 10) {
            $(id).css("background-image", "url(pictures/gems/gg.png)");
        }

    },
    // Displaying the number of gem on normal cell
    updateGui: function () {
        var id = '#Square' + this.index;
        var div = $(id);
        var numDiv = div.find('.NumberMark');
        numDiv.html(this.totalGem);
    },
    // Get the id of the next cell 
    getNextOneIndex: function (sign, currentIndex) {
        // If user want to get next index for a given index we use that index to start 
        // otherwise use the index of this cell
        var index = typeof currentIndex != 'undefined' ? currentIndex : this.index;
        var nextOneIndex;
        if ((index == 11 && sign == 1) || (index == 0 && sign == -1)) {
            nextOneIndex = (-11) * sign + index;
        } else {
            nextOneIndex = index + sign;
        }
        return nextOneIndex;
    },
    // Checking the cell is master cell or not 
    isMaster: function () {
        return this instanceof MasterCell;
    }
}

Cell.prototype.constructor = Cell;