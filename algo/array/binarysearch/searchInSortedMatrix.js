/**
 * T.C : O(m + n)
 * S.C : O(1)
 * 
 * @param {*} matrix 
 * @param {*} target 
 */

function searchInSortedMatrix(matrix, target) {
    let r = 0, c = matrix[0].length -1;

    while (r < matrix.length && c >= 0)
    {
        if(target > matrix[r][c])
        {
            r++;
        }
        else if(target < matrix[r][c])
        {
            c--;
        }
        else {
            return [r,c];
        }
    }
    return [-1,-1];
  }

let matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004],
]
console.log(searchInSortedMatrix(matrix, 43));
console.log(searchInSortedMatrix(matrix, 103));
  
  // Do not edit the line below.
  exports.searchInSortedMatrix = searchInSortedMatrix;
  