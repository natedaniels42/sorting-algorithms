const partition = require('./partition');

const quicksort = (arr, left = 0, right = arr.length - 1) => {
    const pivotIndex = partition(arr, left, right);

    if (left < right) {
        quicksort(arr, left, pivotIndex - 1);
        quicksort(arr, pivotIndex, right);
    }

    return arr;
}

module.exports = quicksort;