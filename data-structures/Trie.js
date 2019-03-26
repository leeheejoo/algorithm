/*
   Trie의 기본 기능을 구현하시오.
*/

const HashTable = require("./HashTable").HashTable;

class TrieNode {

    constructor(character, isCompleteWord = false) {
        this.character = character;
        this.isCompleteWord = isCompleteWord;
        this.children = new HashTable();
    }

    getChild(character) {
        return this.children.get(character);
    }

    addChild(character, isCompleteWord = false) {

        if (!this.children.has(character)) {
            this.children.set(character, new TrieNode(character, isCompleteWord));
        }

        const childNode = this.children.get(character);

        childNode.isCompleteWord = childNode.isCompleteWord || isCompleteWord;

        return childNode;
    }

    removeChild(character) {

        const childNode = this.getChild(character);

        if (childNode && !childNode.isCompleteWord && !childNode.hasChildren()) {
            this.children.delete(character);
        }

        return this;
    }

    hasChild(character) {
        return this.children.has(character);
    }

    hasChildren() {
        return this.children.getKeys().length !== 0;
    }

    suggestChildren() {
        return [...this.children.getKeys()];
    }

    toString() {
        let childrenAsString = this.suggestChildren().toString();
        childrenAsString = childrenAsString ? `:${childrenAsString}` : '';
        const isCompleteString = this.isCompleteWord ? '*' : '';

        return `${this.character}${isCompleteString}${childrenAsString}`;
    }
}


class Trie {

    constructor() {
        this.head = new TrieNode(HEAD_CHARACTER);
    }
  
    addWord(word) {

        const characters = Array.from(word);
        let currentNode = this.head;
    
        for (let charIndex = 0; charIndex < characters.length; charIndex++) {
            const isComplete = charIndex === characters.length - 1;
            currentNode = currentNode.addChild(characters[charIndex], isComplete);
        }
    
        return this;
    }
  
    deleteWord(word) {

        const depthFirstDelete = (currentNode, charIndex = 0) => {

            if (charIndex >= word.length) {
                return;
            }
    
            const character = word[charIndex];
            const nextNode = currentNode.getChild(character);
    
            if (nextNode == null) {
                return;
            }
    
            depthFirstDelete(nextNode, charIndex + 1);
    
            if (charIndex === (word.length - 1)) {
                nextNode.isCompleteWord = false;
            }
    
            currentNode.removeChild(character);
        };
    
        depthFirstDelete(this.head);
    
        return this;
    }
  
    suggestNextCharacters(word) {
        const lastCharacter = this.getLastCharacterNode(word);
    
        if (!lastCharacter) {
            return null;
        }
    
        return lastCharacter.suggestChildren();
    }
  
    doesWordExist(word) {
      const lastCharacter = this.getLastCharacterNode(word);
      return !!lastCharacter && lastCharacter.isCompleteWord;
    }
  
    getLastCharacterNode(word) {
        const characters = Array.from(word);
        let currentNode = this.head;
    
        for (let charIndex = 0; charIndex < characters.length; charIndex++) {
            if (!currentNode.hasChild(characters[charIndex])) {
                return null;
            }
    
            currentNode = currentNode.getChild(characters[charIndex]);
        }
    
        return currentNode;
    }
}
  

module.exports = {
    Trie,
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