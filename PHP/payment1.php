
<?php

require 'config.php';


$name = $_POST["BuyerName"];
$email = $_POST["BuyerEmail"];
$address = $_POST["address"];


$sql1 = "INSERT INTO payment_details2(Name,Email,Address) VALUES('$name', '$email', '$address')";


    
	
	 if($con-> query($sql1) === TRUE){
        echo "Insert Successfully!";
    }
    else{
        echo "Error:".$con->error;
    }

    $con->close();

?>
