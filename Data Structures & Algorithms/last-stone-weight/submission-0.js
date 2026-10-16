class Heap {
    constructor(elements) {
        this.elements = [...elements];
    }

    heapify() {
        let index = Math.floor(this.elements.length / 2) - 1;
        for(; index >= 0; index--) {
            this.shiftDown(index);
        }
    }

    shiftDown(index) {
        while(true) {
            let cL = this.elements[2*index + 1];
            if(cL === undefined) break;
            let cR = this.elements[2*index + 2] === undefined ? Number.NEGATIVE_INFINITY : this.elements[2*index + 2];
            let maxIndex = Math.max(cL, cR) === cL ? 2*index + 1 : 2*index + 2;
            if(this.elements[index] < this.elements[maxIndex]) {
                let temp = this.elements[index];
                this.elements[index] = this.elements[maxIndex];
                this.elements[maxIndex] = temp;
                index = maxIndex;
            } else {
                break;
            }
        } 
    }


    popMaxElement() {
        if(!this.elements.length) return null;
        if(this.elements.length === 1) return this.elements.pop();
        let maxToReturn = this.elements[0];
        this.elements[0] = this.elements.pop();
        this.shiftDown(0);
        return maxToReturn;
    }

    getSize() {
        return this.elements.length;
    }

    shiftUp(index) {
        while(true) {
            let pIndex = Math.floor((index - 1) / 2);
            if(pIndex === 0) break;
            if(this.elements[index] > this.elements[pIndex]) {
                let temp = this.elements[pIndex];
                this.elements[pIndex] = this.elements[index];
                this.elements[index] = temp;
                index = pIndex;
            } else {
                break;
            }
            
        }
    }

    addElement(val) {
        this.elements.push(val);
        this.shiftUp(this.elements.length-1);
    }

}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */

    lastStoneWeight(stones) {
        let h = new Heap(stones);
        h.heapify();
        while(h.getSize() > 1) {
            let ele = Math.abs(h.popMaxElement() - h.popMaxElement());
            if(ele > 0) {
                h.addElement(ele);
            }
        }
        return Number(h.popMaxElement());
    }
}
