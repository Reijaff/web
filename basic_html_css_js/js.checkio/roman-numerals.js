function romanNumerals(number) {
    let roman = '';
    while (number != 0) {
        if (number - 1000 >= 0) {
            number -= 1000;
            roman += 'M';
            continue;
        } else if (number - 900 >= 0) {
            number -= 900;
            roman += 'CM';
            continue;
        } else if (number - 500 >= 0) {
            number -= 500;
            roman += 'D';
            continue;
        } else if (number - 100 >= 0) {
            number -= 100;
            roman += 'C';
            continue;
        } else if (number - 90 >= 0) {
            number -= 90;
            roman += 'XC';
            continue;
        } else if (number - 50 >= 0) {
            number -= 50;
            roman += 'L';
            continue;
        } else if (number - 10 >= 0) {
            number -= 10;
            roman += 'X';
            continue;
        } else if (number - 9 >= 0) {
            number -= 9;
            roman += 'IX';
            continue;
        } else if (number - 5 >= 0) {
            number -= 5;
            roman += 'V';
            continue;
        } else if (number - 4 >= 0) {
            number -= 4;
            roman += 'IV';
            continue;
        } else if (number - 1 >= 0) {
            number -= 1;
            roman += 'I';
            continue;
        }
    }
    return roman;
}
console.log(romanNumerals(6)); // --VI
