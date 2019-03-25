/*
    링크드 리스트를 구현하고 기본 입력 및 삭제, reverse 기능을 추가하시오.
*/

class LinkedListNode {

    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}


class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(value) {

        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    append(value) {

        const newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    delete(value) {

        if (!this.head) {
            return null;
        }

        let deletedNode = null;

        while (this.head && (this.head.value == value)) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if (currentNode !== null) {

            while (currentNode.next) {
                if (currentNode.next.value == value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if (this.tail.value == value) {
            this.tail = currentNode;
        }

        return deletedNode;
    }

    find(value = undefined, callback = undefined) {

        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode) {

            if (callback && callback(currentNode.value)) {
                return currentNode;
            }

            if (value !== undefined && (currentNode.value == value)) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    deleteTail() {
        const deletedTail = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return deletedTail;
        }

        let currentNode = this.head;

        while (currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }

        this.tail = currentNode;

        return deletedTail;
    }

    deleteHead() {

        if (!this.head) {
            return null;
        }

        const deletedHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
    }

    fromArray(values) {
        values.forEach(value => this.append(value));
        return this;
    }

    toArray() {
        const nodes = [];

        let currentNode = this.head;

        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    toString(callback) {
        return this.toArray().map(node => node.toString(callback)).toString();
    }

    reverse() {
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while (currNode) {
            nextNode = currNode.next;
            currNode.next = prevNode;

            prevNode = currNode;
            currNode = nextNode;
        }

        this.tail = this.head;
        this.head = prevNode;

        return this;
    }
}

function main() {

    let list = new LinkedList();
		
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.prepend(5);
    list.prepend(6);
    list.prepend(7);
    list.toString(console.log);

    //list.delete(1);
    //list.toString(console.log);

    //list.deleteHead();
    //list.toString(console.log);

    //list.deleteTail();
    //list.toString(console.log);

    // let node = list.find(55);
    // if(node)
    //     console.log(node.toString());
    // else    
    //     console.log("No node found.");

    // list.reverse();
    // list.toString(console.log);
}

main();