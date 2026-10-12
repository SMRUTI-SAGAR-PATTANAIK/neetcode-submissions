class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        function fun(nums, target, sum=0, set=[], start=0) {
            if(sum > target) {
                return;
            }
            for(let i=start; i < nums.length; i++) {
                sum += nums[i];
                set.push(nums[i]);
                if(sum === target) {
                    result.push([...set]);
                }
                fun(nums, target, sum, set, i);
                set.pop();
                sum -= nums[i];
            }
        }
        fun(nums, target);
        return result;
    }
}
