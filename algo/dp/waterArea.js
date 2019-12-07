/**
 * T.C : O(2n) => O(n)
 * S.C : O(n).
 * 
 * @param {*} heights 
 */
function waterArea(heights) {

    let left = [];
    let right = [];

    let i, max = 0;
    for (i = 0; i < heights.length; i++) {
        max = Math.max(max, heights[i]);
        left[i] = max;
    }

    max = 0;
    let sum = 0;
    for (i = heights.length - 1; i >= 0; i--) {
        max = Math.max(max, heights[i]);
        sum += Math.min(left[i], max) - heights[i];
    }

    return sum;
}

console.log(waterArea([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]));
// Do not edit the line below.
exports.waterArea = waterArea;