<?php
			$servername = "mysql7.000webhost.com";
			$username = "a1753342_user";
			$password = "bladeands0ul";
			$dbname = "a1753342_main";
			// Create connection
			$conn = new mysqli($servername, $username, $password, $dbname);
			// Check connection
			if ($conn->connect_error) {
				die("Connection failed: " . $conn->connect_error);
			} 

			$sql = "SELECT (Name, Level, Score, Achievement FROM Leaderboard ORDER BY Level DESC, Score DESC LIMIT 10";
			$result = $conn->query($sql);

			if ($result->num_rows > 0) {
				echo "<table width=400><tr><th>Name</th><th>Level</th><th>Score</th><th>Achievements</th></tr>";
				// output data of each row
				while($row = $result->fetch_assoc()) {
										echo "<tr><td>" . $row["Name"]. "</td><td>" . $row["Level"]. "</td><td>" . $row["Score"]. "</td><td>" . $row["Achievement"]. "</td></tr>";
				}
				echo "</table>";
				} else {
					echo "0 results";
	}

			$conn->close();
?>  