/* sort-to-index.js

Sort the array using .sort(callbackFuntion) to sort it by lowest to highest, from left to right.

Use a for loop to compare the items in the array starting from the smallest one. 

When an item on the array is greater than the number compared against, then return the index as an integer.

*/

function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return parseInt(a);
  }

  return arr.length;
}