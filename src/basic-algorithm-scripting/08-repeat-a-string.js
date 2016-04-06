/*
 * Module: Front-End Development Certification
 * Section: Basic Algorithm Scripting
 * Challenge: Repeat a string repeat a string
 * https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string
 *
 * Repeat a given string (first argument) num times (second argument). 
 * Return an empty string if num is a negative number.
 */

'use strict';

function repeatStringNumTimes(str, num) {

  return num < 0 
    ? '' 
    : str.repeat(num);
}

module.exports = repeatStringNumTimes;
