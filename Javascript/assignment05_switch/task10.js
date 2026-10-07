"use strict";
// Using callback function due to task requirements and making this an infinite loop unless the right currency is entered
function unknownCurrency() {
  let newSymbol = prompt("Unknown currency, try again").toUpperCase();
  currencySymbol(newSymbol);
}

function currencySymbol(currency) {
  switch (currency) {
    case "USD":
      console.log("$");
      break;
    case "EUR":
      console.log("€");
      break;
    case "GBP":
      console.log("£");
      break;
    case "JPY":
      console.log("¥");
      break;
    case "CHF":
      console.log("Fr");
      break;
    default:
      unknownCurrency();
  }
}

currencySymbol(prompt("Enter the currency code").toUpperCase());
