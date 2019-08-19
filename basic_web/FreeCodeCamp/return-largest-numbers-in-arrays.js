function largestOfFour(arr) {
    // You can do this!
    let new_array = [];
    for (let i = 0; i < arr.length; i++) {
        new_array.push(
            arr[i].sort(function(a, b) {
                return b - a;
            })[0],
        );
    }
    return new_array;
}

console.log(
    largestOfFour([
        [4, 5, 1, 3],
        [13, 27, 18, 26],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1],
    ]),
);
