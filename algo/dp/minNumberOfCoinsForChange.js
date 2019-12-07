/*
# T.C O(n*m) where m is length of denoms
# S.C O(n)
# 
# 
*/
function minNumberOfCoinsForChange(n, denoms) {
    let coins = []
    let i, j;
    for (i = 0; i <= n; i++) {
        coins[i] = Number.MAX_SAFE_INTEGER;
    }
    coins[0] = 0

    for (i = 0; i < denoms.length; i++) {
        for (j = 1; j <= n; j++) {
            if (j >= denoms[i])
                coins[j] = Math.min(coins[j], 1 + coins[j - denoms[i]]);
        }
    }

    return coins[n] != Number.MAX_SAFE_INTEGER ? coins[n] : -1;
}

console.log(minNumberOfCoinsForChange(7, [1, 5, 10]));