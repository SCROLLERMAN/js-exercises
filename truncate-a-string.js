/* truncate-a-string.js

Create a if statement to determine one of three outcomes.

If the string length is greater than the num we want to truncate at, and our truncate point is at least three characters or more into the string, we return a slice of our string starting at character 0, and ending at num - 3. 

We then append '...' to the end of the string.

However, if string length is greater than the num but num is within the first three characters, we don't have to count our dots as characters. Therefore, we return the same string as above, with one difference: The endpoint of our slice is now just num.

Finally, if none of the above situations are true, it means our string length is less than our truncation num. Therefore, we can just return the string.

*/

function truncateString(str, num) {

  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }

}

truncateString("One small step for man, giant leap for mankind", 15);