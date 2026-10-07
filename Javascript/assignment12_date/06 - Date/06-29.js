/*
Write a JavaScript function to get time differences in hours between two dates.
Test Data :
dt1 = new Date("October 13, 2014 08:11:00"); 
dt2 = new Date("October 13, 2014 11:13:00"); 
console.log(diff_hours(dt1, dt2)); 
3
*/

import moment from "moment";

let diff_hours = (dateOne, dateTwo) => {
  return moment(dateOne) > moment(dateTwo)
    ? moment(dateOne).diff(moment(dateTwo), "hours")
    : moment(dateTwo).diff(moment(dateOne), "hours");
};

let dt1 = new Date("October 13, 2014 08:11:00");
let dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_hours(dt1, dt2));
