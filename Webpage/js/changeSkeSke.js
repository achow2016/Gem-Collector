var skeskeCount = 0;
function changeSkeSke() {
    var skeske = document.getElementById('SkeSke');
    var backgroundMusicVolume = document.getElementById('backgroundMusic');

    if (skeskeCount == 0) {
        skeske.src = "pictures/skeleton10gifoff_s.gif";
        backgroundMusicVolume.volume = 0.0;
        skeskeCount = 1;
    }  else if (skeskeCount == 1) {
        skeske.src = "pictures/skeleton10gifOn_s.gif";
        backgroundMusicVolume.volume = 1.0;
        skeskeCount = 0;
    }
}