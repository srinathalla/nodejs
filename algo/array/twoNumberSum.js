/**
 * 
 * T.C:O(n) 
 * Single pass solution.
 * 
 * @param {*} array 
 * @param {*} targetSum 
 */
function twoNumberSum(array, targetSum) {
    let itemsSet = new Set();

    for (let no of array) {
        if (itemsSet.has(targetSum - no)) {
            return no < targetSum - no ? [no, targetSum - no] : [targetSum - no, no];
        }
        itemsSet.add(no);
    }

    return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;