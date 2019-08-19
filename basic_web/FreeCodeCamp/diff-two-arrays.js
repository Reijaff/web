function diffArray(arr1, arr2) {
    var newArr = [];
    let fullArr = [].concat(arr1, arr2);
    newArr = fullArr.filter(x => {
        return arr1.indexOf(x) != -1 && arr2.indexOf(x) != -1 ? false : true;
    });
    return newArr;
}

console.log(
    diffArray(
        ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
        ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'],
    ),
);
