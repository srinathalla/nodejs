/**
 * T.C : O(n)
 * S.C : O(1)
 * 
 * @param {} array 
 */
function kadanesAlgorithm(array) {

    let globalSum = array[0];
    sum = 0;

    for (no of array) {
        sum = Math.max(no, no + sum);
        globalSum = Math.max(globalSum, sum);
    }

    return globalSum;
}


console.log(kadanesAlgorithm([1, 2, 3, 4, 5, 6, -20, 7, 8, 9, 10]));

// Do not edit the line below.
exports.kadanesAlgorithm = kadanesAlgorithm;