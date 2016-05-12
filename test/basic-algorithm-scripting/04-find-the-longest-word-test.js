'use strict'

const test = require('tape'),
      tapSpec = require('tap-spec'),
      longestWord = require('../../src/basic-algorithm-scripting/04-find-the-longest-word');

/* Make the output look pretty */
test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('Should return the length of the longest word', function(t){
  
  t.plan(6);

  t.equal(typeof longestWord('The quick brown fox jumped'), 'number', 'should return a number' );

  const input = [
    'The quick brown fox jumped over the lazy dog',
    'May the force be with you',
    'Google do a barrel roll',
    'What is the average airspeed velocity of an unladen swallow',
    'What if we try a super-long word such as otorhinolaryngology'
  ];
  const output = [6, 5, 6, 8, 19];

  input.forEach((curr, index) => {
    t.equal(longestWord(curr), output[index], curr + '. should return: ' + output[index]);
  });

});
