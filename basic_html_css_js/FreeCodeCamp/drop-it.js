function dropElements(arr, func) {
    // Drop them elements.
    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            new_arr = arr.slice(i);
            break;
        }
    }
    return new_arr;
}

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
