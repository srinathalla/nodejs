/**
 * 
 * T.C : O(n)
 * 
 */

function minNumberOfJumps(array) {
    if (array.length < 2) {
        return 0;
    }

    let jumps = 0;
    let maxDistance = array[0];
    let steps = array[0];

    for (let i = 1; i < array.length - 1; i++) {
        maxDistance = Math.max(maxDistance, i + array[i])
        steps--;
        if (steps == 0) {
            jumps++;
            steps = maxDistance - i;
        }
    }
    return jumps + 1;
}

console.log(minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]));

console.log(minNumberOfJumps([1, 1]));

// Do not edit the line below.
exports.minNumberOfJumps = minNumberOfJumps;