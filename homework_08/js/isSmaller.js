function isSmaller(a, b) {
    return !isBigger(a, b);
}
function isBigger(a, b) {
    return a > b;
}
isSmaller(5, -1);