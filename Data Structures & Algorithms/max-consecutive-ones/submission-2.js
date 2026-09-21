class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let count = 0;
        let largestCount = 0;
        for(let i=0; i<nums.length; i++) {
            if(nums[i] === 1) {
                count++;
                if(count > largestCount) {
                    largestCount = count;
                }
            } else {
                count = 0;
            }
        }
        return largestCount;
    }
}
