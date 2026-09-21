class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let largest = arr[arr.length-1];
        arr[arr.length-1] = -1;
        for(let i=arr.length-2; i>=0; i--) {
            let key = arr[i];
            arr[i] = largest;
            if(key > largest) {
                largest = key;
            }
        }
        return arr;
    } 
}
