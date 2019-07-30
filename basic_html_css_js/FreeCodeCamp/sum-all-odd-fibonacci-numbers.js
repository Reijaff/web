function sumFibs(num) {
    let num1 = 0,
        num2 = 1,
        count = 0,
        sum = 0;

    while (true) {
        count = num2 + num1;
        num1 = num2;
        num2 = count;
        if (num2 % 2 != 0) {
            sum += num2;
        }
        if (num2 > num) {
            return sum - num2 + 1;
        }
    }
}

console.log(sumFibs(4));
