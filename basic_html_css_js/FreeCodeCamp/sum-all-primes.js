function sumPrimes(num) {
    let normalArr = Array.from({length: num + 1}, (v, i) => i).slice(2);

    let sum = 0;
    function isPrime(number1) {
        for (let i = 2; i <= number1; i++) {
            if (number1 % i === 0 && number1 != i) {
                return false;
            }
        }
        return true;
    }
    let primeArr = normalArr.filter(isPrime);
    sum = primeArr.reduce((a, b) => a + b);
    return sum;
}

sumPrimes(10);
