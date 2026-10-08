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
    check(root) {
        if(!root) {
            return {
                balanced: true,
                height: 0
            }
        }
        const left = this.check(root.left);
        const right = this.check(root.right);
        const balanced = left.balanced && right.balanced && Math.abs(left.height - right.height) <= 1;
        const height = 1 + Math.max(left.height, right.height);
        return {
            height,
            balanced
        };
    }

    isBalanced(root) {
        return this.check(root).balanced;
    }
}
