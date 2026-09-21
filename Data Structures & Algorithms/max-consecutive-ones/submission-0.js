class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let count = 0;
        let largest = 0;
        nums.forEach((val) => {
            if(val === 1) count++;
            if(val === 0) {
                if(count > largest) {
                    largest = count;
                }
                count = 0; 
            }
        });
        if(count > largest) {
            largest = count;
        }
        return largest;
    }
}
