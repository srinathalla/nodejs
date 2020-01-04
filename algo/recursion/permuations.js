function getPermutations(array) {
    if (array.length == 0) {
        return array;
    }

    let result = [];
    permutate(array, 0, result);
    return result;
}

function permutate(array, i, result) {
    if (i == array.length) {
        result.push([...array]);
        return;
    }

    for (let j = i; j < array.length; j++) {
        swap(array, i, j);
        permutate(array, i + 1, result);
        swap(array, i, j);
    }
}

function swap(array, i, j) {
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

console.log(getPermutations([1, 2, 3]));

// Do not edit the line below.
exports.getPermutations = getPermutations;