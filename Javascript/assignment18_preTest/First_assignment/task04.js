const posts = [
  { id: 1, tags: ["js", "web", "frontend"] },
  { id: 2, tags: ["js", "node", "backend"] },
  { id: 3, tags: ["css", "design", "frontend"] }
];

let uniques = (array) =>{
    let result = [];
    array.forEach(obj => {
        result = [...new Set([...result, ...obj.tags])]
    });
    return result;
}

console.log(uniques(posts))