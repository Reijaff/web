function intersection(setA, setB) {
    var _intersection = new Set();
    for (var elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}

function commonWords(first, second) {
    let array_first = new Set(first.split(','));
    let array_second = new Set(second.split(','));
    let new_arr = [];
	let obj = intersection(array_first, array_second);
    for (let i of obj) {
        new_arr.push(i);
    }

    return new_arr.sort().join(',');
}

console.log(commonWords("one,two,three)", "four,five,one,two,six,three"));
