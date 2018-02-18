function isMin() {
    var val = arguments[0];
    for(var i = 0; i < arguments.length; i++) {
        if (arguments[i] < val) {
            val = arguments[i];
        }
    }
    return val;
}
isMin(6, 3, -6, 0, 10);