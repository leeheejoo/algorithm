
const Comparator = require("../utils/Comparator").Comparator;

function linearSearch(array, seekElement, comparatorCallback) {

    const comparator = new Comparator(comparatorCallback);
    const foundIndices = [];
  
    array.forEach((element, index) => {
        if (comparator.equal(element, seekElement)) {
            foundIndices.push(index);
        }
    });
  
    return foundIndices;
}

module.exports = {
    linearSearch,
} 

/*
function test() {
    let ret = linearSearch([1,3,5,6,23,2,61,6,3,1,6,8,9,43,3], 3);
    console.log(ret.toString());
}

test();
*/
