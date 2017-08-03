<?php
//$_SERVER is an array containing information such as headers, paths, and script locations.
//There is no guarantee that every web server will provide any of these.
echo $_SERVER['PHP_SELF'];//this script name
echo "<br>";
echo $_SERVER['SERVER_NAME'];//server name
echo "<br>";
echo $_SERVER['HTTP_HOST'];//server name
echo "<br>";
echo $_SERVER['HTTP_USER_AGENT'];//client's web browser
echo "<br>";
echo $_SERVER['SCRIPT_NAME'];//this script name
echo "<br>";
echo $_SERVER['REMOTE_ADDR'];//client's ip

?>
