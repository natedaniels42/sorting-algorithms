const swap = require('./swap');

const partition = (arr, left, right) => {
    const pivot = arr[Math.floor((left + right) / 2)];

    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    
    return left;
}

module.exports = partition;