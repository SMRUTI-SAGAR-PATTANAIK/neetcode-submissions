/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    quickSort(pairs) {
        if(!pairs || pairs.length <= 1) {
            return pairs;
        }
        function findPivotIndex(arr, start, end) {
            let pivot = arr[end];
            let pivotValue = arr[end].key;
            let j = start;
            for(let i=start; i<end; i++) {
                if(arr[i].key < pivotValue) {
                    let temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                    j++;
                }
            }
            arr[end] = arr[j];
            arr[j] = pivot;
            return j;
        }

        function sort(pairs, start, end) {
            if(end - start + 1 <= 1) {
                return;
            }
            let pivotIndex = findPivotIndex(pairs, start, end);
            sort(pairs, start, pivotIndex-1);
            sort(pairs, pivotIndex+1, end);
        }

        sort(pairs, 0, pairs.length-1);
        return pairs;
    }
}