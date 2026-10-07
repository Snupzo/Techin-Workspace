"use strict";

const library = [
  {
    author: "J.K. Rowling",
    title: "Harry Potter and the Chamber of Secrets",
    readingStatus: true,
  },
  { author: "Homer", title: "The Odyssey", readingStatus: true },
  {
    author: "Harper Lee",
    title: "To Kill a Mockingbird",
    readingStatus: false,
  },
];

let ifRead = (obj) => {
  for (let i = 0; i < obj.length; i++) {
    let current = obj[i];
    if (obj[i].readingStatus) {
      console.log(`Already read "${current.title}" by ${current.author}.`);
    } else {
      console.log(
        `You still need to read "${current.title}" by ${current.author}.`,
      );
    }
  }
};

ifRead(library);
