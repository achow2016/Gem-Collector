function scoreboard() {

    var playerScoreboard = 1;
    //make visible and position.
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.opacity = "0.6";
    //IE 8 opacity
    document.getElementById("overlay").style.filter = "alpha(opacity=60)";
    document.getElementById("overlay").style.backgroundColor = "white";
    document.getElementById("overlay").style.position = "fixed";
    document.getElementById("overlay").style.top = "0";
    document.getElementById("overlay").style.left = "0";
    document.getElementById("overlay").style.width = "100%";
    document.getElementById("overlay").style.height = "100%";
    document.getElementById("overlay").style.zindex = "99";
    document.getElementById("scoreNumber").innerHTML = playerScoreboard; 
}
       