'use strict'

const test = require('tape'),
      tapSpec = require('tap-spec'),
      reverseString = require('../../src/basic-algorithm-scripting/01-reverse-a-string');

/* Make the output look pretty */
test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

test('Should reverse a string', function(t){
  t.plan(4);

  t.equal(typeof reverseString('yeah'), 'string' );

  const input = ['hello', 'Howdy', 'Greetings from Earth'];
  const output = ['olleh', 'ydwoH', 'htraE morf sgniteerG'];

  input.forEach((curr, idx) => {
    t.equal(reverseString(curr), output[idx]);
  });


});

