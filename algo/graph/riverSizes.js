/*
# T.C O(m*n) m no of rows,
#            n  no of columns
# S.C O(1)
# */

function riverSizes(matrix) {
    let result = [];
    let count = [0];
    for(let i=0; i < matrix.length;i++)
    {
        for(let j=0; j < matrix[0].length;j++)
        {
            if(matrix[i][j] == 1)
            {
                dfs(matrix,i,j,count);
                result.push(count[0]);
                count[0] = 0;
            }
        }
    }
    return result;
  }

  function dfs(matrix,r,c,count) {
    if (r >=0 && r < matrix.length && c >= 0 && c < matrix[0].length && matrix[r][c] == 1)
    {
        count[0]++;
        matrix[r][c] = 0;
        dfs(matrix, r, c + 1, count);
        dfs(matrix, r, c - 1, count);
        dfs(matrix, r + 1, c, count);
        dfs(matrix, r - 1, c, count);
    }
  }
  
let testInput = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
]

console.log(riverSizes(testInput));

  // Do not edit the line below.
exports.riverSizes = riverSizes;
  