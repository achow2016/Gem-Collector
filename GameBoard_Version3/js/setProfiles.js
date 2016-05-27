$(function () {
    var opPro = document.getElementById('OppntProfile');
    if (comLv == 0) {
        opPro.css("background-image", "url(pictures/profiles/Easy.jpg)");
    } else if(comLv == 1) {
        opPro.css("background-image", "url(pictures/profiles/chief.jpg)");
    } else if(comLv == 2) {
        opPro.css("background-image", "url(pictures/profiles/SecretPirate.png)");
    } else {
        opPro.css("background-image", "url(pictures/profiles/Easy.jpg)");
    }
});