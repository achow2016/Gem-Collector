//receive php response.
var receivePhp;


//apply array to function parameter.
functionName.apply(cells[0],cells[1],cells[2]
,cells[3],cells[4],cells[5],cells[6],cells[7],
cells[8],cells[9],cells[10],cells[11]);

function transmitToPhp(a,b,c,d,e,f,g,h,i,j,k,m) {
    

var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readystate == 4 && xmlhttp.status == 200) {

		//convert array to string.

		arrayToStringName = arrayName.join(",");
		xmlhttp.open("post", "serverprocessing.php");
		xmlhttp.setRequestHeader("Content-Type","application/JSON");

		//send string.

		xmlhttp.send(arrayToStringName);
		
		//receive ID from php as array.
		
		receivePhp = JSON.parse(xmlhttp.responseText);		
		
		/*
		Extract array ID value and process in function for 
		storing turn/checking turn, etc.		
		*/
		
		
		receiveTurn(receivePhp[0]);
		}
	};
}