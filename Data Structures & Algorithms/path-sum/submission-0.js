/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum, s=0) {
        if(!root) return false;

        s += root.val;

        if(s === targetSum && !root.left && !root.right) return true;

        if(this.hasPathSum(root.left, targetSum, s)) {
            return true;
        }

        if(this.hasPathSum(root.right, targetSum, s)) {
            return true;
        }
        
        return false;
    }
}