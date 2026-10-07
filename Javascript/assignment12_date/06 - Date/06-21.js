/*
Write a JavaScript function to get a full textual representation of the day of the week (Sunday through Saturday). 
Test Data :
dt = new Date(2015, 10, 1); 
console.log(long_Days(dt));
"Sunday"
*/
import moment from "moment";

let long_Days = (days) => {
  return moment(days).format("dddd");
};

let dt = new Date(2015, 10, 1);
console.log(long_Days(dt));
