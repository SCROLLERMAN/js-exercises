/* check-for-palindromes

Remove any white-space or num-alphanumeric characters.

Use the toLowerCase() method to remove any capital letters.

Take the string and apply the split(), reverse() and join() methods.

Compare each string one that is forwards and the other that is reverse.

*/

function palindrome(str) {
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

palindrome("race car");
