function getGemAnimationP3(){	
	//set picture to html and disapper
	$('#arm1').attr("src","Pictures/Profiles/side/lighteffect.png");
	$("#arm1").css("display","none")
	
	var target = new Object();
	
    //array list for setting box position
	var cellX = ['700px','560px','420px','290px','170px','30px','-100px','40px','160px','300px','420px','560px',];
    var cellY = ['50px','120px','120px','120px','120px','120px','50px','-20px','-20px','-20px','-20px','-20px',];

    var i = 11;

	//Boxs' position
	target.X = cellX[i];
	target.Y = cellY[i];
		
	//add target box  position to css
	$("#arm1").css("left", target.X);
	$("#arm1").css("top" , target.Y);
	
	//fadeIn picture
	$('#arm1').fadeIn(200);
	
	//keep showing, then fadeOut
	setTimeout(function(){
		$('#arm1').fadeOut(850);
	},1050);

}