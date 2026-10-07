"use strict";

let username = prompt("Please enter your username:");
alert(`${username.length < 4 ? "Username is too short" : "Username is valid"}`);
