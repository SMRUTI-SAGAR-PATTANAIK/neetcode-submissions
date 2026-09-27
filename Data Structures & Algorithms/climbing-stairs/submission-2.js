class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    constructor() {
        this.memo = {};
    }

    climbStairs(n) {
        if(n < 0) {
            return 0;
        }
        if(n === 0) {
            return 1;
        }
        if(this.memo[n] !== undefined) {
            return this.memo[n];
        }
        this.memo[n] = this.climbStairs(n-1) + this.climbStairs(n-2);
        return this.memo[n];
    }
}
