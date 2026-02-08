//shopping cost ber kora....................
const products = [
  { name: 'shampo', price: 300 },
  { name: 'chiruni', price: 100 },
  { name: 'shirt', price: 700 },
  { name: 'pant', price: 1200 },
]

function getShopingtotal(products) {
  let sum = 0;
  for (const product of products) {
    sum = sum + product.price;
  }

  return sum;
}

const mot = getShopingtotal(products);
console.log(mot);
