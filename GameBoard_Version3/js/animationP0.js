function getGemAnimaitonP0() {
	var target = new Object();
	var parent = new Object();
	
	//Boxs' position
	target.X = "100px";
	target.Y = "100px";
	
	//set original point of hand
	parent.X = "500px";
	parent.Y = "300px";
		
	//move hand to target box
	$('#arm0')
	.animate({
	    'left': target.X,
	    'top': target.Y	    
	},750)

	//keep hand at target box for a second	
	.animate({
	    'left': target.X,
	    'top': target.Y
	},1000)
	
	//move hand to parent place
	.animate({
	    'left': parent.X,
	    'top': parent.Y
	},750)
	
	//apper picture of armOpen on first time
	setTimeout(function(){
        $('#arm0').attr("src","../pictures/profiles/side/armOpen.png");
    },0)

	
	//switch picture to armClose on delay time
	setTimeout(function(){
        $('#arm0').attr("src","../pictures/profiles/side/armClose.png");
    },1400)


	//disapper picture at last
	setTimeout(function(){
        $('#arm0').attr("src","");
    },2750)

};
