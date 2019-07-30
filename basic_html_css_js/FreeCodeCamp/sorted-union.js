function uniteUnique(...arr) {
    let final = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            final.push(arr[i][j]);
        }
    }
    let uniqueArray = final.filter(function(item, pos) {
        return final.indexOf(item) == pos;
    });
    return uniqueArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
