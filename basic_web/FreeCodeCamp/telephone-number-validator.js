function telephoneCheck(str) {
    let count = 0,
        new_arr,
        xcount = 0;

    str.trim();
    if (str[0] == '-') return false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(') {
            count++;
            xcount = 0;
        } else if (str[i] == ')') {
            count--;
            if (xcount > 4) return false;
            if (count < 0) return false;
        }
        xcount++;
    }

    if (count !== 0) return false;

    new_arr = str
        .replace(/[(]|[)]/g, '')
        .split(/-| /g)
        .join('');

    if (new_arr.length > 11) {
        return false;
    } else if (new_arr.length == 11) {
        if (new_arr[0] !== '1') {
            return false;
        } else if (isNaN(parseInt(new_arr.slice(0)))) {
            return false;
        } else return true;
    } else if (new_arr.length == 10) {
        if (isNaN(parseInt(new_arr))) {
            return false;
        } else return true;
    } else return false;

    // Good luck!
    return new_arr;
}

console.log(telephoneCheck('1 (456) 789 4444'));
