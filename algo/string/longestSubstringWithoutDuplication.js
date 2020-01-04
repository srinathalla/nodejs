/**
 * T.C : O(2n) where n is length of string.
 * S.C : O(n)
 * @param {} string 
 */
function longestSubstringWithoutDuplication(string) {
    
    let lastSeen = {};
    let max = [0,1];
    let start = 0;

    for(let i=0; i < string.length; i++)
    {
        if (string[i] in lastSeen)
        {
            start = Math.max(start, lastSeen[string[i]] + 1);
        }

        if(i + 1 - start > max[1] - max[0])
        {
            max[1] = i +1 ;
            max[0] = start;
        }
        lastSeen[string[i]] = i;
    }
    return string.substring(max[0], max[1]);
  }



console.log(longestSubstringWithoutDuplication("abcdeabcdefc"));

console.log(longestSubstringWithoutDuplication("abc"));
  
  // Do not edit the line below.
  exports.longestSubstringWithoutDuplication = longestSubstringWithoutDuplication;
  