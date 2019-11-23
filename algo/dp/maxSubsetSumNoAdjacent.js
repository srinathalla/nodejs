/**
 * Bottom up approach.
 * 
 * T.C : O(n) as we iterate through array once
 * S.C : O(1) constant space
 * 
 * 
 */
function maxSubsetSumNoAdjacent(array) {

    if (array.length == 0) {
        return 0;
    }

    if (array.length == 1) {
        return array[0];
    }

    let first = array[0],
        second = Math.max(array[0], array[1]);

    for (let i = 2; i < array.length; i++) {
        let current = Math.max(first + array[i], second);
        first = second;
        second = current;

    }
    return second;
}

/**
 * Top down approach.
 * 
 * T.C : O(n) as each element is computed once.
 * S.C : O(n) as we use an array to cache the result.
 * 
 * 
 */
function maxSubsetSumNoAdjacentRecursive(array) {

    if (array.length == 0) {
        return 0;
    }

    if (array.length == 1) {
        return array[0];
    }

    let maxSum = [];
    for (i = 2; i < array.length; i++) {
        maxSum[i] = Number.MIN_SAFE_INTEGER;
    }
    maxSum[0] = array[0];
    maxSum[1] = Math.max(array[0], array[1]);

    return recurse(array, array.length - 1, maxSum);
}

function recurse(array, i, maxSum) {

    console.log("i:" + i);
    if (i < 0) {
        return 0;
    }

    if (maxSum[i] == Number.MIN_SAFE_INTEGER) {
        maxSum[i] = Math.max(
            array[i] + recurse(array, i - 2, maxSum),
            recurse(array, i - 1, maxSum))
    }

    return maxSum[i];
}


console.log(maxSubsetSumNoAdjacent([7, 10, 12, 7, 9, 14]));

// console.log(maxSubsetSumNoAdjacentRecursive([1, 2, 3]));
console.log(maxSubsetSumNoAdjacentRecursive([7, 10, 12, 7, 9, 14]));

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;