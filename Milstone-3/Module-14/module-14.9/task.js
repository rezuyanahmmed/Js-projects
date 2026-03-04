// var burger = 700;
// if(burger > 500){
//   console.log("you will get a free cook");
// }
// else{
//   console.log("you need to buy cook in 30 tk");
// }


// -------------------------------------------------------------------


var age = 18;
var price = 500;
if(age < 10){
  console.log("free");
}
else if (age > 60) {
  var discount = price *15 / 100;
  var payAmount = price - discount;
  console.log(payAmount);
}
else{
  console.log(price);
  
}

