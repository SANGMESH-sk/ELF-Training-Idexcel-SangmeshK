
   // adding two number 
    function add(a,b){
        var c=a+b;
        return c;
    }
    console.log(add(5,5));
   
    //or
    var test=(a,b)=>{
        return a+b
    }
    console.log(test(10,20));

 /* even and odd number   */
  function even_odd(num){
      if(num%2 == 0){
          return true;
      }
      else{
          return false;
      }
  }
  console.log(even_odd(5));

  // finding circle

  var circle1= function circle(r){
      console.log((22/7)*(r*r));
  }
  circle1(6);

  //or
   (function circle(r){
      console.log((22/7)*(r*r));
  })(8);

  var getregular=()=>{
      return 10;
  }
  console.log(getregular());

