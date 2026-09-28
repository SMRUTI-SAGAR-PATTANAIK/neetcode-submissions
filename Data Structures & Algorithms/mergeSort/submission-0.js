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
    mergeSort(pairs) {
        function _merge(arr1, arr2) {
            let i=0, j=0;
            let output = [];
            while(i < arr1.length && j < arr2.length) {
                if(arr1[i].key <= arr2[j].key) {
                    output.push(arr1[i]);
                    i++;
                } else {
                    output.push(arr2[j]);
                    j++;
                }
            }

            while(i < arr1.length) {
                output.push(arr1[i]);
                i++;
            }

            while(j < arr2.length) {
                output.push(arr2[j])
                j++;
            }

            return output;
        }
        function _sort(pairs) {
            if(pairs.length <= 1) {
                return pairs;
            }
            let mid = Math.floor(pairs.length / 2);
            let sortedArr1 = _sort(pairs.slice(0, mid));
            let sortedArr2 = _sort(pairs.slice(mid));
            let mergedArr = _merge(sortedArr1, sortedArr2);
            return mergedArr;
        }
        return _sort(pairs);

    }
}
