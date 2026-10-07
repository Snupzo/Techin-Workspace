"use strict";


let dollarMuch = (numbers) =>{
    return numbers.map(number=>number = `$${number.toFixed(2)}`
    )
}

console.log(dollarMuch([5, 4.23, 6.4, 8.09, 3.20]));
