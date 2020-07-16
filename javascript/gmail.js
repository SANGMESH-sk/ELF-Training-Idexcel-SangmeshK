function myfunction(){
    var x=document.getElementById('name1').value;
    var y=document.getElementById('password1')
    var pattern=new RegExp("^[a-zA-Z .]$")
    var password=new RegExp(' /^[A-Za-z]\w{7,14}$/;')
    
  if(pattern.test(x)){
      document.getElementById('showmsg').innerHTML='valid email id'
    
  } else{
      document.getElementById('showmsg').innerHTML='invalid email id'
  }  
  if(password.test(y)){
    document.getElementById('msg').innerHTML='valid password'
} else{
    document.getElementById('msg').innerHTML='invalid email id'
  }
}
