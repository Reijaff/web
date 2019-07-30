function spinalCase(str) {
    //ad space between lower and upper chars
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    // Replace space and underscore with -
    return str.toLowerCase().replace(/\s|_+/g, '-');
}

// test here
console.log(spinalCase('thisIsSpinalTap'));
