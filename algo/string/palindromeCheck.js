/**
 * T.C : O(n) S.C : O(1)
 * @param {*} string 
 */
function isPalindrome(string) {
    
    let i = 0, j = string.length -1;
    while(i < j)
    {
        if(string.charAt(i) != string.charAt(j))
        {
            return false;
        }
        i++;
        j--;
    }
    return true;
  }

  
  // Do not edit the line below.
  exports.isPalindrome = isPalindrome;
  