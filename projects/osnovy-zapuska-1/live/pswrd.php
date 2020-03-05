<?php
if($_COOKIE[$coock]){
	header("location: ".$_SERVER["REQUEST_URI"]."started/");
	exit;
}
elseif($_SERVER["REQUEST_METHOD"] == "POST"){
	if($_POST["password"] == $par){
		setcookie($coock, $coock, mktime(0,0,0,3,2,2028));
		header("location: ".$_SERVER["REQUEST_URI"]."started/");
		exit;
	}
	else {
		header("location: ".$_SERVER["REQUEST_URI"]."error/");
		exit;
	}
}
?>