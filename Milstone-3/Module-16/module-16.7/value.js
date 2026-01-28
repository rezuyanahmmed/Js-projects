// ----------------------value change korar jonno-------------------

const subjects = {
  name: 'web-design',
  teacher: 'Rafi sir',
  salary: 30000,
  examDate: '30 feb',
  chapters: ['first', 'second', 'third'],
  'fav place': ['Bandorbar', 'Cumilla', 'Dhaka']

}
subjects.salary = 50000; // dot notation diyevalue ta change korte pari caile
subjects['teacher'] = 'rizuyan sir'  //brcket notation diye o change korte pari
console.log(subjects);
