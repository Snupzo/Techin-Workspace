"use strict";

let numbers = [1, 4, 8];

//Function per task request
/*
let sumNumbers = (givenArray) =>
{
    let sum = 0;
    for(let given of givenArray)
    {sum += given;}
    return sum;
}

console.log(sumNumbers(numbers));
*/

let sumNumbers = numbers.reduce((a, b) => {
  return a + b;
});

console.log(sumNumbers);
