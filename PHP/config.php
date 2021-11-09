<?php

$con = new mysqli("localhost","root","","vividlabs");
    if($con->connect_error){
        die("Connection Failed: ".$con->connect_error);
    }

?>
