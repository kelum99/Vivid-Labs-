<!DOCTYPE html>
<html>
<body>

<?php 
session_start();
require 'config.php';

$username = $_POST["username"];
$password = $_POST["pswrd"];
$submit = $_POST["submit"];



if(isset($submit))
{
	$sql = mysqli_query($con,"select * from user_details where UserName='$username' and Password='$password'");
	if(mysqli_num_rows($sql) < 1)
	{
		
		echo "<h1 align=center>Login Failed! Please Check Your UserName or Password!!!</h1>";
		
	}
	else
	{
		$_SESSION["login"]=$username;	
		
	}
}


if (isset($_SESSION["login"]))
{	
	echo "<h1 align=center>You Have Login Successfully!!!</h1>";
	header("Location: home.html");
	
}
else{
	session_reset();
	header("Location: login.html");
}



?>

</body>
</html>