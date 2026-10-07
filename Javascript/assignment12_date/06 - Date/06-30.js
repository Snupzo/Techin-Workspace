/*
Write a JavaScript function to get time differences in days between two dates.
Test Data :
dt1 = new Date("October 13, 2014 08:11:00"); 
dt2 = new Date("October 19, 2014 11:13:00"); 
console.log(diff_days(dt1, dt2));
6
*/

import moment from "moment";

let diff_days = (dateOne, dateTwo) => {
  return moment(dateOne) > moment(dateTwo)
    ? moment(dateOne).diff(moment(dateTwo), "days")
    : moment(dateTwo).diff(moment(dateOne), "days");
};

let dt1 = new Date("October 13, 2014 08:11:00");
let dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_days(dt1, dt2));
