var popUpBox = document.getElementById("popUp");
var rank = document.getElementById("rankLink");
var content = "Leaderboard";
rank.onclick = function() {
    popUpBox.style.display = "block";
    popUpContent.innerHTML = content;
}

function popUp() {
    popUpBox.style.display = "block";
    popUpContent.innerHTML = content;
}

//get <span> that closes the popUp div
var span = document.getElementByClassName('close')[0];
sapn.onclick = function() {
    popUp.style.display = "none";
}