/* remove-matching-array-values.js

Turn the arguments variable into a full array instead of the limited array it currently is.

Remove the first argument since it is not needed.

Use the filter() to filter out the elements that are on the array and keep the ones that are not.

*/

function removeMatching(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.splice(0, 1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}

removeMatching([1, 2, 3, 1, 2, 3], 2, 3);