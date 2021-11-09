<?php
    include_once 'config.php';
?>

<?php

	$enamev1 = $_POST["ename4"];
    $nicv1 = $_POST["nic4"];
    $locationv1 = $_POST["location4"];
    $evtimev1 = $_POST["evtime4"];

    $sql = "insert into  prep(enamev,nicv,locationv,evtimev) values('$enamev1','$nicv1','$locationv1','$evtimev1')";

    if(mysqli_query($con,$sql)){
        echo "<script>alert ('Done')</script>";
    }
    else{
        echo "<script>alert ('Error')</script>";
    }

    $con->close();
?>