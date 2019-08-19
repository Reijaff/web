function palindrome(str) {
    let new_str = str.replace(/[\W_]/g, '').toLowerCase();
    for (let i = 0, j = new_str.length - 1; i < j / 2; i++, j--) {
        if (new_str[i] !== new_str[j]) {
            return false;
        }
    }

    return true;
}

console.log(palindrome('_eye'));
