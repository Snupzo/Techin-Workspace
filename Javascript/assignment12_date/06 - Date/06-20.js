/*
Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun). 
Test Data :
dt = new Date(2015, 10, 1); 
console.log(short_Days(dt));
"Sun"
*/

import moment from "moment";

let short_Days = (days) => {
  return moment(days).format("ddd");
};

let dt = new Date(2015, 10, 1);
console.log(short_Days(dt));
