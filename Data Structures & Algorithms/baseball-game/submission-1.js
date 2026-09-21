class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let arr = [];
        for(let op of operations) {
            switch(op) {
                case '+': {
                    let newScore = arr[arr.length-1] + arr[arr.length-2];
                    arr.push(newScore);
                    break;
                }
                case 'D': {
                    let newScore = 2 * arr[arr.length-1];
                    arr.push(newScore);
                    break;
                }
                case 'C': {
                    arr.pop();
                    break;
                }
                default: {
                    arr.push(Number(op));
                }
            }
        }
        return arr.reduce((acc, val) => {
            return acc + val;
        },0);
    }
}
