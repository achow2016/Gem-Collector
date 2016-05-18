function setGameBoardHeight() {
    var h = window.innerHeight;
    var w = window.innerWidth;
    if (w < 1000 && h > 500) {
        document.getElementById('OppntLine').style.width = w + "px";
        document.getElementById('GameBoardLine').style.width = w + "px";
        document.getElementById('UserLine').style.width = w + "px";
    } else if (w > 1000 && h < 500) {
        document.getElementById('OppntLine').style.height = (h * 0.25) + "px";
        document.getElementById('GameBoardLine').style.height = (h * 0.5) + "px";
        document.getElementById('UserLine').style.height = (h * 0.25) + "px";
    }
    
}