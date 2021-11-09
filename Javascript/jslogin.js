function viewalert(){
    var name = document.loginform.username.value;  
    var password = document.loginform.pswrd.value; 
    
    if (name==null || name==""){  
        alert("Name can't be blank!");  
        return false;  

      }else if(password.length < 7){  
        alert("Password must be at least 8 characters long!");  
        return false;  
        }  

        else{
            alert("Login Complete!");
        }
     }

     function viewalert2(){
        alert("Your new Password send to the E-mail you given!!");  
    }
     
    function showform() {
        document.getElementById("fpform").style.display = "block";
      }

    