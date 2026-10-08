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
    inorder(root) {
    const result = [];
    const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        result.push(node);
        traverse(node.right);
    };
    traverse(root);
    return result;
}
    kthSmallest(root, k) {
        if(!root) return null;
        let list = this.inorder(root);
        if(k > list.length) return null;
        return list[k-1].val;
    }
}
