/**
 * T.C : O(nm)
 * 
 * S.C : O(nm)
 * @param {*} str1 
 * @param {*} str2 
 */
function levenshteinDistance(str1, str2) {

    let n = str1.length;
    let m = str2.length;

    let i, j;

    let edits = [];
    for (i = 0; i <= n; i++) {
        const row = [];
        for (j = 0; j <= m; j++) {
            row[j] = j;
        }
        row[0] = i;
        edits.push(row);
    }

    // O(n)(m)
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= m; j++) {
            if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
                edits[i][j] = edits[i - 1][j - 1];
            } else {
                edits[i][j] = Math.min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1]) + 1;
            }
        }
    }

    return edits[n][m];
}


console.log(levenshteinDistance('abc', 'yabcx'));

// Do not edit the line below.
exports.levenshteinDistance = levenshteinDistance;