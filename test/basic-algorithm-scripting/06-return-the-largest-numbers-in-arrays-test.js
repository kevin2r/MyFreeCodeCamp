'use strict'

const test = require('tape'),
      tapSpec = require('tap-spec'),
      largestNumbers = require('../../src/basic-algorithm-scripting/06-return-the-largest-numbers-in-arrays');

/* Make the output look pretty */
test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('Should return an array with the largest numbers from each provided sub-array', function(t){
  
  t.plan(3);

  t.equal(Object.prototype.toString.call(
      largestNumbers([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
    ),
    '[object Array]',
    'should return an array'
  );

  const input = [
    [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]],
    [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]
  ];
  const output = [
    [27,5,39,1001],
    [9, 35, 97, 1000000]
  ];


  // deepEqual() compares the enumerable properties of each object
  input.forEach((curr, index) => {
    t.deepEqual(largestNumbers(curr), output[index]);
  });

});
