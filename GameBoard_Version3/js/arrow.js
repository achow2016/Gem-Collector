
function arrow() {
    var tempIdLeft = "cell" + chosenCell + "Left";
    var leftArrow = document.getElementById(tempIdLeft).src = "Pictures/arrowLeft.png";
    var tempIdRight = "cell" + chosenCell + "Right";
    var rightArrow = document.getElementById(tempIdRight).src = "Pictures/arrowRight.png";
    rightArrow = document.getElementById(tempIdRight).attachEvent('on', 'click', sign = 1);
}