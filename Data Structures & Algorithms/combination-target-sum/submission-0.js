class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];
        function fun(nums, target, sum=0, sel=[], start=0) {
            if(sum === target) {
                result.push([...sel]);
                return;
            }
            if(sum > target) return;
            for(let i = start; i < nums.length; i++) {
                let n = nums[i];
                sel.push(n);
                sum += n;
                fun(nums, target, sum, sel, i);
                sum -= n;
                sel.pop();
            }
        }
        fun(nums, target);
        return result;
    }
}