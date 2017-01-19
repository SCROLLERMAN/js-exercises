/* find-the-longest-word-in-a-string.js

Use the split() method with a space as the seperator to seperate all words into an array.

Store the result in a variable called stringSplit

Initiate a variable to hold the word with the longest length

Create a for loop to test if stringSplit is greater than the word is is being compared with.

Assign longestWord with this final value.

Return the longest word

*/

function findLongestWord(str) {

    var stringSplit = str.split(' ');

    var longestWord = 0;

    for (var i = 0; i < stringSplit.length; i++) {
        if (stringSplit[i].length > longestWord) {
            longestWord = stringSplit[i].length;
        }
    }

    return longestWord;
}

findLongestWord("That's one small step for man, one giant leap for mankind");