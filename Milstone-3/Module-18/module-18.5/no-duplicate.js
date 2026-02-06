// Remove duplicate items from an array

const birianyKhor = ['abul', 'shahed', 'kabir', 'sabit', 'abul', 'shahed', 'kabir', 'rafi']
function noDuplicate(array) {
  const unique = [];
  for (const item of array) {
    if (unique.includes(item) === false){
      unique.push(item);
    }
  }
  return unique;


}
const uniqueArray = noDuplicate(birianyKhor);
console.log(uniqueArray);

