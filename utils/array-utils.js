// utils.js
// ========
module.exports = {
    swap: function (arr, index1, index2) {
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    },
    reverse: function(arr, start, end) {
        while(start < end) {
            this.swap(arr, start, end);
            start++;
            end--;
        }
    }

};
