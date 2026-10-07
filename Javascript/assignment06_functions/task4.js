"use strict";

// Write a JS function which accepts an argument and returns the type

function argumentType(argument) {
  if (Array.isArray(argument)) {
    return "array";
  } else {
    return typeof argument;
  }
}
