// Lower case and Upper case and Trim er js e use

const subject = 'Chemestry';
const book = 'chemestry';

if (subject.toLocaleUpperCase() === book.toLocaleUpperCase()) {
  //ekhane to UPPERCASE diye ami subject and book er 2 ta valuer sobgula borno k capital kore dichi-----caile ami LOWERCASE o korte  partam
  console.log('I can');

}
else {
  console.log('I cannot');

}


//-------------------Trim----------------------------

const district = 'cumilla';
const upazila = '  cumilla  ';
if (district.trim() === upazila.trim()){
  // ekhane TRIM ta value te j space gula ache ta remove kore diche-----eta jsut 1st er and last er space gula remove korbe,majher space na.............
  console.log('I want to go');
  
}
else{
  console.log('I do not want to go');
  
}