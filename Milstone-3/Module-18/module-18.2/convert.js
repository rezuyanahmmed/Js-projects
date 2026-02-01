//-----------------Unit Convert Inch to Feet, miles to kilometre----------------

function inchTofeet(inch) {
  const feet = inch / 12;
  return feet;
}

//optional
function inchTofeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = perseInt(feetFraction);
  const inchReamaning = inch % 12;
  const result = feetNumber + 'ft' + inchReamaning + 'inch.'
  return result;
}

const rafiHeight = inchTofeet(65);
// console.log(rafiHeight);

const rafiHeight2 = inchTofeet(65);
console.log(rafiHeight2)


//----------------------------------------------------------------------

function mileTokiloneter(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}
const result = mileTokiloneter(5);
console.log(result);




