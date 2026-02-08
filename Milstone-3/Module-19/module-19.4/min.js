// Sobceye choto number ta ber korar code.............

const prices = [10000, 16000, 70000, 85000, 12000, 6000];

function getMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num
    }
  }
  return min
}
const choto = getMin(prices);
console.log(choto);
