class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const data = points.map(([x, y]) => {
            return {
                point: [x,y],
                distance: x**2 + y**2
            }
        });
        data.sort((v1, v2) => {
            return v1.distance - v2.distance;
        });
        return data.slice(0, k).map(item => item.point);
    }
}
