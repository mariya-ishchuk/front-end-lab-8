function reverseNumber(num) {
    var numStringRepr = num.toString();
    var result = "";
    for (var i = numStringRepr.length; i > 0; i--) {
        result = result + numStringRepr[i-1];
    }
    return parseInt(result) * Math.sign(numStringRepr);
}
reverseNumber(-456);

function reverseNumberSecondImplementation(num) {
    return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
}
reverseNumberSecondImplementation(-567);