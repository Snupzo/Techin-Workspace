const items = [
  {
    name: "Phone",
    description: "A very nice smartphone with good camera",
    price: 500,
  },
  {
    name: "Laptop",
    description: "Powerful laptop for work and games",
    price: 1200,
  },
];

let shortDesc = (arr) => {
  return arr.map((item) => {
    let descr = item.description;
    if (descr.length > 25) {
      descr = `${item.name} (${item.price}€): ${descr.slice(0, 24)}...`;
    }
    return descr;
  });
};

console.log(shortDesc(items));
