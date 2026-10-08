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
     * @return {boolean}
     */
    findHeight(root) {
        if(!root) return 0;
        return 1 + Math.max(this.findHeight(root.left), this.findHeight(root.right));
    }

    isBalanced(root) {
        if(!root) return true;
        
        if(Math.abs(this.findHeight(root.left) - this.findHeight(root.right)) > 1) return false;

        if(!this.isBalanced(root.left)) return false;

        if(!this.isBalanced(root.right)) return false;

        return true;
    }
}
