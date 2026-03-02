// 27-8 Array power methods: map, forEach

const numbers = [1, 4, 2, 3, 5];

// const doublelIt = num => num * 2;
// const doubled = numbers.map(doublelIt) // ekhane map er kaj holo double kora...

//arektu short kore...
const doubled = numbers.map(num => num * 2);

console.log(doubled);

//-------------------------------------------

const friends = ['zaved', 'naved', 'khaled'];
const firstLetter = friends.map(frd => frd[2]); // ekhane joto index cai name er toto index number leter ta dibe
console.log(firstLetter);

