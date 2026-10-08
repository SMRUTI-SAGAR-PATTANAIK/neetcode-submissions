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
     * @param {number} k
     * @return {number}
     */
kthSmallest(root, k) {
    function inorder(node) {
        if (!node || k <= 0) return null;
        const left = inorder(node.left);
        if (left !== null) return left;
        k--;
        if (k === 0) return node.val;
        return inorder(node.right);
    }
    return inorder(root);
}
}
