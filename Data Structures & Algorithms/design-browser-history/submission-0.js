class ListNode {
    constructor(url) {
        this.url = url;
        this.next = null;
        this.prev = null;
    }
}

class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.pointer = new ListNode(homepage);
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        let newNode = new ListNode(url);
        this.pointer.next = newNode;
        newNode.prev = this.pointer;
        this.pointer = newNode;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        while(this.pointer.prev !== null && steps) {
            this.pointer = this.pointer.prev;
            steps--;
        }
        return this.pointer.url;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        let i = 0;
        while(this.pointer.next !== null && i < steps) {
            this.pointer = this.pointer.next;
            i++;
        }
        return this.pointer.url;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
