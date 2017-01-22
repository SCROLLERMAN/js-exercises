/* chunk-array-in-groups.js

Create two empty arrays called temp and result.

The for loop loops until a is equal to or more than the length of the array in the test.

Inside the loop, push to temp using temp.push(arr[a]); if the remainder of a / size is not equal to size - 1.

Otherwise, push to temp, push temp to the result variable and reset temp to an empty array.

Next, if temp isn't an empty array, push it to result.

Return the value of result.

*/

function chunkArrayInGroups(arr, size) {

	var temp = [];
	var result = [];

	for (var a = 0; a < arr.length; a++) {
		if (a % size !== size - 1)
			temp.push(arr[a]);
		else {
			temp.push(arr[a]);
			result.push(temp);
			temp = [];
		}
	}

	if (temp.length !== 0)
		result.push(temp);
	return result;
}

chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 2);
