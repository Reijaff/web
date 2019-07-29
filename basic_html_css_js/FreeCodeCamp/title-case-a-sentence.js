function titleCase(str) {
    let new_arr = str.split(' ');
    let new_arr2 = [];
    let _2d_array = [[]];
    for (let i = 0; i < new_arr.length; i++) {
        for (let j = 0; j < new_arr[i].length; j++) {
            _2d_array[i].push(new_arr[i][j]);
        }
        _2d_array[i][0] = _2d_array[i][0].toUpperCase();
        if (_2d_array[i].length > 1) {
            for (let y = 1; y < _2d_array[i].length; y++) {
                _2d_array[i][y] = _2d_array[i][y].toLowerCase();
            }
        }

        _2d_array.push([]);
    }

    for (let i = 0; i < _2d_array.length; i++) {
        new_arr2.push(_2d_array[i].join(''));
    }
    return new_arr2.join(' ').trim();
}

console.log(titleCase("sHoRt AnD sToUt"));
