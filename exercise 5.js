//to be able to take user input and calculate it to solve a problem they may have.

var loanAmt = parseInt(prompt("What is the loan amount?"));
var NumofMonth = parseInt(prompt("How many months would you like to pay the loan amount?"));
var months = (loanAmt/NumofMonth);
console.log("To pay off a loan of " + loanAmt + " in " + NumofMonth + " months " + " it will take a payment of " + months + " a month");