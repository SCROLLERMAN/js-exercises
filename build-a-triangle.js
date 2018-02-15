/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

function buildTriangle(num) {
    var triangle = '';                    // make it storable in a variable
    for(var i = 1; i < num; i++) {        // add each line after one another
        triangle = triangle + makeLine(i);
    }
    return triangle;                       // return it so its accessible outside the function
}

console.log(buildTriangle(10));            
