/*
Write a JavaScript function to get the amount of days of a year. 

Test Data :
console.log(days_of_a_year(2015)); 
365
console.log(days_of_a_year(2016));
366
*/

let days_of_a_year = (year) =>
{
    return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) ? 366 : 365;
}

console.log(days_of_a_year(2015)); 
console.log(days_of_a_year(2016));