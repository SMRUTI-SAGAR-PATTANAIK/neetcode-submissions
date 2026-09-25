class MyStack {
    constructor() {
        this.queues = {
            q1: [],
            q2: []
        }
        this.toUse = 'q1';
        this.other = 'q2';
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queues[this.toUse].push(x);
    }

    swapQueues() {
        let temp = this.toUse;
        this.toUse = this.other;
        this.other = temp;
    }

    /**
     * @return {number}
     */
    pop() {
        if(this.empty()) return;
        let usedQueue = this.queues[this.toUse];
        let otherQueue = this.queues[this.other];
        while(usedQueue.length > 1) {
            otherQueue.push(usedQueue.shift());
        }
        this.swapQueues();
        return usedQueue.shift();
    }

    /**
     * @return {number}
     */
    top() {
        if(this.empty()) return;
        const topElement = this.pop();
        this.queues[this.toUse].push(topElement);
        return topElement;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queues[this.toUse].length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
