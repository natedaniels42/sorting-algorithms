const merge = require('./merge');

const mergesort = (arr) => {
    const length = arr.length;

    if (length < 2) {
        return arr;
    }

    const mid = Math.floor(length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, length);

    return merge(mergesort(left), mergesort(right));
}

module.exports = mergesort;