function threeNumberSum(array, targetSum) {
    let i,j,result = [];

    array.sort((a,b) => a-b);

    for (i = 0; i < array.length; i++) {
        let newTargetSum = targetSum - array[i];
        let itemsSet = new Set();
        for (j = i+1; j < array.length; j++) {
            if (itemsSet.has(newTargetSum - array[j])) {
                result.push([array[i], newTargetSum - array[j], array[j]]);
            }
            itemsSet.add(array[j]);
        }
    }

    result.sort((a,b) => a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);
    return result;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6],0));

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;