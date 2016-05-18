function Q1check() {
         $("#UserRight").css("background-image", "url(pictures/Q.png)");
         $("#UserRight img").css("display", "none");
         $("#OppntLeft").css("background-image", "url(pictures/A.png)");
         $("#OppntLeft img").css("display", "none");
     }

     function Q1uncheck() {
         $("#UserRight").css("background-image", "url()");
         $("#UserRight img").css("display", "initial");
         $("#OppntLeft").css("background-image", "url()");
         $("#OppntLeft img").css("display", "initial");
     }
     function Q2check() {
         $("#OppntRight").css("background-image", "url(pictures/Q2.png)");
         $("#OppntRight img").css("display", "none");
         $("#UserLeft").css("background-image", "url(pictures/A2.png)");
         $("#UserLeft img").css("display", "none");
     }

     function Q2uncheck() {
         $("#OppntRight").css("background-image", "url()");
         $("#OppntRight img").css("display", "initial");
         $("#UserLeft").css("background-image", "url()");
         $("#UserLeft img").css("display", "initial");
     } 