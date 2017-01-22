/* repeat-a-string.js

Create an empty string variable to store the repeated word.

Use a while a loop to repeat the code as many times as needed according to num

Add the string to the variable stringString, and decrease num.

At the end of the loop, return the variable for the repeated word.

*/

function repeatString(str, num) {
	var stringString = '';

	while (num > 0) {
		stringString += str;
		num--;
	}

	return stringString;
}

repeatString("Down by the river ", 2);
