'use strict'

const test = require('tape'),
      tapSpec = require('tap-spec'),
      palindrome = require('../../src/basic-algorithm-scripting/03-check-for-palindromes');

/* Make the output look pretty */
test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('Should return true if the string is a palindrome, otherwise return false', function(t){
  
  t.plan(9);

  t.equal(typeof palindrome('trueorfalse'), 'boolean', 'should return a boolean' );

  const palindromes = [
    'Anna',
    'A but tuba.',
    'A dog! A panic in a pagoda!',
    'A Toyota! Race fast, safe car! A Toyota!'
  ];

  palindromes.forEach((curr) => {
    t.true(palindrome(curr), 'should return true from this palindrome input: ' + curr);
  });

  const noPalindromes = [
    'No Palindrome',
    'Generate an assertion',
    'just check out the branch',
    'What is that in Be careful with that? Is it git reset?'
  ]

  noPalindromes.forEach((curr) => {
    t.false(palindrome(curr), 'should return false from this no palindrome input: ' + curr);
  });

});
