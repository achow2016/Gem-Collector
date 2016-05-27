function getGemAnimationP2() {
	var target = new Object();
	var parent = new Object();
	
    //array list for setting box position
	var cellX = ['825px','675px','550px','425px','300px','175px','50px','175px','300px','425px','550px','675px'];
    var cellY = ['100px','150px','150px','150px','150px','150px','100px','25px','25px','25px','25px','25px'];

    var i = 0;

	//Boxs' position
	target.X = cellX[i];
	target.Y = cellY[i];
	
	//set original point of hand
	parent.X = "340px";
	parent.Y = "-100px";
		
	//move hand to target box
	$('#arm1')
	.animate({
	    'left': target.X,
	    'top': target.Y	    
	},300)

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
	
	//apper picture of fookOpen on first time

        $('#OppntLeft2').css("visibility", "hidden");
        $('#arm1').attr("src","Pictures/Profiles/side/fookOpen.png");

	
	//switch picture to fookClose on delay time
	setTimeout(function(){
        $('#arm1').attr("src","Pictures/Profiles/side/fookClose.png");
    },600)


	//disapper picture at last
	setTimeout(function(){
        $('#arm1').attr("src","");
        $('#OppntLeft2').css("visibility", "visible");
    },1750)

}
