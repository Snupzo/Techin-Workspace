/*
Write a JavaScript function to get a full textual representation of a month, such as January or June. 
Test Data :
dt = new Date(2015, 10, 1); 
console.log(full_month(dt));
"November"
*/
import moment from "moment";

let full_month = (days) => {
  return moment(days).format("MMMM");
};

let dt = new Date(2015, 10, 1);
console.log(full_month(dt));
