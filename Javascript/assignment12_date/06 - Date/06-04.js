/*
Write a JavaScript function to get the month name from a particular date. 

Test Data :
console.log(month_name(new Date("10/11/2009"))); 
console.log(month_name(new Date("11/13/2014")));
Output :
"October" 
"November"
*/
import moment from 'moment';

let month_name = (data) =>{
    return moment(data).format('MMMM');
}

console.log(month_name(new Date("10/11/2009"))); 
console.log(month_name(new Date("11/13/2014")));