/**
 * 
 * T.C : O(2nlogn) =>  O(nlogn)
 * 
 * 
 * @param {*} target 
 */
function searchForRange(array, target) {
    let l = search(array,target,true);
    if (l == -1)
    {
        return [-1,-1];
    }
    let r = search(array,target,false);

    return [l,r];
  }


  function search(array, target, isLeft) {
    
    let l =0,r = array.length -1, m;

    while (l < r)
    {
        m = Math.floor((l + r)/2);
        if(array[m] > target)
        {
            r = m -1;
        }
        else if(array[m] < target)
        {
            l = m + 1;
        }
        else{

            if(isLeft)
            {
                if(m==0 || array[m-1] != target)
                {
                    return m;
                }
                else{
                    r = m - 1;
                }
            }
            else{
                if(m == array.length - 1 || array[m + 1] != target)
                {
                    return m;
                }
                else{
                    l = m + 1;
                }

            }
        }
    }
    return array[l] == target ? l : -1;
  }


  // console.log(searchForRange([0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73], -1))

  console.log(searchForRange([5, 7, 7, 8, 8, 10], 7));
