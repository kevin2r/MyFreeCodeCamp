/*
 * Module: Front-End Development Certification
 * Section: Basic Algorithm Scripting
 * Challenge: Reverse a String
 * https://www.freecodecamp.com/challenges/reverse-a-string
 *
 * Reverse the provided string.
 *
 * You may need to turn the string into an array before you can reverse it.
 *
 * Your result must be a string.
 */

'use strict';

function reverseString(str) {

  return str
    .split('')
    .reverse()
    .join('');
}

module.exports = reverseString;
