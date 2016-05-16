/*
Attach code to onload. Button ID is button id in html file.
Function name is event handler. Return data is data from server side 
php file.  
*/ 
Event.observe(window, 'load', function() {
	Event.observe( 'button id', 'click', function name);
	connectToServer();
});

//
function connectToServer()
{
	new Ajax.Updater(
		{ success: 'returndata', failure: 'errors' },
		'IntervalCheck.php',
		{
			method:     'get',
			onSuccess:  function(transport)
			{
				if (parseInt(transport.responseText)) connectToServer();
			}
	});
}