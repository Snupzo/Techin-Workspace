/*
Write a JavaScript function to get time differences in weeks between two dates.
Test Data :
dt1 = new Date("June 13, 2014 08:11:00"); 
dt2 = new Date("October 19, 2014 11:13:00"); 
console.log(diff_weeks(dt1, dt2)); 
18
*/

import moment from "moment";

let diff_weeks = (dateOne, dateTwo) => {
  return moment(dateOne) > moment(dateTwo)
    ? moment(dateOne).diff(moment(dateTwo), "weeks")
    : moment(dateTwo).diff(moment(dateOne), "weeks");
};

let dt1 = new Date("June 13, 2014 08:11:00"); 
let dt2 = new Date("October 19, 2014 11:13:00"); 
console.log(diff_weeks(dt1, dt2)); 