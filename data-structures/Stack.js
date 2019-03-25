/*
    스택를 구현하고 push 및 pop 기능을 추가하시오.
*/

const LinkedList = require("./LinkedList").LinkedList;

class Stack {

    constructor() {
        this.linkedList = new LinkedList();
    }

    isEmpty() {
        return !this.linkedList.head;
    }

    peek() {

        if (this.isEmpty()) {
            return null;
        }

        return this.linkedList.head.value;
    }

    push(value) {
        this.linkedList.prepend(value);
    }

    pop() {
        const removedHead = this.linkedList.deleteHead();
        return removedHead ? removedHead.value : null;
    }

    toArray() {
        return this.linkedList.toArray().map(linkedListNode => linkedListNode.value);
    }

    toString(callback) {
        return this.linkedList.toString(callback);
    }
}

module.exports = {
    Stack,
} 

/*
function test() {

    let stack = new Stack();
		
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);
    stack.push(7);
    stack.toString(console.log);

    //let poped = stack.pop();
    //console.log(poped);

    //let peeked = stack.peek();
    //console.log(peeked);

    //stack.toString(console.log);
}

test();
*/