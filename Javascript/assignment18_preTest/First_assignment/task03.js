const input =
  "name,age,city\nJonas,25,Vilnius\nOna,30,Kaunas\nPetras,22,Klaipeda";

let objectFix = (string) => {
  let result;
  let people = string.split("\n").slice(1);
  let keys = string.split("\n")[0].split(",");
  result = people.map((person) => {
    let singlePerson = person.split(",");
    let personObject = {};
    keys.forEach((key, index) => {
      personObject[key] = singlePerson[index];
    });
    return personObject;
  });
  return result;
};

console.log(objectFix(input));
