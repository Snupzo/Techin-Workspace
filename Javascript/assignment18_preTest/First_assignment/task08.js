const people = [
  { id: 1, name: "Jonas" },
  { id: 2, name: "Ona" },
  { id: 3, name: "Petras" },
];

const scores = [
  { id: 1, score: 10 },
  { id: 3, score: 7 },
  { id: 2, score: 9 },
];

let merge = (array1, array2) => {
  let newArr = [];
  array1.forEach((person) => {
    let currentP = { ...person };
    for (let i = 0; i < array1.length; i++) {
      let currentId = array2[i].id;
      if (currentId === currentP.id) {
        person = { ...person, ...array2[i] };
      }
    }
    newArr.push(person);
  });
  return newArr;
};

console.log(merge(people, scores));
