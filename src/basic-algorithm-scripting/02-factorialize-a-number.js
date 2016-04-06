/*
 * Module: Front-End Development Certification
 * Section: Basic Algorithm Scripting
 * Challenge: Factorialize a Number
 * https://www.freecodecamp.com/challenges/factorialize-a-number
 *
 * Return the factorial of the provided integer.
 *
 * If the integer is represented with the letter n, a factorial is the product of
 * all positive integers less than or equal to n.
 *
 * Factorials are often represented with the shorthand notation n!
 *
 * For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 */

'use strict';

function fact (x) {
  return x == 0 ? 1 : x * fact (x - 1);
}

module.exports = fact;
