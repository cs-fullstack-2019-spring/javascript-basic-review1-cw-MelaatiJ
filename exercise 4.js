//How to combine math  problems, ask users for a question and log it with strings


do
{
    var FTEMP = parseInt(prompt("Enter the temperature!"));
}
while (isNaN(FTEMP));
var CTEMP = Math.round((FTEMP - 32) * 5 / 9);
console.log(FTEMP + " degrees fahrenheit equals " + CTEMP + " degrees in celcius");


