/*
 * Module: Front-End Development Certification
 * Section: Basic Algorithm Scripting
 * Challenge: Slasher Flick
 * https://www.freecodecamp.com/challenges/slasher-flicky
 *
 * Return the remaining elements of an array after chopping off
 * n elements from the head.
 *
 * The head means the beginning of the array, or the zeroth index.
 */

'use strict';

function slasher(arr, howMany) {

  return arr.slice(howMany);
}


module.exports = slasher;
