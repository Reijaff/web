function mostFrequent(data) {
    let box = {};
    for (let i = 0; i < data.length; i++) {
        box[data[i]] ? box[data[i]]++ : (box[data[i]] = 1);
    }
    let sortable = [];
    for (var y in box) {
        sortable.push([box[y], y]);
    }
    return sortable.sort()[sortable.length - 1][1];
}

console.log(mostFrequent(['a', 'b', 'c', 'a', 'b', 'a']));
