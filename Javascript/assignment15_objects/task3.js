"use strict";

const person = {
  name: "Alice",
  age: 30,
  city: "Paris",
  class: "Engineering"
};

let deleteClass = (obj) => {
  if (obj.hasOwnProperty("class")) {
    delete obj.class;
  } else {
    const keys = Object.keys(obj);
    if (keys.length > 0) {
      const lastKey = keys[keys.length - 1];
      delete obj[lastKey];
    }
  }
};

deleteClass(person);
console.log(person);