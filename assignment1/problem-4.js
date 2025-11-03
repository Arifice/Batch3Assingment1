var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
{
    function reverseArray(arr) {
        return __spreadArray([], arr, true).reverse();
    }
    // Sample Input 1:
    console.log(reverseArray(["apple", "banana", "cherry"]));
    // Sample Output 1:
    // ["cherry", "banana", "apple"]
    // Sample Input 2:
    console.log(reverseArray([10, 20, 30]));
    // Sample Output 2:
    // [30, 20, 10]
}
