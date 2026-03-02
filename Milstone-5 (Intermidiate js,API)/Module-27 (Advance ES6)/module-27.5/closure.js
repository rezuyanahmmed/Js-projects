//27-5 (Advanced) Explore closure in details

function counter(owner) {
  let count = 0;
  function incriment() {
    count = count + 1;
    console.log('value of the count', owner, count);

  }
  return incriment;

}
const count1 = counter();
count1();
count1();
count1();
count1();
