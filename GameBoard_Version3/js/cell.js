var sign;
//Creating parent class name Cell
function Cell(index, totalGem) { 
	this.index = index;
	this.totalGem = totalGem;
	this.updateGui();
	this.displayGem();
};

// This function is a utility which help the other function calculate how many small gem and big gem on this cell
Cell.calculateGemValue = function(totalGem, totalBigGem) {
	return (totalGem + totalBigGem * 10);
}

//Creating object for Cell
Cell.prototype = {
	totalGem: null,
	index: null,
	//reset the gem in the cell when the user pickup the gem in that cell and make a move  
	reset: function(trialMove) {
		this.totalGem = 0;
		if (!trialMove) {
			this.updateGui();
			this.displayGem();
		}
	},
	//add gem when user moving 
	addUp: function(trialMove) {
		this.totalGem++;
		if (!trialMove) {
			this.updateGui();
			this.displayGem();
		}
	},
	//get the total gem on a cell
	getTotalGem: function() {
		return this.totalGem;
	},
	// Displaying the number of gem on normal cell
	updateGui: function() {
		var id = '#Square' + this.index;
		var div = $(id);
		var numDiv = div.find('.NumberMark');
		numDiv.html(this.totalGem);
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
	getNextOneIndex: function(sign, currentIndex) {
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
	getNextTwoIndex: function(sign, currentIndex) {
		var index = typeof currentIndex != 'undefined' ? currentIndex : this.index;
		var nextOneIndex = this.getNextOneIndex(sign, index);
		var nextTwoIndex = this.getNextOneIndex(sign, nextOneIndex);
		return nextTwoIndex;
	},
	isMaster: function() {
		return this instanceof MasterCell;
	},
	isEmpty: function() {
		return this.totalGem == 0;
	},
	highLight: function() {
		var id = '#Square' + this.index;
		var div = $(id);
		div.toggleClass('high-light', true);
	},
	unHighLight: function() {
		var id = '#Square' + this.index;
		var div = $(id);
		div.toggleClass('high-light', false);
	},
	getGemValue: function() {
		return this.totalGem + this.totalBigGem * 10;
	}
}

Cell.prototype.constructor = Cell;