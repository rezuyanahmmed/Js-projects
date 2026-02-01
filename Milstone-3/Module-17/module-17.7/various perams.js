function doubleOrtriple(number, dodouble) {
  if (dodouble === true) {
    const result = number * 2;
    return result;
  }
  else {
    const result = number * 3;
    return result;
  }
}
console.log(doubleOrtriple(5, true));
console.log(doubleOrtriple(5, false));

