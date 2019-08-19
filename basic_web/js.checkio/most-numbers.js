function mostNumbers(...numbers) {
    numbers.sort(function(a, b) {
        return a - b;
    });
    console.log(numbers);
    return numbers[numbers.length - 1] - numbers[0]
        ? numbers[numbers.length - 1] - numbers[0]
        : 0;
}

console.log(mostNumbers(1, 2, 3));
