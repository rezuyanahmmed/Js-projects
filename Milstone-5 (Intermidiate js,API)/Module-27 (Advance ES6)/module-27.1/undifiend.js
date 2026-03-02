// 27-1 null vs undefined and why undefined happens
const student = {
  name: 'rafi',
  age: 18,
};

delete student.name //ekhaen amra name ta delete kore dichi,tai eta consol log korle undifined dekhabe...
console.log(student.marks); //ekhane marks er jonno undifined dekhabe,karon amra object e amader marks name kono property nei


//----------------------

const arr = [2, 5, 21, 96, 1];
// delete arr[4]
console.log(arr[5]); //ekahane 5 number index er number nei tai eta undifined dekhabe...

