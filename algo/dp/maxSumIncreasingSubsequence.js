function maxSumIncreasingSubsequence(array) {

    if (array.length == 0) {
        return 0;
    }

    if (array.length == 1) {
        return [array[0],
            [array[0]]
        ];
    }

    let maxSum = [],
        sequence = [];
    for (let i = 0; i < array.length; i++) {
        maxSum.push(array[i]);
        sequence.push(i);
    }

    let maxIdx = 0;
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] > array[j] && maxSum[i] < maxSum[j] + array[i]) {
                maxSum[i] = maxSum[j] + array[i];
                sequence[i] = j;
            }
        }
        if (maxSum[maxIdx] < maxSum[i]) {
            maxIdx = i;
        }
    }

    i = maxIdx;
    result = [];
    while (i >= 0) {
        result.unshift(array[i]);
        i = i != sequence[i] ? sequence[i] : -1;
    }

    return [maxSum[maxIdx], result];
}


// console.log(maxSumIncreasingSubsequence([10, 70, 20, 30, 50, 11, 30]));

console.log(maxSumIncreasingSubsequence([-1, 1]));

// Do not edit the line below.
exports.maxSumIncreasingSubsequence = maxSumIncreasingSubsequence;