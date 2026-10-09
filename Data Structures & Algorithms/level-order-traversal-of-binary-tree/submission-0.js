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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];
        let queue = [root];
        let result = [];
        while(queue.length) {
            let levelLen = queue.length;
            let level = [];
            for(let i=0; i<levelLen; i++) {
                let node = queue.shift();
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
                level.push(node.val);
            }
            result.push(level);
        }
        return result;
    }
}
