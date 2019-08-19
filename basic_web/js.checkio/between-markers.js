function betweenMarkers(text, begin, end) {
    // returns substring between two given markers
    let first = text.indexOf(begin) + begin.length;
    let last = text.indexOf(end);
    let neew = '';
    if (text.indexOf(begin) == -1 && text.indexOf(end) == -1) {
        return '';
    }
    if (text.indexOf(begin) == -1) {
        first = 0;
    }
    if (text.indexOf(end) == -1) {
        last = text.length;
    }
    if (first > last) {
        return '';
    }
    for (let i = first; i != last; i++) {
        neew += text[i];
    }
    // your code here
    return neew;
}

console.log(betweenMarkers('No [b]hi', '[b]', '[/b]'));
