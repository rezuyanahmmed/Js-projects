const mobile = {
  brand: 'iphone',
  price: 50000,
  color: 'white',
  isNew: true
}

for(const prop in mobile){
  // console.log(prop);
  // console.log(mobile[prop]);
   
}

const keys = Object.keys(mobile);
console.log(keys);

for(key of keys){
  console.log(key);
  
}
