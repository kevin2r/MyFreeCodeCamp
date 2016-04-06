/*
 * Module: Front-End Development Certification
 * Section: Basic Algorithm Scripting
 * Challenge: Truncate a string
 * https://www.freecodecamp.com/challenges/truncate-a-string
 *
 * Truncate a string (first argument) if it is longer than the given
 * maximum string length (second argument). Return the truncated string
 * with a ... ending.
 *
 * Note that inserting the three dots to the end will add to the string length.
 *
 * However, if the given maximum string length num is less than or equal to 3,
 * then the addition of the three dots does not add to the string length
 * in determining the truncated string.
 */

'use strict';

function truncateString(str, num) {

  return str.length > num
    ? str.slice( 0, num <= 3 ? num : num - 3 ) + '...'
    : str;
}

module.exports = truncateString;
