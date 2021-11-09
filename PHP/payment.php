
<?php

require 'config.php';

$CardName1 = $_POST["Cardname"];
$CardNumber1 = $_POST["Cardnumber"];
$CVV1 = $_POST["CVV"];
$Date1 = $_POST["date"];



$sql = "INSERT INTO payment_details(CardName,CardNumber,CVV,Date) VALUES('$CardName1', '$CardNumber1', '$CVV1','$Date1')";


    if($con-> query($sql) === TRUE){
        echo "Insert Successfully!";
    }
    else{
        echo "Error:".$con->error;
    }
	
	  

    $con->close();

?>
