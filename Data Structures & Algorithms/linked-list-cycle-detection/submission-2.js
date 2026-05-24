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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if(head === null) {
            return false
        }

        const set = new Set()
        while(head.next) {
            set.add(head)
            if(set.has(head.next)) {
                return true
            }
            head = head.next
        }

        return false
    }
}
