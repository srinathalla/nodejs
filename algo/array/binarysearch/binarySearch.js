function binarySearch(array, target) {
    let l =0;
    let r= array.length - 1;

    while (l < r)
    {
        let m = Math.round((l+r)/2);
        if (array[m] == target)
        {
            return m;
        }
        else if(array[m] > target)
        {
            r = m - 1;
        }
        else{
            l = m + 1;
        }
    }
    return array[l] == target ? l : -1;
  }

  console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));
  
  // Do not edit the line below.
  exports.binarySearch = binarySearch;
  