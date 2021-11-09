<?php
include('config.php');
session_start();

$user_check=$_SESSION['login'];
$ses_sql=mysqli_query($con,"select UserName from user_details where UserName='$user_check'");
$row=mysqli_fetch_array($ses_sql,MYSQLI_ASSOC);
$loggedin_id=$row['UserName'];

if(isset($_POST["logoff"]))
{
	session_destroy();
	header("Location: home.html");
}

?>