"use strict";

switch ((prompt = "Enter language code:".toLocaleLowerCase())) {
  case "en":
    console.log("Hello");
    break;
  case "lt":
    console.log("Labas");
    break;
  case "fr":
    console.log("Bonjour");
    break;
  case "es":
    console.log("Hola");
    break;
  default:
    console.log("Language not supported");
}
