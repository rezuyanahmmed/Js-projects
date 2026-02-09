// const numbers = [20, 54, 36, 85, 97, 28, 41, 29];
// for (number of numbers) {
//   console.log(number); //simple vabe array gula anar jonno....

// }


//--------------------------------------------------

const products = [
  { id: 1, name: 'Walton', price: 10000 },
  { id: 2, name: 'xaomi', price: 16000 },
  { id: 3, name: 'iphone', price: 100000 },
  { id: 4, name: 'oppo phone', price: 30000 },
  { id: 5, name: 'redmi Phone', price: 22000 },
  { id: 6, name: 'samsung', price: 42000 },
]

// for(product of products){
//   console.log(product); 
// }

function matchProducts(products, search){
  const matched = [];
  for(product of products){
    if(product.name.toLowerCase().includes(search.toLowerCase())){  //ekhane lowerCase er karone capital letter take o se ek e vabe niche......
      matched.push(product); //match namok array te push kora hoiche...........
    }
    
  }
  return matched;
}
const result = matchProducts(products,'phone')
console.log(result);
