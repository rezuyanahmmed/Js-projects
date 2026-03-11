const handleProduct = () => {
  const productEL = document.getElementById('product');
  const quantityEl = document.getElementById('quantity');

  const product = productEL.value;
  const quantity = quantityEl.value;
  console.log('product add', product, quantity);

  displayProduct(product, quantity)

  productEL.value = '';
  quantityEl.value = '';
}

const getCart = () => {
  const cart = {};
  return cart;
}

const

const displayProduct = (product, quantity) => {
  const li = document.createElement('li');
  li.innerText = `${product} : ${quantity}`

  //get the ul
  const ul = document.getElementById('product-container');
  ul.appendChild(li);
}