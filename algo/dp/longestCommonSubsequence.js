function longestCommonSubsequence(str1, str2) {
    let table = []
    let i, j;

    for (i = 0; i <= str1.length; i++) {
        row = [];
        for (j = 0; j <= str2.length; j++) {
            row.push(0);
        }
        table.push(row);
    }

    for (i = 1; i <= str1.length; i++) {
        for (j = 1; j <= str2.length; j++) {
            if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
                table[i][j] = 1 + table[i - 1][j - 1];
            } else {
                table[i][j] = Math.max(table[i][j - 1], table[i - 1][j]);
            }
        }
    }

    return getSequence(table, str1, str2);
}

function getSequence(table, str1, str2) {
    i = str1.length;
    j = str2.length;
    sequence = []
    while (i > 0 && j > 0) {
        if (table[i][j] == table[i][j - 1] || table[i][j] == table[i - 1][j]) {
            if (table[i][j] == table[i][j - 1]) {
                j -= 1
            } else {
                i -= 1
            }
        } else {
            sequence.unshift(str1[i - 1]);
            i -= 1
            j -= 1
        }
    }
    return sequence
}


console.log(longestCommonSubsequence("ZXVVYZW", "XKYKZPW"));