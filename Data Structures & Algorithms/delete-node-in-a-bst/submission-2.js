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
     * @param {number} key
     * @return {TreeNode}
     */
    findMinimumOnRight(root) {
        if(!root.left) return root;
        return this.findMinimumOnRight(root.left);
    }

    deleteNode(root, key) {
        if(!root) {
            return root;
        }

        if(key > root.val) {
            root.right = this.deleteNode(root.right, key);
        } else if(key < root.val) {
            root.left = this.deleteNode(root.left, key);
        } else if(key === root.val) {
            if(!root.left) return root.right;
            if(!root.right) return root.left;
            let minNode = this.findMinimumOnRight(root.right);
            root.val = minNode.val;
            root.right = this.deleteNode(root.right, minNode.val);
        }
        return root;
    }
}
