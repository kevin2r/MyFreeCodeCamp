/*
 * Module: Front-End Development Certification
 * Section: Basic Algorithm Scripting
 * Challenge: Chunky Monkey
 * https://www.freecodecamp.com/challenges/chunky-monkey
 *
 * Write a function that splits an array (first argument) into
 * groups the length of size (second argument) and returns them
 * as a two-dimensional array.
 */

'use strict';

function chunkArrayInGroups(arr, size) {

  let result = [];

  while (arr.length) {
    result.push(arr.splice(0, size));
  }

  return result;
}

module.exports = chunkArrayInGroups;
