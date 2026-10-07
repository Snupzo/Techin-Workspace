"use strict";

let longLongVowels = (str) =>{
    const vowels = 'aeiou';
    let result = '';
    let i = 0;
    let length = str.length;

    while (i < length) {
        let char = str[i];
        if (vowels.includes(char.toLowerCase())) {
            // Check for consecutive vowels
            let count = 1;
            while (i + 1 < length && str[i + 1].toLowerCase() === char.toLowerCase()) {
                i++;
                count++;
            }

            // Extend the vowel if it appears at least two times consecutively
            if (count > 1) {
                result += char.repeat(5);
            } else {
                result += char;
            }
        } else {
            result += char;
        }

        i++;
    }

    return result;
}

console.log(longLongVowels('Good'));
console.log(longLongVowels('Cheese'));
console.log(longLongVowels('Man'));