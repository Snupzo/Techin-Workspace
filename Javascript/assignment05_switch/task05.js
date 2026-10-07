"use strict";

switch (prompt("Input the color of the light:").toLowerCase()) {
  case "red":
    console.log("Stop at the red light.");
    break;
  case "yellow":
    console.log("Stop if you can do it safely");
    break;
  case "green":
    console.log("Go faaaaast");
    break;
  default:
    console.log("Unknown lgiht");
}
