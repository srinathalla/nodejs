/**
 * T.C : O(n*m) as we are computing the result only once
 * S.C O(n+m) n is len of one,m len of two
 * @param {} one 
 * @param {*} two 
 * @param {*} three 
 */
function interweavingStrings(one, two, three) { 
    if (one.length + two.length != three.length)
    {
        return false;
    }

    let cache = [];
    for(let i=0;i <= one.length;i++)
    {
        let row = []; 
        for(let j=0;j <= two.length;j++)
        {
            row.push(null);
        }
        cache.push(row);
    }

    return interweaved(one, two, three, 0, 0, cache);
  }

function interweaved(one, two, three,i,j,cache)
{
 

    if(cache[i][j] != null)
    {
        return cache[i][j];
    }
    console.log("i: " + i + " j: " + j);

    let k = i + j;

    if(k === three.length)
    {
        return true;
    }

    if(i < one.length && one.charAt(i) === three.charAt(k))
    {
        cache[i][j] = interweaved(one,two,three,i + 1,j,cache)
        if(cache[i][j])
        {
            return true;
        }
    }

    if(j < two.length && two.charAt(j) === three.charAt(k))
    {
        cache[i][j] = interweaved(one,two,three,i,j + 1,cache)
        return cache[i][j];
    }

    cache[i][j] = false;
    return false;
}

console.log(interweavingStrings("aaa", "aaaf", "aaafaaa"));
  
  // Do not edit the line below.
  exports.interweavingStrings = interweavingStrings;
  