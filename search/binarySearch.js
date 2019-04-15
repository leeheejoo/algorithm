const Comparator = require("../utils/Comparator").Comparator;
const QuickSort = require("../sort/QuickSort").QuickSort;

function binarySearch(sortedArray, seekElement, comparatorCallback) {
    // Let's create comparator from the comparatorCallback function.
    // Comparator object will give us common comparison methods like equal() and lessThen().
    const comparator = new Comparator(comparatorCallback);
  
    // These two indices will contain current array (sub-array) boundaries.
    let startIndex = 0;
    let endIndex = sortedArray.length - 1;
  
    // Let's continue to split array until boundaries are collapsed
    // and there is nothing to split anymore.
    while (startIndex <= endIndex) {
        // Let's calculate the index of the middle element.
        const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    
        // If we've found the element just return its position.
        if (comparator.equal(sortedArray[middleIndex], seekElement)) {
            return middleIndex;
        }
    
        // Decide which half to choose for seeking next: left or right one.
        if (comparator.lessThan(sortedArray[middleIndex], seekElement)) {
            // Go to the right half of the array.
            startIndex = middleIndex + 1;
        } else {
            // Go to the left half of the array.
            endIndex = middleIndex - 1;
        }
    }
  
    // Return -1 if we have not found anything.
    return -1;
}

module.exports = {
    binarySearch,
} 

/*
function test() {
    let sort = new QuickSort();
    let sortedArray = sort.sort([1,3,5,6,23,2,61,6,3,1,6,8,9,43,3]);
    console.log(`sorted array is ${sortedArray.toString()}`);
    let ret = binarySearch(sortedArray, 6);
    console.log(ret.toString());
}

test();
*/