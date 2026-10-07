/*
Write a JavaScript function that will return the number of minutes in hours and minutes. 

Test Data :
console.log(timeConvert(200));
Output :
"200 minutes = 3 hour(s) and 20 minute(s)."
*/

let timeConvert = (time) => {
  let hours = Math.floor(time / 60);
  let minutes = time % 60;
  return `${time} minutes = ${hours} hour(s) and ${minutes} minute(s).`;
};

console.log(timeConvert(200));
