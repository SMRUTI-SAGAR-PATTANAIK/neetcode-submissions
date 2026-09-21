class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let index2 = 0;
        for(let index1=0; index1 < nums.length; index1++) {
            if(nums[index1] !== val) {
                // let temp = nums[index2];
                nums[index2] = nums[index1];
                // nums[index1] = temp;
                index2++;
            }
        }
        return index2;
    }
}
