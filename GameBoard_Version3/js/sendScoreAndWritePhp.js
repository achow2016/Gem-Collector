function sendScore() {
		//format for post: name=value&
		
		//score form id
		var formInfo = document.getElementById("scoreForm");
		
		//shortens typing for form value sending.
		var formData = encodeURIComponent(formInfo.value);
		
		//preparations. open and encode formats.
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET","writeScoreToTable.php",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		
        //check this sending.

		//form name for text input must be name and score (in that order)
		xmlhttp.send("/?" + queryString);
		
		//checking if necessary or when things are done.
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("leaderboard").innerHTML = "";
			$("#leaderboard").load("Leaderboard.php");
        }
}