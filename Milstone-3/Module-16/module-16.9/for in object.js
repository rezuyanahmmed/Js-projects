// Object er moddhe loop er bebohar--------------

const mobile = {
  brand: 'iphone',
  price: 50000,
  color: 'white',
  isNew: true
}

//----------------------1st rule---------------------------------

for(const prop in mobile){
  // console.log(prop);
  // console.log(mobile[prop]);
   
}

//-------------------2nd rule----------------------------------

const keys = Object.keys(mobile);
console.log(keys);

for(key of keys){
  console.log(key);
  
}

