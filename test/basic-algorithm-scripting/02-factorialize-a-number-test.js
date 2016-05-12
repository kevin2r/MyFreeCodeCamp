'use strict'

const test = require('tape'),
      tapSpec = require('tap-spec'),
      factorial = require('../../src/basic-algorithm-scripting/02-factorialize-a-number');

/* Make the output look pretty */
test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('Should return the factorial of a number', function(t){
  
  t.plan(7);

  t.equal(typeof factorial(1), 'number', 'should return a number' );

  const input = [0, 1, 2, 3, 5, 7];
  const output = [1, 1, 2, 6, 120, 5040];

  input.forEach((curr, index) => {
    t.equal(factorial(curr), output[index], 'should return the factorial of: ' + curr);
  });

});
