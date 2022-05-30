var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function sum(a, b) {
    return a + b;
}
function appendArrayValue(oldArray, oldValue) {
    var newArray = __spreadArray([oldValue], oldArray);
    return newArray;
}
var demoArray = [1, 2, 3, 's'];
var newArray = appendArrayValue(demoArray, -2);
console.log(newArray);
