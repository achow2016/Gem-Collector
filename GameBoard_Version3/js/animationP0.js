function getGemAnimationP0(){
	var target = new Object();
	var parent = new Object();

    //array list for setting box position
	var cellX = ['800px','650px','525px','400px','275px','150px','25px','150px','275px','400px','525px','650px',];
    var cellY = ['175px','200px','200px','200px','250px','200px','175px','100px','100px','100px','100px','100px',];

    var i = 1;

	//Boxs' position
	target.X = cellX[i];
	target.Y = cellY[i];
	
	//set original point of hand
    parent.X = "500px";
	parent.Y = "350px";
		
	//move hand to target box
	$('#arm0')
	.animate({
	    'left': target.X,
	    'top': target.Y	    
	},200)

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

	    $("#UserRight1").css("visibility", "hidden");
	    $('#arm0').attr("src", "Pictures/Profiles/side/armOpen.png");


	
	//switch picture to armClose on delay time
	setTimeout(function () {
	    $('#arm0').attr("src", "Pictures/Profiles/side/armClose.png");
	}, 400)


	//disapper picture at last
	setTimeout(function () {
	    $('#arm0').attr("src", "");
	    $("#UserRight1").css("visibility", "visible");
	}, 1750)

}
