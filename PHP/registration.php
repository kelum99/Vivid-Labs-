
<?php

require 'config.php';


	$FirstName = $_POST["FirstName"];
	$LastName= $_POST["LastName"];	
    $UserName= $_POST["UserName"];
    $day= $_POST["day"];
    $MobileNumber= $_POST["MobileNumber"];	
    $email= $_POST["email"];
    $Address= $_POST["Address"];
    $Password= $_POST["Password"];	
	


$sql= "INSERT INTO user_details(FirstName,LastName,UserName,Date,MobileNumber,Email,Address,Password) VALUES('$FirstName','$LastName','$UserName','$day','$MobileNumber','$email','$Address','$Password')";
		if($con->query($sql) === TRUE){
			echo "Inserted successfully";
		}
		else{
			echo "Error:". $con->error;
		}

$con->close();
?>
