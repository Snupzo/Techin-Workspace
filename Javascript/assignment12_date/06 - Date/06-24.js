/*
Write a JavaScript function to get a full numeric representation of a year (4 digits). 
Test Data :
dt = new Date(2015, 10, 1); 
console.log(full_year(dt)); 
2015
*/
import moment from "moment";

let full_year = (days) => {
  return moment(days).format("YYYY");
};

let dt = new Date(2015, 10, 1);
console.log(full_year(dt));
