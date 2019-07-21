function bubble_sort(data, len) {
    for (var i = 0; i < len; i++) {
        for (var k = 0; k < len; k++) {
            if (data[k] > data[k + 1]) {
                var temp = data[k];
                data[k] = data[k + 1];
                data[k + 1] = temp;
            }
        }
    }
    console.log(data);
    return data;
}

function median(data) {
    var len = data.length;
    let sorted_data = bubble_sort(data, len);
    let result =
        len % 2 == 0
            ? (data[len / 2 - 1] + data[len / 2]) / 2
            : data[(len + 1) / 2 - 1];
    return result;
}

console.log(median([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // --> 3
