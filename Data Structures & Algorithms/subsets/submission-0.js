class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [[]];
        function fun(nums) {
            if(!nums.length) return;
            const rLength = result.length;
            for(let i=0; i<rLength; i++) {
                result.push([...result[i],nums[0]]);
            }
            fun(nums.slice(1));
        }
        fun(nums);
        return result;
    }
}
