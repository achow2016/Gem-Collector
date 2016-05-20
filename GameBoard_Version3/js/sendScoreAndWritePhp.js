function sendScore() {

        console.log(queryString);
		

		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET","writeScoreToTable.php?" + queryString,true);
		xmlhttp.send();
		
		//checking if necessary or when things are done.
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("leaderboard").innerHTML = "";
			$("#leaderboard").load("Leaderboard.php");
        }
}