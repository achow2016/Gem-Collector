var skeskeCount = 0;
function changeSkeSke() {
    var skeske = document.getElementById('SkeSke');

    if (skeskeCount == 0) {
        skeske.src = "pictures/skeleton10gifoff_s.png";
        skeskeCount = 1;
    }  else if (skeskeCount == 1) {
        skeske.src = "pictures/skeleton10gifOn_s.gif";
        skeskeCount = 0;
    }
}