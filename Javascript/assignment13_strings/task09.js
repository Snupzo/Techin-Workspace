"use strict";

let truncate_string = (string, howMany) => {
  return string.slice(0, howMany);
};

console.log(truncate_string("Robin Singh", 4));
