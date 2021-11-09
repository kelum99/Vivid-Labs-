

<?php
	
	require 'config.php';

	$enamev = $_POST["ename4"];
    $nicv1 = $_POST["nic4"];
    $locationv1 = $_POST["location4"];
    $evtimev1 = $_POST["evtime4"];

    $sql = "insert into  classicp(enamev,nicv,locationv,evtimev) values('$enamev','$nicv1','$locationv1','$evtimev1')";

    if($con-> query($sql) === TRUE){
        echo "<script>alert ('Done')</script>";
    }
    else{
        echo "<script>alert ('Error')</script>";
    }

     $con->close();
?>