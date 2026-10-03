class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length-1;
        let k = 0;
        while(k <= m) {
            const midR = Math.floor((k + m) / 2);
            let lowest = matrix[midR][0];
            let highest = matrix[midR][matrix[midR].length-1];
            if(target > highest) {
                k = midR + 1;
            } else if(target < lowest) {
                m = midR - 1;
            } else {
                let n = matrix[midR].length-1;
                let l = 0;
                while(l <= n) {
                    const midC = Math.floor((l + n) / 2);
                    if(matrix[midR][midC] === target) {
                        return true;
                    } else if(target > matrix[midR][midC]) {
                        l = midC+1;
                    } else {
                        n = midC-1;
                    }
                 }
                return false;
            }
        }
        return false;
    }
}
