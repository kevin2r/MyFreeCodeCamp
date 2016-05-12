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

  return Math.max(...str.split(' ').map(s => s.length));
}

module.exports = findLongestWord;
