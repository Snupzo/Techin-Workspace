/*
 Write a JavaScript function to get time differences in years between two dates.
Test Data :
dt1 = new Date("June 13, 2014 08:11:00"); 
dt2 = new Date("October 19, 2017 11:13:00"); 
console.log(diff_years(dt1, dt2)); 
3
*/

import moment from "moment";

let diff_years = (dateOne, dateTwo) => {
  return moment(dateOne) > moment(dateTwo)
    ? moment(dateOne).diff(moment(dateTwo), "years")
    : moment(dateTwo).diff(moment(dateOne), "years");
};


let dt1 = new Date("June 13, 2014 08:11:00"); 
let dt2 = new Date("October 19, 2017 11:13:00"); 
console.log(diff_years(dt1, dt2)); 