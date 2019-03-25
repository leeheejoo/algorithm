/*
    큐를 구현하고 enqueue 및 dequeue 기능을 추가하시오.
*/

const LinkedList = require("./LinkedList").LinkedList;

class Queue {

    constructor() {
        this.linkedList = new LinkedList();
    }

    isEmpty() {
        return !this.linkedList.head;
    }

    peek() {
        if (!this.linkedList.head) {
            return null;
        }

        return this.linkedList.head.value;
    }

    enqueue(value) {
        this.linkedList.append(value);
    }

    dequeue() {
        const removedHead = this.linkedList.deleteHead();
        return removedHead ? removedHead.value : null;
    }

    toString(callback) {
        return this.linkedList.toString(callback);
    }
}

module.exports = {
    Queue,
} 

/*
function test() {

    let queue = new Queue();
		
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    queue.enqueue(7);
    //queue.toString(console.log);

    //let dequeued = queue.dequeue();
    //console.log(dequeued);

    //let peeked = queue.peek();
    //console.log(peeked);

    queue.toString(console.log);
}

test();
*/