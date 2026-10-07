"use strict";

//Two ways. First is prompting for every imagined number given that there are only 10 numbers

let evenAmount = 0;
/*
for(let i = 0; i < 10; i++)
{
    if(+prompt(`Įveskite sugalvotą skaičių #${i+1}/10:`) % 2 === 0)
    {evenAmount++;}
}

if(evenAmount === 0)
{alert("Atsakymas: Nėra");}
else
{alert(`Atsakymas: ${evenAmount}`);}
*/

//Second way accepts any amount of numbers, considering they are in an array.

let evenNumbers = (givenNumbers) => {
  let evenAmount = 0;
  for (let numbers of givenNumbers) {
    if (numbers % 2 === 0) {
      evenAmount++;
    }
  }
  if (evenAmount === 0) {
    return "Nėra";
  } else return evenAmount;
};

console.log(`Atsakymas: ${evenNumbers([2, 9, 4, 100, 25, 5, 6, 3, 5, 85])}`);
console.log(`Atsakymas: ${evenNumbers([3, 9, 5, 99, 25, 5, 1, 3, 5, 85])}`);
