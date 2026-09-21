class MinStack {
    arr = [];
    index = -1;
    minIndexArr = [];
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val);
        this.index++;
        if(this.minIndexArr.length) {
            let min = this.arr[this.minIndexArr[this.minIndexArr.length-1]];
            if(val < min) {
                this.minIndexArr.push(this.index);
            }
        } else {
            this.minIndexArr.push(this.index);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.arr.pop();
        if(this.index === this.minIndexArr[this.minIndexArr.length-1]) {
            this.minIndexArr.pop();
        }
        if(this.index > -1) this.index = this.index - 1;
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[this.index];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.arr[this.minIndexArr[this.minIndexArr.length-1]];
    }
}
