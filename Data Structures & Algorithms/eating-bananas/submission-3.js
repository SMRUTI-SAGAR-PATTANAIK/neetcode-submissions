class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        function costFunction(rate) {
            const totalTime = piles.reduce((acc, val) => {
                acc += Math.ceil(val / rate);
                return acc;
            }, 0);
            if(totalTime > h) {
                return -1;
            } else {
                return 1;
            }
        }

        let lowestRate = 1, highestRate = Math.max(...piles), minimum = Number.POSITIVE_INFINITY;
        while(lowestRate <= highestRate) {
            const midRate = Math.floor((lowestRate + highestRate) / 2);
            let cost = costFunction(midRate);
            if(cost === -1) {
                lowestRate = midRate+1;
            } else if(cost === 1) {
                if(midRate < minimum) minimum = midRate;
                highestRate = midRate-1;
            }
        }
        return minimum;
    }
}