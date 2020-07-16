function validate(){
    var text=document.getElementById('text1').Value;
    var text=document.getElementById('pas')
var regx = /[a-z]/;
if(regx.test(text)){
  document.getElementById('1b1text').innerHTML="valid";
  document.getElementById('1b1text').style.visibility="visible";
  document.getElementById("1b1text").style.color="green";
  
}else{
    document.getElementById('1b1text').innerHTML="invalid";
    document.getElementById('1b1text').style.visibility="visible";
    document.getElementById("1b1text").style.color="red";
}

};