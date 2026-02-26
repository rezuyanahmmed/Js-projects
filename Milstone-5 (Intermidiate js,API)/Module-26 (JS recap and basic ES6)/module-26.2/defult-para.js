// 26-2 Function default parameter for not provided values


function add(num1, num2) {
  const total = num1 + num2;
  console.log(num1, num2, total);

}

add(10, 10);
// add(total);


function add2(num1, num2 = 0) {
  const total = num1 + num2;
  console.log(num1, num2, total);

}

add(10, 40);

/**
 * string - ' '
 * number - 0 [for add]
 * number - 1[for multiply]
 * array - []
 * object - {}
 * bolean - flase
 */


//--------------------------------------
function fullName(first, last = '') {
  const name = first + ' ' + last;
  console.log(name);

}

fullName('kamal', 'uddin');