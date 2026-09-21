class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let greatest = -1;
        for(let index = arr.length-1; index>=0; index--) {
            let element = arr[index];
            arr[index] = greatest;
            if(element > greatest) {
                greatest = element;
            }
        }
        return arr;
    }
}
