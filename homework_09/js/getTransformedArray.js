function getTransformedArray(array1, argFunc) {
    var array2 = [];
    forEach(array1, function(el) {
        array2.push(argFunc(el));
    });
    return array2;
}

var newArray = [1, 2, 3];
var transformFunc = function(el) {
    return el + 1;
};

getTransformedArray(newArray, transformFunc);