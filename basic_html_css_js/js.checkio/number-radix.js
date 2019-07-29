function numberRadix(str_number, radix) {
    let ascii = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < str_number.length; i++) {
        if (ascii.slice(0, radix).indexOf(str_number[i]) == -1) return -1;
    }

    let decimal = 0;
    for (let i = 1; i <= str_number.length; i++) {
        decimal +=
            ascii.indexOf(str_number[str_number.length - i]) * radix ** (i - 1);
    }

    return decimal;
}

console.log(numberRadix('101', 5));
