const products = [
  { name: 'shampo', price: 300, quantity: 2 },
  { name: 'chiruni', price: 100, quantity: 3 },
  { name: 'shirt', price: 700, quantity: 5 },
  { name: 'pant', price: 1200, quantity: 1 },
]

function cartTotal(products){
  let sum = 0;
  for(const product of products){
    const thisProductcost = product.price * product.quantity;
    sum = sum + thisProductcost;
    
  }
  return sum;
}

const shoppingTotal = cartTotal(products)
console.log(shoppingTotal);
