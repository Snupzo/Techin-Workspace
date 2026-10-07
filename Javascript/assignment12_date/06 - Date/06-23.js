/*
Write a JavaScript function to get a numeric representation of a month, with leading zeros (01 through 12). 
Test Data :
dt = new Date(2015, 10, 1); 
console.log(numeric_month(dt));
"11"
*/

import moment from "moment";

let numeric_month = (days) => {
  return moment(days).format("MM");
};

let dt = new Date(2015, 10, 1);
console.log(numeric_month(dt));
