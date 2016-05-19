function Q1check() {
         $("#UserRight1").css("background-image", "url(pictures/Q.png)");
         $("#UserRight1 img").css("display", "none");
         $("#OppntLeft2").css("background-image", "url(pictures/A.png)");
         $("#OppntLeft2 img").css("display", "none");
     }

     function Q1uncheck() {
         $("#UserRight1").css("background-image", "url()");
         $("#UserRight1 img").css("display", "initial");
         $("#OppntLeft2").css("background-image", "url()");
         $("#OppntLeft2 img").css("display", "initial");
     }
     function Q2check() {
         $("#OppntRight1").css("background-image", "url(pictures/newQ2Left.png)");
         $("#OppntRight1 img").css("display", "none");
         $("#OppntRight2").css("background-image", "url(pictures/newQ2Right.png)");
         $("#OppntRight2 img").css("display", "none");
         $("#UserLeft1").css("background-image", "url(pictures/newA2Left.png)");
         $("#UserLeft1 img").css("display", "none");
         $("#UserLeft2").css("background-image", "url(pictures/newA2Right.png)");
         $("#UserLeft2 img").css("display", "none");
     }

     function Q2uncheck() {
         $("#OppntRight1").css("background-image", "url()");
         $("#OppntRight1 img").css("display", "initial");
         $("#OppntRight2").css("background-image", "url()");
         $("#OppntRight2 img").css("display", "initial");
         $("#UserLeft1").css("background-image", "url()");
         $("#UserLeft1 img").css("display", "initial");
         $("#UserLeft2").css("background-image", "url()");
         $("#UserLeft2 img").css("display", "initial");
     } 