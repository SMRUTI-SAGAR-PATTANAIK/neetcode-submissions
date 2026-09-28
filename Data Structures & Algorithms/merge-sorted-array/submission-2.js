class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        const total = m + n;
        function _shift(i) {
            for(let j=total-1; j>i; j--) {
                nums1[j] = nums1[j-1];
            }
        }
        let i = 0, j = 0;
        while(i < m && j < n) {
            if(nums1[i] <= nums2[j]) {
                i++;
            } else {
                _shift(i);
                nums1[i] = nums2[j];
                m++;
                i++;
                j++;
            }
        }

        while(j < n) {
            nums1[i] = nums2[j];
            i++;
            j++;
        }
    }
}
