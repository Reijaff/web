function hasOccurance(arr, i) {
    var result = false;
    for (let i_ of arr) {
        if (i_ == i) {
            if (result == true) {
                return true;
            }
            result = true;
        }
    }

    return false;
}

function nonUniqueElements(data) {
    var newdata = [];

    for (let par of data) {
        if (hasOccurance(data, par)) {
            newdata.push(par);
        }
    }

    return newdata;
}

console.log(nonUniqueElements([1, 1, 1, 2, 3, 4, 4]));
