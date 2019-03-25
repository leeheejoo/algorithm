/*
    우선 순위 큐를 구현하시오.
*/
const MinHeap = require("./Heap").MinHeap;
const Comparator = require("../utils/Comparator").Comparator;

class PriorityQueue extends MinHeap {

    constructor() {
        super();
        this.priorities = new Map();
        this.compare = new Comparator(this.comparePriority.bind(this));
    }
  
    add(item, priority = 0) {
        this.priorities.set(item, priority);
        super.add(item);
        return this;
    }
  
    remove(item, customFindingComparator) {
        super.remove(item, customFindingComparator);
        this.priorities.delete(item);
        return this;
    }

    changePriority(item, priority) {
        this.remove(item, new Comparator(this.compareValue));
        this.add(item, priority);
        return this;
    }

    findByValue(item) {
       return this.find(item, new Comparator(this.compareValue));
    }
  
    hasValue(item) {
        return this.findByValue(item).length > 0;
    }
  
    comparePriority(a, b) {

        if (this.priorities.get(a) === this.priorities.get(b)) {
            return 0;
        }

        return this.priorities.get(a) < this.priorities.get(b) ? -1 : 1;
    }

    compareValue(a, b) {
        if (a === b) {
            return 0;
        }
        return a < b ? -1 : 1;
    }
}

module.exports = {
    PriorityQueue
}

/*
function test() {

    let pq = new PriorityQueue();
		
    pq.add(6,6);
    pq.add(3,3);
    pq.add(5,5);
    pq.add(2,2);
    pq.add(11,11);
    pq.add(5,5);
    pq.add(7,7);

    // pq.add(6,11);
    // pq.add(3,2);
    // pq.add(5,3);
    // pq.add(2,4);
    // pq.add(11,5);
    // pq.add(5,3);
    // pq.add(7,7);

    for(let i=0; i <7; i++)
        console.log(pq.poll());    

}

test();
*/