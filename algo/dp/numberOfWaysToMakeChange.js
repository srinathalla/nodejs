function numberOfWaysToMakeChangeWithRecursion(n, denoms) {
    denoms.sort((a, b) => a - b);
    return recurse(n, denoms, 0, 0);
}

function recurse(n, denoms, i, sum) {
    if (n === sum) {
        return 1;
    }
    if (sum > n || i >= denoms.length) {
        return 0;
    }

    let ways = 0;
    if (sum + denoms[i] <= n) {
        ways = recurse(n, denoms, i, sum + denoms[i]) + recurse(n, denoms, i + 1, sum);
    }
    return ways;
}

function numberOfWaysToMakeChange(n, denoms) {
    let ways = [];
    let i, j;
    for (i = 0; i <= denoms.length; i++) {
        column = [];
        for (j = 0; j <= n; j++) {
            column[j] = 0;
        }
        column[0] = 1;
        ways.push(column);
    }

    for (i = 1; i <= denoms.length; i++) {
        for (j = 1; j <= n; j++) {
            // No of ways excluding current denomination.
            ways[i][j] = ways[i - 1][j];

            // No of ways incluing current denomination.
            if (denoms[i - 1] <= j) {
                ways[i][j] += ways[i][j - denoms[i - 1]];
            }
        }
    }
    return ways[denoms.length][n];
}



console.log(numberOfWaysToMakeChangeWithRecursion(10, [1, 5, 10, 25]));

console.log(numberOfWaysToMakeChange(10, [1, 5, 10, 25]));

// Do not edit the line below.
exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;