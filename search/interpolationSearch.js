const Comparator = require("../utils/Comparator").Comparator;
const QuickSort = require("../sort/QuickSort").QuickSort;

function interpolationSearch(sortedArray, seekElement) {
    let leftIndex = 0;
    let rightIndex = sortedArray.length - 1;
  
    while (leftIndex <= rightIndex) {
        const rangeDelta = sortedArray[rightIndex] - sortedArray[leftIndex];
        const indexDelta = rightIndex - leftIndex;
        const valueDelta = seekElement - sortedArray[leftIndex];
    
        // If valueDelta is less then zero it means that there is no seek element
        // exists in array since the lowest element from the range is already higher
        // then seek element.
        if (valueDelta < 0) {
            return -1;
        }
    
        // If range delta is zero then subarray contains all the same numbers
        // and thus there is nothing to search for unless this range is all
        // consists of seek number.
        if (!rangeDelta) {
            // By doing this we're also avoiding division by zero while
            // calculating the middleIndex later.
            return sortedArray[leftIndex] === seekElement ? leftIndex : -1;
        }
    
        // Do interpolation of the middle index.
        const middleIndex = leftIndex + Math.floor(valueDelta * indexDelta / rangeDelta);
    
        // If we've found the element just return its position.
        if (sortedArray[middleIndex] === seekElement) {
            return middleIndex;
        }
    
        // Decide which half to choose for seeking next: left or right one.
        if (sortedArray[middleIndex] < seekElement) {
            // Go to the right half of the array.
            leftIndex = middleIndex + 1;
        } else {
            // Go to the left half of the array.
            rightIndex = middleIndex - 1;
        }
    }
  
    return -1;
}

module.exports = {
    interpolationSearch,
} 

/*
function test() {
    let sort = new QuickSort();
    let sortedArray = sort.sort([1,3,5,6,23,2,61,6,3,1,6,8,9,43,3]);
    console.log(`sorted array is ${sortedArray.toString()}`);
    let ret = interpolationSearch(sortedArray, 6);
    console.log(ret.toString());
}

test();
*/