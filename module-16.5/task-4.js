/**
 * Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
 */

const statement = 'I am a hard working person';

let statementToArray = statement.split(' ');

console.log(statementToArray);
let statementRever = [];

for(let word of statementToArray)
{
    statementRever.unshift(word);
}
console.log(statementRever);