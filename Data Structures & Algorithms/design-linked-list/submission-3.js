class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    decrementLength() {
        this.length--;
    }

    incrementLength() {
        this.length++;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        if(index < 0 || index >= this.length || index === 0) return null;
        let i=0;
        let temp = this.head;
        while(i < index-1) {
            temp = temp.next;
            i++;
        }
        return temp;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if(index < 0 || index >= this.length) return -1;
        let i=0;
        let temp = this.head;
        while(i < index) {
            temp = temp.next;
            i++;
        }
        return temp.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        let temp = new ListNode(val);
        if(this.length === 0) {
            this.head = temp;
            this.tail = temp;
        } else {
            temp.next = this.head;
            this.head.prev = temp;
            this.head = temp;
        }
        this.incrementLength();
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        let temp = new ListNode(val);
        if(this.length === 0) {
            this.head = temp;
            this.tail = temp;
        } else {
            this.tail.next = temp;
            temp.prev = this.tail;
            this.tail = temp;
        }
        this.incrementLength();
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if(index < 0 || index > this.length) {
            return;
        } 
        if(index === this.length) {
            this.addAtTail(val);
            return;
        }
        if(index === 0) {
            this.addAtHead(val);
            return;
        }
        let prevListNode = this.getPrev(index);
        let temp = new ListNode(val);
        let next = prevListNode.next;
        prevListNode.next = temp;
        temp.prev = prevListNode;
        temp.next = next;
        temp.next.prev = temp;
        this.incrementLength();
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if(index < 0 || index >= this.length) return;
        if(index === 0) {
            this.head = this.head.next;
            if(this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
            this.decrementLength();
            return;
        }
        let prevListNode = this.getPrev(index);
        let toDelete = prevListNode.next;
        prevListNode.next = toDelete.next;
        if (toDelete.next) {
            toDelete.next.prev = prevListNode;
        } else {
            this.tail = prevListNode;
        }
        this.decrementLength();
    }
}
