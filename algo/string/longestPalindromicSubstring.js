/**
 * T.C : O(n^2)
 * @param {} string 
 */
function longestPalindromicSubstring(string) {

    let maxLongest = [0, 1];
    let i;
    for (i = 0; i < string.length; i++) {
        let odd = expand(string, i, i);
        let even = expand(string, i, i + 1);

        let longest = odd[1] - odd[0] >= even[1] - even[0] ? odd : even;
        maxLongest = maxLongest[1] - maxLongest[0] >= longest[1] - longest[0] ? maxLongest : longest;
    }

    return string.substring(maxLongest[0], maxLongest[1]);
}


function expand(string, i, j) {

    let start = i,
        end = j;
    while (start >= 0 && end < string.length && string.charAt(start) == string.charAt(end)) {
        start--;
        end++;
    }
    return start < i ? [start + 1, end] : [-1, -1];
}

console.log(longestPalindromicSubstring("abaxyzzyxf"));
console.log(longestPalindromicSubstring("it's highnoon"));

// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;