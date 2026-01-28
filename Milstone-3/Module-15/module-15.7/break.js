//when-to-use-a-break-and-continue

for (let i = 0; i < 15; i++) {
  console.log(i);
  if (i >= 10) {
    break;
  }

}

//-----------------------in while---------------------------

let n = 54;
while (n > 25) {
  if (n < 50){
    break;
  }
  console.log(n);
  n--;
  
}