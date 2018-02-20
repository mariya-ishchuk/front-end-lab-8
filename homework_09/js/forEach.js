function forEach(array, argFunc) {
    for (var i = 0; i < array.length; i++) {
        argFunc(array[i]);
    }
};
var array = [5, 6, 7];
forEach(array, function(el) {
    console.log(el);
});