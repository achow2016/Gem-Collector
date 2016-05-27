var skeskeCount = 0;

function setBackMusic() {
    var backgroundMusicVolume = document.getElementById('backgroundMusic');
    var backMusic = new Audio('music/bensound-ukulele.mp3')
    backMusic.play();
    backgroundMusicVolume.volume = 0.75;
}

function changeSkeSke() {
    var skeske = document.getElementById('SkeSke');
    var backgroundMusicVolume = document.getElementById('backgroundMusic');

    if (skeskeCount == 0) {
        skeske.src = "pictures/skeleton10gifoff_s.gif";
        backgroundMusicVolume.volume = 0.0;
        skeskeCount = 1;
    }  else if (skeskeCount == 1) {
        skeske.src = "pictures/skeleton10gifOn_s.gif";
        backgroundMusicVolume.volume = 0.75;
        skeskeCount = 0;
    }
}