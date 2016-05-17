/*
 * Module: Front-End Development Certification
 * Section: Basic Algorithm Scripting
 * Challenge: Return Largest Numbers in Arrays
 * https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays
 *
 * Return an array consisting of the largest number from each provided sub-array.
 * For simplicity, the provided array will contain exactly 4 sub-arrays.
 *
 * Remember, you can iterate through an array with a simple for loop,
 * and access each member with array syntax arr[i].
 */

'use strict';

function largestOfFour(arr) {

  return arr
    .map( cval => Math.max(...cval) );
}

module.exports = largestOfFour;
