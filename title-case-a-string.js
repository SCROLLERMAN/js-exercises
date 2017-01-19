/* title-case-a-string

Split the string delimited by space into an array of words.

Store the number of occurrences in str.length.

Split the array occurrence into an array of letters.

Convert the first occurrence of the array to uppercase.

Convert the array of letters back into a word.

Convert the array of words back to a sentence.

*/

function titleCase(str) {
    str = str.toLowerCase().split(' ');

    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].split('');
        str[i][0] = str[i][0].toUpperCase();
        str[i] = str[i].join('');
    }
    return str.join(' ');
}

titleCase("Every word I say is very important");