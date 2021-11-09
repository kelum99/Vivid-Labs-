//Event Gallery

function loadData(productID){
	if(productID == 'call'){
        document.getElementById("bannert").innerHTML="Event Shutters";
        
        document.getElementById("coltext1").innerHTML="Kuweniye Live";
        document.getElementById("coltext2").innerHTML="Eliza & Jake";
        document.getElementById("coltext3").innerHTML="Mini Jay Live";
        document.getElementById("coltext4").innerHTML="Nivindhi's 12th";
        document.getElementById("coltext5").innerHTML="Bella & Andrew";
        

        document.getElementById("prodcalluctImage").src="Images/Banner/sample2.jpg";
        document.getElementById("catImage").src="Images/Events/Celebrations/3.2.jpg";
        document.getElementById("catImage2").src="Images/Events/Wedding/2.4.jpg";
        document.getElementById("catImage3").src="Images/Events/Celebrations/3.4.jpg";
        document.getElementById("catImage4").src="Images/Events/Celebrations/3.1.jpg";
        document.getElementById("catImage5").src="Images/Events/Wedding/2.3.jpg";

        

        document.getElementById("listtxt1").innerHTML="Eliza & Jake";
        document.getElementById("listtxt2").innerHTML="IWT Group Batch Party";
        document.getElementById("listtxt3").innerHTML="Kuweniye Live in Concert";
        document.getElementById("listtxt4").innerHTML="Eliza & Jake";

        document.getElementById("liststxt1").innerHTML="";
        document.getElementById("liststxt2").innerHTML="Hilton Colombo";
        document.getElementById("liststxt3").innerHTML="Nelum Pokuna Mahinda Rajapaksa Theatre";
        document.getElementById("liststxt4").innerHTML="";
        
        document.getElementById("llink1").href="";
        document.getElementById("llink2").href="";
        document.getElementById("llink3").href="";
        document.getElementById("llink4").href="";

        document.getElementById("revent1").src="Images/Events/01.2.jpg";
        document.getElementById("revent2").src="Images/Events/02.2.jpg";
        document.getElementById("revent3").src="Images/Events/02.3.jpg";
        document.getElementById("revent4").src="Images/Events/01.2.jpg";
        
        //banner link
        document.getElementById("elinkb").href="";

        //category links
        document.getElementById("elinkc1").href="";
        document.getElementById("elinkc2").href="";
        document.getElementById("elinkc3").href="";
        document.getElementById("elinkc4").href="";
        document.getElementById("elinkc5").href="";        
    }

    if(productID == 'cwedding'){
        document.getElementById("bannert").innerHTML="Weddings";

        document.getElementById("coltext1").innerHTML="Roshel & Sheron";
        document.getElementById("coltext2").innerHTML="Kylie & Shawn";
        document.getElementById("coltext3").innerHTML="Bella & Andrew";
        document.getElementById("coltext4").innerHTML="Eliza & Jake";
        document.getElementById("coltext5").innerHTML="Giulia & David";

        document.getElementById("prodcalluctImage").src="Images/Banner/sample4.jpg";
        document.getElementById("catImage").src="Images/Events/Wedding/2.1.jpg";
        document.getElementById("catImage2").src="Images/Events/Wedding/2.2.jpg";
        document.getElementById("catImage3").src="Images/Events/Wedding/2.3.jpg";
        document.getElementById("catImage4").src="Images/Events/Wedding/2.4.jpg";
        document.getElementById("catImage5").src="Images/Events/Wedding/2.5.jpg";

        document.getElementById("listtxt1").innerHTML="Anne & Mario";
        document.getElementById("listtxt2").innerHTML="Stephanie & John";
        document.getElementById("listtxt3").innerHTML="Gianna & Harry";
        document.getElementById("listtxt4").innerHTML="Rose & tom";

        document.getElementById("liststxt1").innerHTML="";
        document.getElementById("liststxt2").innerHTML="";
        document.getElementById("liststxt3").innerHTML="";
        document.getElementById("liststxt4").innerHTML="";
              

        document.getElementById("llink1").href="";
        document.getElementById("llink2").href="";
        document.getElementById("llink3").href="";
        document.getElementById("llink4").href="";

        document.getElementById("revent1").src="Images/Events/01.1.jpg";
        document.getElementById("revent2").src="Images/Events/01.2.jpg";
        document.getElementById("revent3").src="Images/Events/01.3.jpg";
        document.getElementById("revent4").src="Images/Events/01.4.jpg";

        document.getElementById("bannertxt").innerHTML="Jasmine & Angelo";
        document.getElementById("bannertxt2").innerHTML="Weddings by ViVid Labs";

        document.getElementById("elinkb").href="google.lk";

        document.getElementById("elinkc1").href="";
        document.getElementById("elinkc2").href="";
        document.getElementById("elinkc3").href="";
        document.getElementById("elinkc4").href="";
        document.getElementById("elinkc5").href="";
    }

    if(productID == 'ccelebrations'){

        document.getElementById("bannert").innerHTML="Event Coverage";

        document.getElementById("coltext1").innerHTML="ViVid Labs";
        document.getElementById("coltext2").innerHTML="ViVid Labs";
        document.getElementById("coltext3").innerHTML="ViVid Labs";
        document.getElementById("coltext4").innerHTML="ViVid Labs";
        document.getElementById("coltext5").innerHTML="ViVid Labs";
        

        document.getElementById("prodcalluctImage").src="Images/Banner/sample3.jpg";
        document.getElementById("catImage").src="Images/Events/Celebrations/3.1.jpg";
        document.getElementById("catImage2").src="Images/Events/Celebrations/3.2.jpg";
        document.getElementById("catImage3").src="Images/Events/Celebrations/3.3.jpg";
        document.getElementById("catImage4").src="Images/Events/Celebrations/3.4.jpg";
        document.getElementById("catImage5").src="Images/Events/Celebrations/3.5.jpg";

        document.getElementById("listtxt1").innerHTML="Rhythm Of the Maroons 2020";
        document.getElementById("listtxt2").innerHTML="IWT Group Batch Party";
        document.getElementById("listtxt3").innerHTML="Kuweniye Live in Concert";
        document.getElementById("listtxt4").innerHTML="Mini Jay Live in Concert";

        document.getElementById("liststxt1").innerHTML="Nelum Pokuna Mahinda Rajapaksa Theatre";
        document.getElementById("liststxt2").innerHTML="Hilton Colmbo";
        document.getElementById("liststxt3").innerHTML="BMICH";
        document.getElementById("liststxt4").innerHTML="Youth Center";

        document.getElementById("llink1").href="";
        document.getElementById("llink2").href="";
        document.getElementById("llink3").href="";
        document.getElementById("llink4").href="";

        document.getElementById("revent1").src="Images/Events/02.1.jpg";
        document.getElementById("revent2").src="Images/Events/02.2.jpg";
        document.getElementById("revent3").src="Images/Events/02.3.jpg";
        document.getElementById("revent4").src="Images/Events/02.4.jpg";

        document.getElementById("bannertxt").innerHTML="Jasmine & Angelo";
        document.getElementById("bannertxt2").innerHTML="Celebrations by ViVid Labs";

        document.getElementById("elinkb").href="google.lk";

        document.getElementById("elinkc1").href="";
        document.getElementById("elinkc2").href="";
        document.getElementById("elinkc3").href="";
        document.getElementById("elinkc4").href="";
        document.getElementById("elinkc5").href="";
    }
}


//packages

function displayp() {
  
    document.getElementById("package1").style.display = "block";
    document.getElementById("packag1").style.display = "block";  
    document.getElementById("package2").style.display = "none";
    document.getElementById("package3").style.display = "none";
    document.getElementById("pb1").style.display = "none";

    document.getElementById("forma1").action = "submitbooking.php";

   
 
   }

function displayp2() {
  
    document.getElementById("package1").style.display = "none";
    document.getElementById("packag1").style.display = "block";  
    document.getElementById("package2").style.display = "block";
    document.getElementById("package3").style.display = "none";
    document.getElementById("pb2").style.display = "none";

    document.getElementById("forma1").action = "submitbooking2.php";

   
 
   }

function displayp3() {
  
    document.getElementById("package1").style.display = "none";
    document.getElementById("packag1").style.display = "block";  
    document.getElementById("package2").style.display = "none";
    document.getElementById("package3").style.display = "block";
    document.getElementById("pb3").style.display = "none";

    document.getElementById("forma1").action = "submitbooking3.php";

   
 
   }
