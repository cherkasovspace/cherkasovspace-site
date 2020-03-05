<?php
$strQuery = curr();
if($strQuery == "3web"){
	setcookie("strQuery" , $strQuery, mktime(0,0,0,3,2,2028), "/");
	loc ("3web");
}
if($strQuery == "2dokrutka" && $_COOKIE["strQuery"] != "3web"){
	setcookie("strQuery" , $strQuery, mktime(0,0,0,3,2,2028), "/");
	loc ("2dokrutka");
}
if($strQuery == "1opros" && $_COOKIE["strQuery"] != "3web"  && $_COOKIE["strQuery"] != "2dokrutka"){
	setcookie("strQuery" , $strQuery, mktime(0,0,0,3,2,2028), "/");
	loc ("1opros");
}
if($strQuery == "content" && $_COOKIE["strQuery"] != "3web"  && $_COOKIE["strQuery"] != "2dokrutka" && $_COOKIE["strQuery"] != "1opros"){
	setcookie("strQuery" , $strQuery, mktime(0,0,0,3,2,2028), "/");
	loc ("content");
}
?>