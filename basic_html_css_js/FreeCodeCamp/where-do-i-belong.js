function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (num > arr[i]) {
            count++;
        }
    }
    return count;
}

console.log(getIndexToIns([3, 10, 5], 3));
