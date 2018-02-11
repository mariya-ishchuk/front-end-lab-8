var a = prompt("Enter the length of triangle's side.");
var b = prompt("Enter the length of triangle's side.");
var c = prompt("Enter the length of triangle's side.");

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

if (a <= 0 || !a || b <= 0 || !b || c <= 0 || !c) {
    console.log("Incorrect data!");
} else {
    if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === b * b + a * a) {
        console.log("This is right triangle.");
    } else if (a === b && b === c && c === a) {
        console.log("This is equilateral triangle.");
    } else if (a === b || b === c || c === a) {
        console.log("This is isosceles triangle.");
    } else if (a !== b && b !== c && c !== a) {
        console.log("This is scalene triangle.");
    }
    var p = (a + b + c) / 2;
    var area = Math.sqrt(p * ((p - a) * (p - b) * (p - c)));
    console.log("It's square is " + parseFloat(area).toFixed(2));
}
