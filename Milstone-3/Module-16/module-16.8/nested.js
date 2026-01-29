const college = {
  name: 'bspi',
  class: ['11', '12'],
  events: ['science fair', 'bijoy dibos', '21feb'],
  unique: {
    color: 'blue',
    result: {
      gpa: 5,
      merit: 'top'
    }
  }
}

college.unique.result.gpa = 'not' //vaule caile change o kora  jay...........

//console.log(college.unique.result.gpa); //evabe amra object er moddhe dot dot diye diye object er vitorer aro abject er man ber korte pari.....

college.events[1]= '16 december' 
// kono ekta array er value change korte caile amader index akare change korte hobe....
console.log(college.events[1]);

delete college.class; //avabe amra kono ekta object er value change korte pari.....
console.log(college);



