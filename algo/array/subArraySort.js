/**
 * T.C : O(2n) => O(n), S.C : O(1)
 * @param {*} array 
 */
function subarraySort(array) {
    
    let minOutOfOrder = Number.MAX_SAFE_INTEGER;
    let maxOutOfOrder = Number.MIN_SAFE_INTEGER;

    for(let i=0; i < array.length; i++)
    {
        if(isOutOfOrder(i, array[i], array))
        {
            minOutOfOrder = Math.min(minOutOfOrder, array[i]);
            maxOutOfOrder = Math.max(maxOutOfOrder, array[i]);
        }
    }

    if (minOutOfOrder === Number.MAX_SAFE_INTEGER)
    {
        return [-1,-1];
    }

    left = 0;
    while(minOutOfOrder >= array[left])
    {
        left++;
    }

    right = array.length - 1;
    while(maxOutOfOrder <= array[right])
    {
        right--;
    }
    return [left, right]; 

}

function isOutOfOrder(i,num, array)
{
    if (i == 0)
    {
        return num > array[i+1];
    }

    if (i == array.length-1)
    {
        return num < array[i-1];
    }

    return num < array[i-1] || num > array[i+1];
}

console.log(subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]));

// Do not edit the line below.
exports.subarraySort = subarraySort;