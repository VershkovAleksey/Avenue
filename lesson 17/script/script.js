function compact(array) {
    return array.filter((item) => item);
}

var unsortedArray = [1, 32, 44, undefined, null, false, true, false, 0, 0, 45, "Привет мир"];
console.log(compact(unsortedArray));

function reverse(array) {
    var reversed = [];
    console.log(array);
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}
var array = [1, 2, 3, 4, 5, 6];
console.log(reverse(array));
