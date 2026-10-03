/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let i = 1, j = n, mid;
        while(i <= j) {
            mid = Math.floor((i + j) / 2);
            let cost = guess(mid);
            if(cost === 0) {
                return mid;
            } else if(cost > 0) {
                i = mid + 1;
            } else if(cost < 0) {
                j = mid - 1;
            }
        }
        return -1;
    }
}
