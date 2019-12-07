/**
 * T.C : O(n) S.C : O(1)
 * @param {*} array 
 */
function hasSingleCycle(array) {
     let visistedCount = 0, pos = 0;

     while (visistedCount < array.length)
     {
         if (array[pos] == 0)
         {
             return false;
         }
        visistedCount++;
        let prev = pos;
        pos = getNextPosition(array,pos);
        array[prev] = 0;
     }
     return pos == 0;
  }

  function getNextPosition(array,pos)
  {
      pos = pos + array[pos];
      pos = pos % array.length;
      return pos >= 0 ? pos : pos + array.length;
  }

  console.log(hasSingleCycle([-1, 2, 2]))

  console.log(hasSingleCycle([1, 1, 1, 1, 2]))

console.log(hasSingleCycle([10, 11, -6, -23, -2, 3, 88, 909, -26]))
  
  // Do not edit the line below.
  exports.hasSingleCycle = hasSingleCycle;
  