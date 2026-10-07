/*
Write a JavaScript function to test whether a date is a weekend. 

Note : Use standard Saturday/Sunday definition of a weekend.
Test Data :
console.log(is_weekend('Nov 15, 2014')); 
console.log(is_weekend('Nov 16, 2014')); 
console.log(is_weekend('Nov 17, 2014'));
Output :
"weekend" 
"weekend" 
undefined
*/

// Check for 0 and 6 because in JS sunday is 0, monday is 1....

let is_weekend = (date) => {
  let day = new Date(date).getDay();
  if (day === 0 || day === 6) {
    return "weekend";
  }
};
console.log(is_weekend('Nov 15, 2014')); 
console.log(is_weekend('Nov 16, 2014')); 
console.log(is_weekend('Nov 17, 2014'));