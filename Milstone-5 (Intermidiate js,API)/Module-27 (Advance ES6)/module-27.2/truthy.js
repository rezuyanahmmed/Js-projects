// 27-2 Different truthy and falsy values in JavaScript

let data;
data = 0;
data = ''
data = ' '
data = '0'
data = null;
data = {}; //empty object o truthy hobe...
data = [] //khali array o truthy hobe...

if (data) {
  console.log('truthy');
} else {
  console.log('falsy');

}

//---------------------
let price = 0;
if (!price) {
  console.log('truthy');

}

//-----------------
let man = false;
if (!man) {
  console.log(man);

}

//------------------
let value = false;
if (!!value) {
  console.log(value);

}