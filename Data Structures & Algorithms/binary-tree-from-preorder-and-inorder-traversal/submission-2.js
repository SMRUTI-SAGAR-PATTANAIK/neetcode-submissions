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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const helper = (preStart, inStart, inEnd) => {
            if (preStart >= preorder.length || inStart > inEnd) {
                return null;
            }
            const root = new TreeNode(preorder[preStart]);
            let mid = inStart;
            while (inorder[mid] !== preorder[preStart]) {
                mid++;
            }
            const leftSize = mid - inStart;
            root.left = helper(preStart + 1, inStart, mid - 1);
            root.right = helper(preStart + 1 + leftSize, mid + 1, inEnd);
            return root;
        };
        return helper(0, 0, inorder.length - 1);
    }
}