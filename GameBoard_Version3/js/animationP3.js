$(function getGemAnimaitonP3(){	
	//set picture to html and disapper
	$('#arm3').attr("src","Pictures/Profiles/side/lighteffect.png");
	$("#arm3").css("display","none")
	
	var target = new Object();
	
	// set target Boxs' position
	target.X = "40px"
	target.Y = "40px"
		
	//add target box  position to css
	$("#arm3").css("left", target.X);
	$("#arm3").css("top" , target.Y);
	
	//fadeIn picture
	$('#arm3').fadeIn(850);
	
	//keep showing, then fadeOut
	setTimeout(function(){
		$('#arm3').fadeOut(850);
	},1900);

});