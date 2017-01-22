/* splice-an-array.js

First argument, arr is the array to be modified.

Second argument, howMany is the number of elements to be removed starting with arr[0].

Modify the array with splice() method and return it.

*/

function splicer(arr, howMany) {
	arr.splice(0, howMany);
	return arr;
}
slasher([1, 2, 3, 4, 5], 3);
