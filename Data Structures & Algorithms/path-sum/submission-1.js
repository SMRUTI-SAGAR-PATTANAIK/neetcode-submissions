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
    hasPathSum(root, targetSum) {
        function fun(root, targetSum, s=0) {
            if(!root) {
                return false;
            }

            s += root.val;

            if(!root.left && !root.right && s === targetSum) return true; 
            
            if(fun(root.left, targetSum, s)) return true;

            if(fun(root.right, targetSum, s)) return true;

            s -= root.val;
            return false;
        }
        return fun(root, targetSum);
    }
}
