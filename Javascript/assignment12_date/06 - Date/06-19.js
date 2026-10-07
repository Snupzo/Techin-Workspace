/*
Write a JavaScript function to get the day of the month, 2 digits with leading zeros. 
Test Data :
d= new Date(2015, 10, 1); 
console.log(day_of_the_month(d));
"01"
*/
import moment from "moment";

let day_of_the_month = (dOm) => {
  return moment(dOm).format("DD");
};

let d = new Date(2015, 10, 1);
console.log(day_of_the_month(d));
