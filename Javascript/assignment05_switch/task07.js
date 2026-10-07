"use strict";
let cmd = prompt("Enter your command:").toLowerCase();
function runCommand(command) {
  switch (command) {
    case "start":
      console.log("Starting...");
      break;
    case "stop":
      console.log("Stopping");
      break;
    case "pause":
      console.log("Pausing...");
      break;
    case "resume":
      console.log("Resuming...");
      break;
    default:
      console.log("Unknown command");
  }
}
runCommand(cmd);
