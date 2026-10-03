class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let i=0, k=nums.length-1, mid;
        while(i <= k) {
            mid = Math.floor((i + k) / 2);
            if(nums[mid] === target) {
                return mid;
            } else if(nums[mid] < target) {
                i = mid + 1;
            } else if(nums[mid] > target) {
                k = mid - 1;
            }
        }
        return -1;
    }
}
