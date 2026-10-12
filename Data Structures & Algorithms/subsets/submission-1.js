class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];
        function fun(nums, set=[], start =0) {
            if(start === nums.length) {
                return;
            }
            for(let i=start; i<nums.length; i++) {
                set.push(nums[i]);
                result.push([...set]);
                fun(nums, set, i+1);
                set.pop();
            }
        }
        fun(nums);
        result.push([]);
        return result;
    }
}
