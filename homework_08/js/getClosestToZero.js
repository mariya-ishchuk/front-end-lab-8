function getClosestToZero() {
    var closest = arguments[0];
    for (var i = arguments.length - 1; i >= 0; i--) {
        closest = Math.abs(arguments[i]) < Math.abs(closest) ? arguments[i] : closest;
    }
    return closest;
}
getClosestToZero(9, 5, -4, -9);