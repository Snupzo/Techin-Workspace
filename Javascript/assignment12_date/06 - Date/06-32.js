/*
Write a JavaScript function to get time differences in months between two dates. 
Test Data :
dt1 = new Date("June 13, 2014 08:11:00"); 
dt2 = new Date("October 19, 2014 11:13:00"); 
console.log(diff_months(dt1, dt2)); 
*/

import moment from "moment";

let diff_months = (dateOne, dateTwo) => {
  return moment(dateOne) > moment(dateTwo)
    ? moment(dateOne).diff(moment(dateTwo), "months")
    : moment(dateTwo).diff(moment(dateOne), "months");
};

let dt1 = new Date("June 13, 2014 08:11:00"); 
let dt2 = new Date("October 19, 2014 11:13:00"); 
console.log(diff_months(dt1, dt2)); 