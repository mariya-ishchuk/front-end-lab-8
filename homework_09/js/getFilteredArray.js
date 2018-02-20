function getFilteredArray(array, predicateFunction) {
    var newArray = [];
    forEach(array, function(el) {
        if (predicateFunction(el)) {
            newArray.push(el);
        }
    });
    return newArray;
}
var arr = [1, 7, 20];
var filterFunc = function predicateFunction(el) {
    return el > 3;
};

getFilteredArray(arr, filterFunc);