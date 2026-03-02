// 27-9 Array power methods: filter, find, reduce

// kono ekta nirdisto shorto sapekkhe fullfill kore output newar jonno filter use kori...
const friends = ["Rahim", "Rafi", "Rashed", "Rony", "Sakib", "Tanvir", "Naim"];
const Rfriends = friends.filter(frd => frd[0] === 'R')
console.log(Rfriends);

//-------------------------------
const students = [
  { name: "Rahim", age: 25 },
  { name: "Karim", age: 34 },
  { name: "Basir", age: 26 },
  { name: "Nasir", age: 36 },
  { name: "Hasan", age: 21 },
  { name: "Kamal", age: 35 },
  { name: "Tanvir", age: 23  }
];

const olderStudent = students.filter(std => std.age > 30);
console.log(olderStudent);
