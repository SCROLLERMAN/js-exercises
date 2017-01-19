/* reverse-a-string.js

The split() method splits a String object into an array of strings by separating the string into substrings. 

Once split, the array methods reverse() and join() can be used.

The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.

The join() method joins all elements of an array into a string.

*/

function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("Stranger Things");
