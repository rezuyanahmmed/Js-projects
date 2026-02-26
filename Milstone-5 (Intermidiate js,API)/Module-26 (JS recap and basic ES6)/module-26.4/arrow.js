// 26-4 Arrow function syntax, params, return

//function declaration
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(60, 40));


// function expression
const add2 = function (num1, num2) {
  return num1 + num2;
}
console.log(add2(30, 40));


//arow function
const add3 = (num1, num2) => num1 + num2;
console.log(add3(50, 60)); //ektu sort kore likhte ei arow funcion ta use korle valo

const multiply = (a, b) => a * b
console.log(multiply(5, 5));

const jog = (a, b, c) => a + b + c;
console.log(jog(10, 10, 10));

const getPi = () => 3.1416;
console.log(getPi);


const devide = (a, b) => a / b;
console.log(devide(10, 5));
