
/**
 * T.C : O(2n) => O(n)
 * Two pass solution.
 * 
 * @param {} array 
 */
function largestRange(array) {

    let itemsSet = new Set();

    for (let item of array) {
        itemsSet.add(item);
    }
    let start = -1;
    let maxRange = 0;
    for (let x of array) {
        let count = 0;
        if (!itemsSet.has(x-1)) {
            let y = x;
            while (itemsSet.has(y)) {
                count++;
                y++;
            }
            if (maxRange < count) {
                maxRange = count;
                start = x;
            }
        }
    }
    return [start, start + maxRange - 1];
}

console.log(largestRange([1]));
console.log(largestRange([4, 2, 1, 3, 6]));



// Do not edit the line below.
exports.largestRange = largestRange;