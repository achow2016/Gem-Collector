function getGemAnimationP1() {
	var target = new Object();
	var parent = new Object();
	
    //array list for setting box position
	var cellX = ['800px','650px','525px','400px','275px','150px','25px','150px','275px','400px','525px','650px',];
    var cellY = ['175px','250px','250px','250px','250px','250px','175px','100px','100px','100px','100px','100px',];

    var i = 0;

	//Boxs' position
	target.X = cellX[i];
	target.Y = cellY[i];
	
	//set original point of hand
	parent.X = "290px";
	parent.Y = "0px";
		
	//move hand to target box
	$('#arm1')
	.animate({
	    'left': target.X,
	    'top': target.Y	    
	},0)

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
	
	//apper picture of wingOpen on first time
	setTimeout(function(){
        $('#OppntLeft2').css("visibility", "hidden");
        $('#arm1').attr("src","Pictures/Profiles/side/wingOpen.png");
    },0)

	
	//switch picture to wingClose on delay time
	setTimeout(function(){
        $('#arm1').attr("src","Pictures/Profiles/side/wingClose.png");
    },300)


	//disapper picture at last
	setTimeout(function(){
        $('#arm1').attr("src","");
        $('#OppntLeft2').css("visibility", "visible");
    },1750)

}
