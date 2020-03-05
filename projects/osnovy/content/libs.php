<?php
function clearData($data, $type = "s"){
	switch($type){
		case "s":
			$data = trim(strip_tags($data));break;
		case "i":
			$data = abs((int)$data);break;
	}
	return $data;
}

// Определяет папку
if(!function_exists("curr")){
	function curr (){
		$par = strip_tags(trim($_SERVER["REQUEST_URI"]));
		$par = strrev($par);
		$par = strstr($par, "/");
		$par = strrev(substr($par, 1));
		$par = substr(strrchr($par, "/"), 1);
		return $par;
	}
}

// Определяет url до папки
if(!function_exists("curr_do")){
	function curr_do ($url){
		$par = strip_tags(trim($url));
		$par = strrev($par);
		$par = strstr($par, "/");
		$par = strrev(substr($par, 1));
		return $par;
	}
}

// Определяет url до папки, убираем последнюю папку
if(!function_exists("curr_last")){
	function curr_last ($url,  $num){
		$param = strip_tags(trim($url));
		$param = substr(strrev($param), $num);
		$param = strrev($param);
		return $param;
	}
}

function way(){
	if(curr() != "content"){
		return "../";
	}
	else return "";
}

$protocol;
if($_SERVER["HTTPS"] == 1){
	$protocol = "https://";
}
else {
	$protocol = "http://";
}

$url = $protocol.$_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];

if(!function_exists("loc")){
	function loc ($par){
		if($_COOKIE["strQuery"] != $par){
			header("Location: " . $_SERVER["REQUEST_URI"]);
			exit();
		}
	}
}

/*if(!isset($host)){
	$host = "http://localhost/vitaly_Kuznetsov/idea_test/content/";
}*/
?>