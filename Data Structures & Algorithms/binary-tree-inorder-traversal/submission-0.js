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
     * @return {number[]}
     */
    inorderTraversal(root) {
        function _inorder(root, list=[]) {
            if(!root) return;
            _inorder(root.left, list);
            list.push(root.val);
            _inorder(root.right, list);
        }
        const output = [];
        _inorder(root, output);
        return output;
    }
}
