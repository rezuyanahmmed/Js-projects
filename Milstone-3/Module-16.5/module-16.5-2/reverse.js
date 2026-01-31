//----------Array ke reverse korar jonno----------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

//-------------normal for loop diye reverse kora--------------------

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reverseedNumbers = [];
for (let i = 0; i < numbers.length; i++){
  const num = numbers[i];
  reverseedNumbers.unshift(num);
}
console.log(reverseedNumbers)
