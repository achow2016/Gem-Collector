var skeskeCount = 0;
function changeSkeSke() {
    var skeske = document.getElementById('SkeSke');

    if (skeskeCount == 0) {
        skeske.src = "pictures/skeskeSleep.png";
        skeskeCount = 1;
    }  else if (skeskeCount == 1) {
        skeske.src = "pictures/skeske.png";
        skeskeCount = 0;
    }
}