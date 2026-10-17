class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hasSeen = new Set();
        for(let n of nums) {
            if(hasSeen.has(n)) return true;
            hasSeen.add(n);
        }
        return false;
    }
}
