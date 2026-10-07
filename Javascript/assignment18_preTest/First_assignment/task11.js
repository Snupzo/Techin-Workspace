const books = [
  { title: "JS Basics", pages: 120, tags: ["js", "beginner"] },
  { title: "Advanced JS", pages: 350, tags: ["js", "advanced"] },
  { title: "CSS Mastery", pages: 200, tags: ["css"] },
  { title: "HTML & CSS", pages: 150, tags: ["html", "css", "beginner"] },
];

let searchBooks = (books, { minPages, hasTag }) => {
  let matchingBooks = [];
  books.forEach((book) => {
    if (book.pages >= minPages) {
      let tagList = book.tags;
      if (tagList.includes(hasTag)) {
        let titleOf = book.title;
        matchingBooks.push(titleOf);
      }
    }
  });
  return matchingBooks;
};

console.log(searchBooks(books, { minPages: 150, hasTag: "css" }));
