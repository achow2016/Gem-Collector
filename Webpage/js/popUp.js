var popUP = document.getElementById('popUp');
var rankingLink = document.getElementById('rankingLink');
var content = "Leaderboard";
rankingLink.onclick = function () {
    popUp.style.display = "block";
    /*content*/
}

//get <span> that closes the popUp div
var span = document.getElementByClassName('close')[0];
sapn.onclick = function () {
    popUp.style.display = "none";
}