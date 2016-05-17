/*
 * Module: Front-End Development Certification
 * Section: Basic Algorithm Scripting
 * Challenge: Return Largest Numbers in Arrays
 * https://www.freecodecamp.com/challenges/confirm-the-ending
 *
 * Check if a string (first argument, str) ends with
 * the given target string (second argument, target).
 */

'use strict';

function end(str, target) {

  return str.slice( - target.length ) === target;
}

module.exports = end;
