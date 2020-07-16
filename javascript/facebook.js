function validate(){
    var e=document.getElementById('fname').Value;
    
var regx=/ [a-z ] /;
if(regx.test(e)){
    alert('correct value')
}else{
    alert('itsnot correct')

}

};

