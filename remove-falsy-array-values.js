/* remove-falsy-array-values.js

The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument and returns true for truthy value or false for falsy value. Hence we pass the built-in Boolean function.

*/

function removeFalsy(arr) {
  return arr.filter(Boolean);
}

removeFalsy([5, "nope", "", false, 9]);

