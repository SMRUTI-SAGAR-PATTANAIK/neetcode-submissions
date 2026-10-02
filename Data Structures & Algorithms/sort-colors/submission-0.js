class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let j=0;
        for(let k=0; k<3; k++) {
            for(let i=j; i<nums.length; i++) {
                if(nums[i] === k) {
                    let temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                    j++;
                }
            }
        }
    }
}
