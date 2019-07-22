function longRepeat(line) {
    let new_array = [[]];
    let count = 0;
    for (let i = 0; i < line.length; i++) {
        new_array[count].push(line[i]);
        if (line[i] != line[i + 1]) {
            count++;
            new_array.push([]);
        }
    }
    count = new_array[0].length;
    for (let y of new_array) {
        if (y.length > count) {
            count = y.length;
        }
    }

    return count;
}
console.log(longRepeat('sdsffffse'));
