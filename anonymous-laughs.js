/*
 * Programming Quiz: Laugh (5-4)
 Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.
 */

var laugh = function(num) {
var string=""; 
    for (i=0; i<+num; i++) {
    string = string + "ha"    
    }
return string+"!"; 
}

console.log(laugh(10));