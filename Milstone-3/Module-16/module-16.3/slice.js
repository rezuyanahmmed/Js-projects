//slice-join-concat-and-includes

//-----------------------------slice------------------------------------------

//slice er kaj holo joto theke joto dhorbo toto theke 2nd man er ager ta obdi man nibe.....and obiously index hishab kore..............

// const address = 'muradnagar';
// const part = address.slice(2, 5);
// console.log(part);

const address = 'muradnagar';
const part = address.slice(2, 7);
console.log(part);

//--------------------split--------------------------------

const sentence = 'my name is rizuyan ahmmed'
// console.log(sentence.split(' '));
// split er 1st bracket er vitor kichu na dile normal string ashbe and quotation dile prottekta letter alada alada string e ashbe and qoutation er vitor ekta space dile protita word er moddhe alada alada string ashbe



const friendsStr = 'rahim,karim,sahin.jahin,kadir,sadi'
const friends = friendsStr.split(','); //ekta puropuri string e dukay diche
// console.log(friends);



//------------------join-------------------------------

const notFriends = ['rahim', 'karim', 'sahin','jahin', 'kadir', 'sadi']
console.log(notFriends.join('|'));  //join er vitor qoutation diye ja dibo tar maddhome value er sobgula word er majhe ta diye seperate kore dibe 



