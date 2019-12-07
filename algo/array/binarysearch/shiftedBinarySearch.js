/**
 * T.C : O(logn) S.C : O(1)
 * @param {*} array 
 * @param {*} target 
 */
function shiftedBinarySearch(array, target) { 
    let l =0 ,r = array.length -1,m;
    while (l < r)
    {
        m = Math.floor((l+r)/2);
        if(array[m] == target)
        {
            return m;
        }
        else if(array[l] < array[m])
        {
            if(array[l] <= target && target < array[m])
            {
                r = m- 1;
            }
            else{
                l = m +1;
            }
        }
        else{
            if(array[m] < target && target <= array[r])
            {
                l = m +1;
            }
            else{
                r = m -1;
            }
        }
    }
    return array[l] == target ? l : -1;
  }


console.log(shiftedBinarySearch([5, 23, 111, 1], 111))
console.log(shiftedBinarySearch([45, 61, 71, 72, 73, 0, 1, 21, 33, 45], 33))
  
  // Do not edit the line below.
  exports.shiftedBinarySearch = shiftedBinarySearch;
  