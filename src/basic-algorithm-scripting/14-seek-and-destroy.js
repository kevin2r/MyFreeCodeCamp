/*
 * Module: Front-End Development Certification
 * Section: Basic Algorithm Scripting
 * Challenge: Seek and Destroy
 * https://www.freecodecamp.com/challenges/seek-and-destroy
 *
 * You will be provided with an initial array (the first argument in the destroyer function),
 * followed by one or more arguments. Remove all elements from the initial array
 * that are of the same value as these arguments.
 */

'use strict';

function destroyer(arr) {
	
  let args = arguments.length === 1
    ? [arguments[0]]
    : Array.apply(null, arguments);

  arr = arr.filter(val => args.indexOf(val) === -1);

  return arr;
}

module.exports = destroyer;
