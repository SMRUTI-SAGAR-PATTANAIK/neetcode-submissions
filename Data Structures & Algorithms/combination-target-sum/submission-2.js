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

            if(sum === target) {
                result.push([...set]);
                return;
            }

            if(start >= nums.length) return;
            
            sum += nums[start];
            set.push(nums[start]);
            fun(nums, target, sum, set, start);
            
            sum -= nums[start];
            set.pop();
            fun(nums, target, sum, set, start+1);
        }
        fun(nums, target);
        return result;
    }
}
