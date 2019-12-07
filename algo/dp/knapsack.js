/**
 * 
 * T.C : O(nc) where n is the no of items and c is the capacity
 * S.C : O(nc) where n is the no of items and c is the capacity
 * 
 */
function knapsackProblem(items, capacity) {
    
    let table = [];
    for (let i=0;i <= items.length; i++)
    {
        let row = [];
        for (let j=0;j <= capacity; j++)
        {
            row.push(0);
        }
        table.push(row);
    }

    for (let i=1;i <= items.length; i++)
    {
        for (let j=1;j <= capacity; j++)
        { 
            if(j >= items[i-1][1])
            {
                table[i][j] = Math.max(table[i-1][j], table[i-1][j - items[i-1][1]] + items[i-1][0]);
            }
            else{
                table[i][j] = table[i-1][j];
            }
        }
    }

    let result = [];
    i = items.length;
    j = capacity;
    while(i > 0 && j > 0)
    {
        if(table[i][j] == table[i-1][j])
        {
            i--;
        }
        else{
            result.unshift(i-1);
            j -= items[i-1][1] 
            i--;
        }
    }

    return [table[items.length][capacity], result];
  }

  console.log(...knapsackProblem([[1, 2], [4, 3], [5, 6], [6, 7]], 10));
  
  // Do not edit the line below.
  exports.knapsackProblem = knapsackProblem;
  