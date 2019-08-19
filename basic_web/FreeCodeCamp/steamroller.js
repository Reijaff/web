function steamrollArray(arr) {
    let lvl = 0;
    function flatten(ar, index) {
        if (!Array.isArray(ar)) {
            return ar;
        } else {
            return flatten(ar[index],0);
        }
    }
    let count = 0;
    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && arr.length > 1) {
            for (let y = 0; y < arr[i].length; y++) {
                new_arr.push(flatten(arr[i], y));
            }
        } else {
            new_arr.push(flatten(arr[i], 0));
        }
    }
    return new_arr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
