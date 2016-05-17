'use strict'

const test = require('tape'),
      tapSpec = require('tap-spec'),
      titleCase = require('../../src/basic-algorithm-scripting/05-title-case-a-sentence');

/* Make the output look pretty */
test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('Should return a string with the first letter of each word capitalized', function(t){
  
  t.plan(4);

  t.equal(typeof titleCase("I'm a little tea pot"), 'string', 'should return a string' );

  const input = [
    "I'm a little tea pot",
    'sHoRt AnD sToUt',
    'HERE IS MY HANDLE HERE IS MY SPOUT'
  ];
  const output = [
    "I'm A Little Tea Pot",
    'Short And Stout',
    'Here Is My Handle Here Is My Spout'
  ];

  input.forEach((curr, index) => {
    t.equal(titleCase(curr), output[index], '"' + curr + '"' + ' should return: ' + output[index]);
  });

});