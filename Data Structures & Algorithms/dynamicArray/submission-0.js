class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.arr = new Array(capacity);
        this.index = -1;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.getSize() === this.capacity) {
            this.resize();
        }
        this.index++;
        this.set(this.index, n);
    }

    /**
     * @returns {number}
     */
    popback() {
        let val = this.arr[this.index];
        this.index--;
        return val;
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity *= 2;
        let newArray = new Array(this.capacity);
        for(let i=0; i<this.arr.length; i++) {
            newArray[i] = this.arr[i];
        }
        this.arr = newArray;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.index+1;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
