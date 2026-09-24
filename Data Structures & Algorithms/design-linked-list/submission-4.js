class ListNode {
    constructor(value) {
        this.val = value;
        this.next = null;
    }   
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        if(index < 0 || index > this.length || index === 0) return null;
        let temp = this.head;
        let i = 0;
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
        if(index === 0) {
            return this.head;
        }
        let i = 0;
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
        let newNode = new ListNode(val);
        if(this.length === 0) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        let newNode = new ListNode(val);
        if(this.length === 0) {
            this.head = newNode;
        } else {
            let temp = this.head;
            while(temp.next !== null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
        this.length++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if(index < 0 || index > this.length) return;
        let newNode = new ListNode(val);
        if(index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else if(index === this.length) {
            let prevNode = this.getPrev(index);
            prevNode.next = newNode;
        } else {
            let prevNode = this.getPrev(index);
            newNode.next = prevNode.next;
            prevNode.next = newNode;
        }
        this.length++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if(index < 0 || index >= this.length) return;
        if(index === 0) {
            this.head = this.head.next;
        } else {
            let prevNode = this.getPrev(index);
            prevNode.next = prevNode.next.next;
        }
        this.length--;
    }
}
