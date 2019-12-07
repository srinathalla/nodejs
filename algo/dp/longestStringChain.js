/*
 * T.C : O(n*n*m + nlogn)
 * S.C : O(n)
 * where n : no of strings and m : length of longest string
 * 
 * */
function longestStringChain(strings) {
    strings.sort((a, b) => a.length - b.length);

    let lengths = [],
        sequence = [];

    let maxLen = 1,
        idx = -1;
    for (str of strings) {
        lengths.push(1);
        sequence.push(-1);
    }

    for (let i = 1; i < strings.length; i++) {
        for (let j = 0; j < i; j++) {
            if (isDistanceOne(strings[i], strings[j]) && lengths[i] < lengths[j] + 1) {
                lengths[i] = lengths[j] + 1;
                sequence[i] = j;
            }
        }

        if (maxLen < lengths[i]) {
            maxLen = lengths[i];
            idx = i;
        }
    }

    let result = [];
    while (idx != -1) {
        result.push(strings[idx]);
        idx = sequence[idx];
    }
    return result;
}


function isDistanceOne(s1, s2) {
    if (s1.length - s2.length != 1) {
        return false;
    }

    let i = 0,
        j = 0;
    dist = 0
    while (i < s1.length && j < s2.length) {
        if (s1.charAt(i) == s2.charAt(j)) {
            i++;
            j++;
        } else {
            dist++;
            i++;
        }
    }
    return dist <= 1;
}

let strings = [
    "lgoprt",
    "12345678",
    "algoxpert",
    "abcde",
    "123468",
    "lgoxprt",
    "abde",
    "lgopt",
    "1234678",
    "ade",
    "ae",
    "algoxprt",
    "a",
    "1abde",
    "lgpt",
    "123456789",
    "234678",
    "algoexpert",
]

let strings1 = ["abcdefg", "abdefg", "abdfg", "bdfg", "bfg", "bg", "g"]

let strings2 = [
    "abcdefg1",
    "1234c",
    "abdefg2",
    "abdfg",
    "123",
    "122",
    "bgg",
    "g",
    "1a2345",
    "12a345",
]
console.log(longestStringChain(strings2));
console.log(longestStringChain(strings1));
console.log(longestStringChain(strings));

// Do not edit the line below.
exports.longestStringChain = longestStringChain;