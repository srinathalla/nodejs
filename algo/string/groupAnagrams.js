/*
* T.C : O(w*nlogn) where n : length of longest word and w : no of words
* S.C : O(w*n)
*
*/
function groupAnagrams(words) {
    let anagrams = {};
    for(let word of words)
    {
        let sortedWord = word.split('').sort().join('');
        if(sortedWord in anagrams)
        {
            anagrams[sortedWord].push(word);
        }
        else{
            anagrams[sortedWord]= [word];
        }
    }
    return Object.values(anagrams);
  }

  console.log(groupAnagrams(["yo", "act", "flop", "tac", "cat", "oy", "olfp"]))
  
  // Do not edit the line below.
  exports.groupAnagrams = groupAnagrams;



  