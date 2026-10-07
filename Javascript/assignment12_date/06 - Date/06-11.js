/*
 Write a JavaScript function to get the maximum date from an array of dates.

Test Data :
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/02/02"
*/


let max_date = (dates) =>{
    return dates.reduce((a,b) => new Date(a) > new Date(b) ? a : b);
}

console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));