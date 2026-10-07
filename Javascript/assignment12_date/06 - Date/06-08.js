/*
Write a JavaScript function to get difference between two dates in days. 

Test Data :
console.log(date_diff_indays('04/02/2014', '11/04/2014')); 
console.log(date_diff_indays('12/02/2014', '11/04/2014'));
Output :
216 
-28
*/

let date_diff_indays = (data1, data2) => {
    let day1  = new Date(data1).getTime();
    let day2  = new Date(data2).getTime();
    let diff  = day2 - day1;
    diff  = Math.floor(diff / (1000 * 3600 * 24));
    return diff;
}

console.log(date_diff_indays('04/02/2014', '11/04/2014')); 
console.log(date_diff_indays('12/02/2014', '11/04/2014'));