 
function validateform(){  
var name=document.getElementById('name1').value; 
var name1=document.getElementById('secondname').value;
var email=document.getElementById('email').value;
var password=document.getElementById('password1').value;  

  
if (name==null || name==""){  
  alert('name cant be empty')
  document.getElementById('text1').innerHTML="name cant be empty"
  
} 
  if (name1==null || name1==""){  
    alert("surname cant be blank");    
  }
  if(email==null || email=="" || email.length<6){
    alert('enter a valid email')
  }
  else if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;
    }    
}  
