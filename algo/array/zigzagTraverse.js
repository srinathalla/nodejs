/**
 * T.C : O(m*n)
 * S.C : O(m*n) for the result array
 * @param {*} array 
 */
function zigzagTraverse(array) {
    let movingDown = true;
    let i = 0,
        j = 0;

    let result = [];
    while (i >= 0 && i < array.length && j >= 0 && j < array[0].length) {
        result.push(array[i][j]);
        if (movingDown) {
            if (j == 0 || i == array.length - 1) {
                movingDown = false;
                if (i == array.length - 1) {
                    j++;
                } else {
                    i++;
                }
            } else {
                i++;
                j--;
            }
        } else {
            if (i == 0 || j == array[0].length - 1) {
                movingDown = true;
                if (j == array[0].length - 1) {
                    i++;
                } else {
                    j++;
                }
            } else {
                i--;
                j++;
            }
        }
    }
    return result;
}

console.log(zigzagTraverse([
    [1, 3],
    [2, 4],
    [5, 7],
    [6, 8],
    [9, 10]
]));


// Do not edit the line below.
exports.zigzagTraverse = zigzagTraverse;