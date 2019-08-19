function mostWanted(data) {
    let lower_data = data.toLowerCase();
    let stripped_lower_data = lower_data.replace(
        /[.,\/#!$%\^&\*;: 0123456789{}=\-_`~()]/g,
        '',
    );
    let box = new Object();
    for (let x = 0; x < stripped_lower_data.length; x++) {
        box[stripped_lower_data[x]] || box[stripped_lower_data[x]] == 0
            ? box[stripped_lower_data[x]]++
            : (box[stripped_lower_data[x]] = 1);
    }

    var sortable = [];
    for (var y in box) {
        sortable.push([y, box[y]]);
    }

    sortable.sort();
    sortable.reverse();

    let count = 0;
	let newvar;
    for (let u = 0; u < sortable.length; u++) {
        if (sortable[u][1] >= count) {
            count = sortable[u][1];
			newvar = sortable[u][0];
        }
    }
    return newvar;
}

console.log(mostWanted('Hello World!'));
