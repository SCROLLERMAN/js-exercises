/* same-letters-in-string.js

Make the two strings in the array lowercase so they are easier to compare. 

Variable test will hold what we are looking for in target.

Loop through the test characters and if any of them are not found, return false.

If they are all found, the loop will finish without returning anything, return true.

*/

function sameLetters(arr) {
	var test = arr[1].toLowerCase();
	var target = arr[0].toLowerCase();
	for (i = 0; i < test.length; i++) {
		if (target.indexOf(test[i]) < 0)
			return false;
	}
	return true;
}

sameLetters(["Dog", "God"]);
