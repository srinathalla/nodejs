
/**
 * T.C O(nlogn) + O(mlogm)
 * @param {*} arrayOne 
 * @param {*} arrayTwo 
 */
function smallestDifference(arrayOne, arrayTwo) {

    arrayOne.sort( (a,b) => a - b);
    arrayTwo.sort((a,b) => a - b);
    let i = 0,
        j = 0;

    let minDiff = Number.MAX_SAFE_INTEGER, num1, num2;

    while (i < arrayOne.length && j < arrayTwo.length) {

        let diff = Math.abs(arrayOne[i] - arrayTwo[j]);
        if (arrayOne[i] < arrayTwo[j]) {
            if (minDiff > diff) {
                minDiff = diff;
                num1 = arrayOne[i];
                num2 = arrayTwo[j];
            }
            i++;
        } else if (arrayOne[i] > arrayTwo[j]) {
            if (minDiff > diff) {
                minDiff = diff;
                num1 = arrayOne[i];
                num2 = arrayTwo[j];
            }
            j++;     
        } else {
            return [arrayOne[i], arrayTwo[j]];
        }   
    }

    return [num1,num2];
}

console.log(smallestDifference([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17]));


exports.smallestDifference = smallestDifference;