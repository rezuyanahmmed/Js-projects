// 28-2 Recap API Concept , Intro to JSON

// JSON onekta object er motoi,etate just property and value 2 ta tei qoutation thake...

const person = {
  name: 'rafi',
  age: 19,
  class: 'Diploma 3rd year',
  favFruit: 'Banana',
  FavDish: 'Biriyani',
};
console.log(person);

//JSON - JS Object Notation
//JSON.stringify --> For Object to JSON
//JSON.parse --> For JSON to Object

//object to JSON - object k JSON e nit ehole stringify use korte hobe
 const personJSON = JSON.stringify(person);
 console.log(personJSON);
 
 //JSON to object-- JSON theke object e nite hole parse use korte hobe...
 const JsonToObject = JSON.parse(personJSON)
 console.log(JsonToObject);
 
