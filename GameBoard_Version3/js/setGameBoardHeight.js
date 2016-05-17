function setGameBoardHeight() {
    var h = window.innerHeight;
    document.getElementById('OppntLine').style.height = (h * 0.25) + "px";
    document.getElementById('GameBoardLine').style.height = (h * 0.5) + "px";
    document.getElementById('UserLine').style.height = (h * 0.25) + "px";
}