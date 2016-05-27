function sendScore() {
		
		var xmlhttp = new XMLHttpRequest();

		//var formName = encodeURIComponent(document.getElementById("name").value);
		//var formScore = encodeURIComponent(document.getElementById("score").value);
		formName = document.getElementById("name").value;
        formScore = document.getElementById("score").value;
        var fullString = (formName + "1" + formScore).toString(); 
        var data = "d=" + encodeURIComponent(fullString);
        xmlhttp.open("POST","writeScoreToTable.php",true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.send(data);
		
        
		
		//checking if necessary or when things are done.
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			alert(xmlhttp.responseText);
            document.getElementById("debug").innerHTML = xmlhttp.responseText;
            document.getElementById("leaderboard").innerHTML = "";
			$("#leaderboard").load("Leaderboard.php");
            
            
        }
}