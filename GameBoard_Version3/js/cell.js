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
    reset: function () {
        this.totalGem = 0;
        this.updateGui();
    },
    //add gem when user moving 
    addUp: function () {
        this.totalGem++;
        this.updateGui();
    },
    //get the total gem on a cell
    getTotalGem: function () {
        return this.totalGem;
    },
    // Displaying the number of gem on normal cell
    updateGui: function () {
        var id = '#Square' + this.index;
        var div = $(id);
        var numDiv = div.find('.NumberMark');
        numDiv.html(this.totalGem);

    },
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
    getNextTwoIndex: function (sign, currentIndex) {
        var index = typeof currentIndex != 'undefined' ? currentIndex : this.index;
        var nextOneIndex = this.getNextOneIndex(sign, index);
        var nextTwoIndex = this.getNextOneIndex(sign, nextOneIndex);
        return nextTwoIndex;
    },
    isMaster: function () {
        return this instanceof MasterCell;
    },
    isEmpty: function () {
        return this.totalGem == 0;
    },
    highLight: function () {
        var id = '#Square' + this.index;
        var div = $(id);
        div.toggleClass('high-light', true);
    },
    unHighLight: function () {
        var id = '#Square' + this.index;
        var div = $(id);
        div.toggleClass('high-light', false);
    }
}

Cell.prototype.constructor = Cell;