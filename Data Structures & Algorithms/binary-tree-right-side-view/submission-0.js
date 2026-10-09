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
    rightSideView(root) {
        if(!root) return [];
        let queue = [root];
        let result = [];
        while(queue.length) {
            let levelLen = queue.length;
            result.push(queue[levelLen-1].val);
            for(let i=0; i<levelLen; i++) {
                let node = queue.shift();
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }   
        }
        return result;
    }
}
