function smallestCommons(arr) {
    if (arr[1] < arr[0]) {
        var tmp = arr[1];
        arr[1] = arr[0];
        arr[0] = tmp;
    }

    function gcd(x, y) {
        // Implements the Euclidean Algorithm
        if (y === 0) return x;
        else return gcd(y, x % y);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }
    let min = arr[0];
    for (let i = arr[0]; i <= arr[1]; i++) {
        min = lcm(min, i);
    }
    return min;
}

console.log(smallestCommons([1, 13]));
