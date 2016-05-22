'use strict'

const test = require('tape'),
      tapSpec = require('tap-spec'),
      confirmEnd = require('../../src/basic-algorithm-scripting/07-confirm-ending');

/* Make the output look pretty */
test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('Should return true if the string provided as first ' + 
      'argument ends with the second argument', function(t){
  
  t.plan(7);

  const input = [
    ["Bastian", "n"],
    ["Connor", "n"],
    ["Walking on water and developing software from " + 
    "a specification are easy if both are frozen", "specification"],
    ["He has to give me a new name", "name"],
    ["He has to give me a new name", "me"],
    ["He has to give me a new name", "na"],
    ["If you want to save our world, you must hurry. " + 
    "We dont know how much longer we can withstand the nothing", "mountain"]
  ];
  
  const output = [
    Boolean(true),
    Boolean(false),
    Boolean(false),
    Boolean(true),
    Boolean(true),
    Boolean(false),
    Boolean(false)
  ];

  input.forEach((curr, index) => {
    t.equal(confirmEnd(curr[0], curr[1]), output[index], 'should return ' + output[index]);
  });

});
