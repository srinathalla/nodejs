/**
 * T.C : O(n*2^n) we have 2^n subsets created and at each subset creation we iterate through a list of size n for cloning
 * S.C : O(n*2^n) we have 2^n subsets created and each subset can store a elements of size n.
 * 
 * 
 * @param {*} array 
 */
function powerset(array) {
    let subsets = [[]];
    for(x of array)
    {
        let length = subsets.length;
        for(let i=0; i < length;i++)
        {
            let subset = subsets[i];
            subsets.push([...subset,x]);
        }
    }
    return subsets;
  }


console.log(...powerset([1, 2, 3]));
console.log(...powerset([1]));
  
  // Do not edit the line below.
  exports.powerset = powerset;
  