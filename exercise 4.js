//How to combine math  problems, ask users for a question and log it with strings

var FTEMP = parseInt(prompt("What is the temperture?"));
var CTEMP = Math.round((FTEMP - 32) * 5 / 9);
console.log(FTEMP + " Fahrenheit equals " + CTEMP + " in Celcius");

