/*
 * Module: Front-End Development Certification
 * Section: Basic Algorithm Scripting
 * Challenge: Caesars Cipher
 * https://www.freecodecamp.com/challenges/caesars-cipher
 *
 * Return the lowest index at which a value (second argument)
 * should be inserted into an array (first argument) once it has been sorted.
 *
 * For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1
 * (index 0), but less than 2 (index 1).
 *
 * Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted
 * it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
 */

 'use strict';

function rot13(str) { // LBH QVQ VG!

  let alphabet = Array
    .apply(null, Array(26))
    .map((v, i) => String.fromCharCode(i + 65));


  let decoded = str
    .split('')
    .map(char =>
      !~alphabet.indexOf(char)
        ? char
        : alphabet[(alphabet.indexOf(char) + 13) % 26])
    .join('');

  return decoded;
}


module.exports = rot13;
