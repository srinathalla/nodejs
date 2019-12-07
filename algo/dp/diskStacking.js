/**
 * T.C : O(n^2) + O(nlogn) => O(n^2)
 * S.C : O(n)
 * 
 * @param {} disks 
 */
function diskStacking(disks) {
    
    disks.sort((a,b) => a[2] - b[2]);

    let heights = [];
    let sequence = [];  
    for(disk of disks) 
    {
        heights.push(disk[2]);
        sequence.push(-1);
    }
    let i,j,maxIdx = 0
    for (i=1; i < disks.length; i++)
    {
        for(j=0; j < i; j++)
        {
            if (isValidStack(disks[j], disks[i]) && heights[i] <= heights[j] + disks[i][2])
            {
                heights[i] = heights[j] + disks[i][2];
                sequence[i] = j;
            }
        }
        if(heights[maxIdx] <= heights[i])
        {
            maxIdx = i;
        }
    }

    let result = [];
    i = maxIdx;
    while(i != -1)
    {
        result.unshift(disks[i]);
        i = sequence[i];
    }

    return result;
  }

  function isValidStack(disk1,disk2)
  {
      return disk1[0] < disk2[0] && disk1[1] < disk2[1] && disk1[2] < disk2[2]
  }


console.log(diskStacking([[2, 1, 2], [3, 2, 3], [
    2, 2, 8], [2, 3, 4], [2, 2, 1], [4, 4, 5]]))
  
  // Do not edit the line below.
  exports.diskStacking = diskStacking;
  