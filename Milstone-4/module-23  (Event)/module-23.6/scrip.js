// document.getElementById('btn-mouse').addEventListener('mouseenter', function(){
//   console.log('event and event');

// })


document.getElementById('btn-mouse').addEventListener('mousemove', function () {
  console.log('event and event');

})

// ei focus mousemove er moto onek kichu ache,jemon "blur" "keydown" "keyup" aaro onek kichu

//------------------------
document.getElementById('user-name').addEventListener('focus', function () {
  console.log('write your name');

})

