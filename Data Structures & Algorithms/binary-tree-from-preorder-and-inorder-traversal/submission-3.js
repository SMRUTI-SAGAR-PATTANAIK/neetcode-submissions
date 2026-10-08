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
    const helper = (preStart, preEnd, inStart, inEnd) => {
        if (preStart > preEnd || inStart > inEnd) {
            return null;
        }
        const rootVal = preorder[preStart];
        const root = new TreeNode(rootVal);

        let mid = inStart;
        while (inorder[mid] !== rootVal) {
            mid++;
        }
        const leftSize = mid - inStart;

        root.left  = helper(preStart + 1, preStart + leftSize, inStart, mid - 1);
        root.right = helper(preStart + leftSize + 1, preEnd, mid + 1, inEnd);
        return root;
    };
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
}
}