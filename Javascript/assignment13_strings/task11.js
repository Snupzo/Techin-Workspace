"use strict";

let protect_email = (email) => {
  let emailEnd = email.slice(email.indexOf("@"));
  let emailStart = email.slice(0, 5);
  return `${emailStart}...${emailEnd}`;
};

console.log(protect_email("robin_singh@example.com"));
