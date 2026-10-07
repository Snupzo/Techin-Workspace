/*
Write a JavaScript function to get the last day of a month. 

Test Data :
console.log(lastday(2014,0)); 
console.log(lastday(2014,1)); 
console.log(lastday(2014,11));
Output :
31 
28 
31
*/


let lastday = (year, month) => {
    //0 passed as day argument rolls it back to the day before given month. So month + 1, 0 will give the last day of month provided to the function.
  return new Date(year, month + 1, 0).getDate();
};


console.log(lastday(2014,0)); 
console.log(lastday(2014,1)); 
console.log(lastday(2014,11));