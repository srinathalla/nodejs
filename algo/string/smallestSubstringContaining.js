/*
# T.C : O(n + m) where n is length of biggest string, m is length of smallest string.
# S.C : O(m)
# */


function smallestSubstringContaining(bigString, smallString) {

    let distinctCharsInSmallString = 0,charToCountMap = {};

    for(let i=0; i< smallString.length;i++)
    {
        let ch = smallString.charAt(i);
        if(!(ch in charToCountMap))
        {
            charToCountMap[ch] = 0;
            distinctCharsInSmallString++;
        }
        charToCountMap[ch] += 1;
    }

    let minLen = [0, bigString.length + 1];
    let distinctCharsInBigString = 0, start = 0, i = 0;

    while(i < bigString.length)
    {
        let bch = bigString.charAt(i);
        if(bch in charToCountMap)
        {
            charToCountMap[bch] -= 1
            if(charToCountMap[bch] === 0)
            {
                distinctCharsInBigString++;
            }

            while(distinctCharsInBigString === distinctCharsInSmallString)
            {
                if(minLen[1] - minLen[0] > i + 1 - start)
                {
                    minLen[1] = i + 1;
                    minLen[0] = start;
                }

                bch = bigString.charAt(start);
                if(bch in charToCountMap)
                {
                    charToCountMap[bch] += 1
                    if(charToCountMap[bch] > 0)
                    {
                        distinctCharsInBigString--;
                    }
                }
                start++;
            }  
        }
        i++;
    }

    return minLen[1] < bigString.length ? bigString.substring(minLen[0],minLen[1]) : '';
  }

let bigString = "abcd$ef$axb$c$"
let smallString = "$$abf"
let expected = "f$axb$"
console.log(smallestSubstringContaining(bigString,smallString));
  
  // Do not edit the line below.
  exports.smallestSubstringContaining = smallestSubstringContaining;
  