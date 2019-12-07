/**
 * T.C : O(n)
 * Single pass solution, we move all the other elements to the left.
 * @param {T.C} array 
 * @param {*} toMove 
 */
function moveElementToEndWithSwapOther(array, toMove) {
    let i = 0,
        j = 0;

    while (j < array.length) {
        if (array[j] != toMove) {
            swap(array, i, j);
            i++;
        }
        j++;
    }
    return array;
}

/**
 * T.C : O(n)
 * Single pass solution, we move target element to the right.
 * @param {T.C} array 
 * @param {*} toMove 
 */
function moveElementToEnd(array, toMove) {
    let i = 0,
        j = array.length - 1;

    while (i < j) {
        if (array[i] === toMove) {
            swap(array, i, j);
            j--;
        }
        i = array[i] === toMove ? i : i + 1;
    }
    return array;
}

function swap(array, i, j) {
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

console.log(moveElementToEnd([1, 2, 3, 2, 3, 2, 4, 5], 2));

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;