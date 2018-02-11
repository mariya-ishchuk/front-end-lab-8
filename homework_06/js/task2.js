var a = prompt("Input amount of EURO") || 0;
var b = prompt("input amount of USD") || 0;

var euroCurr = 33.2324;
var usdCurr = 27.1240;

var euroToHrn = parseFloat(a * euroCurr).toFixed(0) + " UAH, ";
var usdToHrn = parseFloat(a * usdCurr).toFixed(0) + " UAH, ";
var euroToUsd = parseFloat(euroCurr / usdCurr).toFixed(2) + " dollars.";

console.log(a + " euros are equal " + euroToHrn + a + " dollars are equal " + usdToHrn + "one euro is equal " + euroToUsd);