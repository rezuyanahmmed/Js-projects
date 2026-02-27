// 26-6 (Advanced) Object and array destructuring
const product = {
  name: 'iphone',
  price: 72000,
  description: 'a smartphone by apple'
};

const newPrice = product.price + 100;
console.log(newPrice);


//---------------------
const { price, camera = '12mp' } = { name: 'Redmi', price: 25000, brand: 'xiomi' };
console.log(camera); //ekhane amra object er ekta faka variable nichi and ei faka variable e object er vitorer property er name diye oi faka object theke oi property er value ta output e pacchi...
