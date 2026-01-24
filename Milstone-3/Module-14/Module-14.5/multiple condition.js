// AND ebong OR diye if else er bebohar


const salary = 25000;
const isBcs = true;
const height = 62;
const hasCar = false;

if(salary > 20000 && height < 66){
  console.log("patro thik ache");
}
else{
  console.log("onno patro khuji"); 
}

// ---------------------------------------------------------------
// const salary = 25000;
// const isBcs = true;
// const height = 68;

if(salary > 20000 && height > 66){
  console.log("patro thik ache");
}
else{
  console.log("onno patro khuji"); 
}

// ----------------------------------------------------------------

if(salary > 20000 || height > 66){
  console.log("patro thik ache");
}
else{
  console.log("onno patro khuji"); 
}

// --------------------COMPLEX CONDDITION-----------------------------

if((salary > 20000 && hasCar == true) || isBcs == true){
  console.log("Ok raji");
  
}