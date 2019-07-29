function frankenSplice(arr1, arr2, n) {
    let new_arr = [...arr2];
    new_arr.splice(n, 0, ...arr1);
    return new_arr;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);
