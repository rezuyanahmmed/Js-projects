// Check whether a year is a Leap Year or not

/** 
 *  simple logic.......
 * year will be a leap year if the year is divisible by 4
*/

function isLeapyear(year) {
  if (year % 4 === 0) {
    return true;
  }
  else {
    return false;
  }
}
const leapYear = isLeapyear(2040);
console.log(leapYear);

/**
 * 1: those year that is not divisible by 100 and if the year is divisible by 4 then it will be a leap year
 * 
 * 2: if the year divisible by 100 and 400 then it will be leap year
 */

// for 1
function isLeapyear2(year) {
  if (year % 100 !== 0 && year % 4 === 0){
    return true;
  }
  else{
    return false;
  }
}
const leap = isLeapyear2(2035);
// console.log(leap);

//for 2
function isLeapyear1(year) {
  if (year % 100 === 0 && year % 400 === 0){
    return true;
  }
  else{
    return false;
  }
}
const leapyear = isLeapyear1(2022);
console.log(leapyear);