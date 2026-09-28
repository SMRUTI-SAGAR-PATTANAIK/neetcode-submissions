/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    
    mergeKLists(lists) {
        function _mergeTwoLists(head1, head2) {
            if(!head1) {
                return head2;
            }
            if(!head2) {
                return head1;
            }
            let newHead = head1.val <= head2.val ? head1 : head2;
            if(newHead === head1) {
                head1 = head1.next;
            } else {
                head2 = head2.next;
            }
            let temp = newHead;
            while(head1 && head2) {
                if(head1.val <= head2.val) {
                    temp.next = head1;
                    head1 = head1.next;
                    temp = temp.next;
                } else {
                    temp.next = head2;
                    head2 = head2.next;
                    temp = temp.next;
                }
            }

            if(head1) {
                temp.next = head1;
            }

            if(head2) {
                temp.next = head2;
            }

            return newHead;
        }

        if (lists.length === 0) return null;

        while (lists.length > 1) {
            let mergedLists = [];
            for (let i = 0; i < lists.length; i += 2) {
                let l1 = lists[i];
                let l2 = i + 1 < lists.length ? lists[i + 1] : null;
                mergedLists.push(_mergeTwoLists(l1, l2));
            }
            lists = mergedLists;
        }

        return lists[0];
    }
}
