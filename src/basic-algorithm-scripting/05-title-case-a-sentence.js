/*
 * Module: Front-End Development Certification
 * Section: Basic Algorithm Scripting
 * Challenge: Title Case a Sentence
 * https://www.freecodecamp.com/challenges/title-case-a-sentence
 *
 * Return the provided string with the first letter of each word capitalized. 
 * Make sure the rest of the word is in lower case.
 *
 * For the purpose of this exercise, you should also capitalize connecting words 
 * like "the" and "of".
 */

'use strict';

function titleCase(str) {
  
  return str
    .toLowerCase()
    .split(' ')
    .map(val => val
      .charAt(0)
      .toUpperCase() + val.slice(1)
    )
    .join(' ');
}

module.exports = titleCase;