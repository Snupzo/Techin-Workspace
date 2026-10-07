/*
Write a JavaScript program to calculate age. 

Test Data :
console.log(calculate_age(new Date(1982, 11, 4))); 
32
console.log(calculate_age(new Date(1962, 1, 1)));
53
*/

let calculate_age = (birthday) => {
  let age = new Date().getFullYear() - new Date(birthday).getFullYear();
  if (new Date().getMonth() <= new Date(birthday).getMonth()) {
    if (
      new Date().getDate() < new Date(birthday).getDate() ||
      new Date().getMonth() <= new Date(birthday).getMonth()
    ) {
      age--;
    }
  }
  return age;
};

console.log(calculate_age(new Date(1982, 11, 4)));
console.log(calculate_age(new Date(1962, 1, 1)));
