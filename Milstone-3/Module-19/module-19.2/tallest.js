// Sobceye boro number ta ber korar code.............

const height = [65, 66, 68, 74, 71, 61, 62]

function getMax(numbers){
  let max = numbers[0];
  for(const num of numbers){
    if(num > max){
      max = num
    }
  }
  return max
}
const boro = getMax(height);
console.log(boro);

