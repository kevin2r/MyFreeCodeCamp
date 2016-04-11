/*
 * Module: Front-End Development Certification
 * Section: Basic Algorithm Scripting
 * Challenge: Find the Longest Word in a String
 * https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string
 *
 * Return the length of the longest word in the provided sentence.
 *
 * Your response should be a number.
 */

'use strict';

function findLongestWord(str) {
  
  let sorted = str
    .split(' ')
    /* if arrow function is less than 0 sort 'a' to lower index than 'b' */
    .sort( (a, b) => a.length - b.length );

  return sorted[sorted.length - 1].length;
}

module.exports = findLongestWord;
