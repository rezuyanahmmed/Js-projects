const subjects = {
  name: 'web-design',
  teacher: 'Rafi sir',
  salary: 30000,
  examDate: '30 feb',
  chapters: ['first', 'second', 'third'],
  'fav place': ['Bandorbar', 'Cumilla', 'Dhaka']

}

// dot notation
//dot symbol diye object er property er value change kora jay
const income = subjects.salary
console.log(income);

// bracket notation
//third bracket diye access kora
console.log(subjects['name']);

const sub = subjects['teacher'] //etar jonno alada kore consol.log diye print korte hobe
console.log(sub);

//---
console.log(subjects['fav place']);  //7 number line er pagla narka code er jonno

