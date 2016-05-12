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