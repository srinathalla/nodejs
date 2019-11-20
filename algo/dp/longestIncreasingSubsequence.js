/**
 * T.C O(n^2)
 * 
 * S.C O(2n)
 * 
 */
function longestIncreasingSubsequence(array) {

    let lengths = [],
        sequences = [];
    let i;
    for (i = 0; i < array.length; i++) {
        lengths[i] = 1;
        sequences[i] = i;
    }

    let maxIdx = 0;
    for (i = 1; i < array.length; i++) {
        for (j = 0; j < i; j++) {
            if (array[i] > array[j] && lengths[i] < lengths[j] + 1) {
                lengths[i] = lengths[j] + 1;
                sequences[i] = j;
                if (lengths[maxIdx] < lengths[i]) {
                    maxIdx = i;
                }
            }
        }
    }

    let result = [];
    i = maxIdx
    while (i >= 0) {
        result.unshift(array[i]);

        i = i != sequences[i] ? sequences[i] : -1;
    }
    return result;
}


console.log(longestIncreasingSubsequence([
    5,
    7,
    -24,
    12,
    10,
    2,
    3,
    12,
    5,
    6,
    35,
]));

// Do not edit the line below.
exports.longestIncreasingSubsequence = longestIncreasingSubsequence;