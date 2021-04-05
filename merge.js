const merge = (arr1, arr2) => {
    const sorted = [];

    while(arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            sorted.push(arr1.shift());
        } else {
            sorted.push(arr2.shift());
        }
    }

    return sorted.concat(arr1).concat(arr2);
}

module.exports = merge;