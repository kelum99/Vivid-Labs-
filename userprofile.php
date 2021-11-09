<?php
include('PHP/session.php');
?>

<!DOCTYPE html>
<html>
<head>
    <title> Vivid Labs | User Profile </title>
    <link rel="icon" href="Images/camera.png">
    <link rel="stylesheet" type="text/css" media="screen" href="Styles/style.lakindu.css"/>
    <script src=""></script>
    <style>
        body{
             background-image: url("Images/homebg1.jpg");
             background-attachment: fixed;
}
.details{
  margin: 20px 18%;
  color: white;
  font-size: 20px;
  border-bottom: 1px solid whitesmoke;
  
}
.details span{
    display:block;
    padding:6px;
}
    </style>
</head>
<body>
<div class="main_container">
        
        <div class="main">
    
          <img src="Images/logo.png" class="logo" width="100" height="100" >
          
             
             <div class="nav">
                <a href="home.html">Home</a>
                <a href="services.html">Services</a>
                <a href="event.html">Events</a>
                <a href="AboutUs.html">About Us</a>
                <a href="contactus.html">Contact Us</a>
             </div>
    
             <div class="loging">
                 <ul>
                   <li> <a class="btn1" id="btnlog" href="login.html">Login</a> </li>
                   <li> <a class="btn1" href="Registation.html">Register</a>  </li>
                 </ul>
             </div>
             <a class="userbtn" href="userprofile.php"> <img src="Images/avatar.png" class="avatar" > </a> 
        </div>
        <div class="page_title">My Profile</div>
        <div class="ava">
          <img src="Images/avatar.png">
      </div> 



<?php 

require 'PHP/config.php';

$sql="SELECT * FROM user_details where UserName = '$loggedin_id'";
$result = mysqli_query($con,$sql);
?>

<?php
while($row=mysqli_fetch_array($result)){ ?>

<div class = "details">
  <span> <?php  echo "<b>First name:</b> ". $row['FirstName'];  ?> </span>
  <span> <?php  echo "<br /><b>Last name:</b> ".$row['LastName'];  ?> </span>
  <span> <?php  echo "<br /><b>Username:</b> ".$row['UserName'];  ?> </span>
  <span> <?php echo "<br /><b>Email:</b> ".$row['Email'];  ?> </span>
  <span> <?php  echo "<br /><b>Mobile:</b> ".$row['MobileNumber'];  ?> </span>
  <span> <?php  echo "<br /><b>Date of Birth:</b> ".$row['Date'];  ?> </span>
  <span> <?php  echo "<br /><b>Address :</b> ".$row['Address'];  ?> </span>
</div>

<?php
}
?>

<?php
mysqli_close($con);
?>

<input type="button" class="editbtn" value="Edit Profile">

<form class="edit"  id="editform" style="display:none" action=""> 
     <div class="edit-container">
        <h2>You Can Edit Followings</h2>
    <input type="text" name="username1" class="text2" id="uname1" placeholder="Username" autocomplete="off" required> 
    <input type="email" name="email1" class="text2"  placeholder="Your E-mail" autocomplete="off" required> 
    <input type="number" name="pno" class="text2"  placeholder="Phone number" autocomplete="off" required> 
    <button type="submit" class="edit_sub" onclick = "viewalert2()">Submit</button>

</div>
</form>

<div class="catjs">

<!-- Footer -->

<div class="footer">
<a href="event.html">
<img src="images/logo2.png" width="75px"></a>
<p>© 2020 Vivid Labs. All Rights Reserved</p>

</div>



</body>
</html>