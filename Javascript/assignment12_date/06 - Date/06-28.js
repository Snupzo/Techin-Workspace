/*
Write a JavaScript function to get time differences in minutes between two dates.
Test Data :
dt1 = new Date("October 13, 2014 11:11:00"); 
dt2 = new Date("October 13, 2014 11:13:00"); 
console.log(diff_minutes(dt1, dt2)); 
2
*/

let diff_minutes = (firstDate, secondDate) => {
  let diff =
    new Date(firstDate) > new Date(secondDate)
      ? new Date(firstDate) - new Date(secondDate)
      : new Date(secondDate) - new Date(firstDate);
  // 60 seconds in minute, 1000 ms in second
  diff = diff / 60 / 1000;
  return diff;
};

let dt1 = new Date("October 13, 2014 11:11:00");
let dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_minutes(dt1, dt2));
