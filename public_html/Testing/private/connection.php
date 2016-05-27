<?php

static $connection;

function secureConnect() {
	/*connect only once.*/
	//static $connection;
	/*Try connect, loads configs securely.*/
	if(!isset($connection)) {
		$config = parse_ini_file('Testing/private/config.ini');
		$connection = mysqli_connect($config['servername'],
		$config['username'],$config['password'],$config['dbname']);
		}
	if($connection == false) {
		return mysqli_connect_error();
		}
	return $connection;	
	}
//connect.
$connection = secureConnect();
//Check.
if($connection->connect_error) {
	die("Connection failure: " . $connection->connect_error);	
}
if(!$conn) {
	die("connection failed!" . mysqli_connect_error());
	}