/*
    이중 링크드 리스트를 구현하고 기본 입력 및 삭제, reverse 기능을 추가하시오.
*/

class DoublyLinkedListNode {

    constructor(value, next = null, previous = null) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }

    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}

class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }
  
    prepend(value) {

        const newNode = new DoublyLinkedListNode(value, this.head);
    
        if (this.head) {
            this.head.previous = newNode;
        }

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }
  
    append(value) {

        const newNode = new DoublyLinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        this.tail.next = newNode;

        newNode.previous = this.tail;

        this.tail = newNode;

        return this;
    }
  
    delete(value) {

        if (!this.head) {
            return null;
        }

        let deletedNode = null;
        let currentNode = this.head;

        while (currentNode) {

            if (currentNode.value === value) {

                deletedNode = currentNode;

                if (deletedNode === this.head) {

                    this.head = deletedNode.next;

                    if (this.head) {
                        this.head.previous = null;
                    }

                    if (deletedNode === this.tail) {
                        this.tail = null;
                    }

                } else if (deletedNode === this.tail) {
  
                    this.tail = deletedNode.previous;
                    this.tail.next = null;

                } else {

                    const previousNode = deletedNode.previous;
                    const nextNode = deletedNode.next;

                    previousNode.next = nextNode;
                    nextNode.previous = previousNode;
                }
            }

            currentNode = currentNode.next;
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

            if (value !== undefined && (currentNode.value === value)) {
                return currentNode;
            }
    
            currentNode = currentNode.next;
        }
    
        return null;
    }
  

    deleteTail() {

        if (!this.tail) {
            return null;
        }

        if (this.head === this.tail) {

            const deletedTail = this.tail;
            this.head = null;
            this.tail = null;

            return deletedTail;
        }

        const deletedTail = this.tail;

        this.tail = this.tail.previous;
        this.tail.next = null;

        return deletedTail;
    }
  

    deleteHead() {

        if (!this.head) {
            return null;
        }

        const deletedHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
            this.head.previous = null;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
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
  
    fromArray(values) {
      values.forEach(value => this.append(value));
      return this;
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
            prevNode = currNode.previous;

            currNode.next = prevNode;
            currNode.previous = nextNode;

            prevNode = currNode;
            currNode = nextNode;
        }

        this.tail = this.head;
        this.head = prevNode;

        return this;
    }
}

module.exports = new DoublyLinkedList(); 

/*

function main() {

    let list = new DoublyLinkedList();
		
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

    // let node = list.find(5);
    // if(node)
    //     console.log(node.toString());
    // else    
    //     console.log("No node found.");

    // list.reverse();
    // list.toString(console.log);
}

main();

*/