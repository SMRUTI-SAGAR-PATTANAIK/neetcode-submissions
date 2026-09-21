class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        return Array.from({length: nums.length * 2}, (_,index) => {
            return nums[index % nums.length];
        })
    }
}
