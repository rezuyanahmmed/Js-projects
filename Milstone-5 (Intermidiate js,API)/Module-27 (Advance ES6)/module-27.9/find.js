// find filter er motoi just eta shorto sapekkhe ekdom 1st er ta dibe...

const students = [
  { name: "Rahim", age: 32 },
  { name: "Karim", age: 34 },
  { name: "Sadia", age: 31 },
  { name: "Nusrat", age: 36 },
  { name: "Hasan", age: 33 },
  { name: "Mim", age: 35 },
  { name: "Tanvir", age: 38 }
];

const olderStudent = students.find(std => std.name[0] === 'R');
console.log(olderStudent);
