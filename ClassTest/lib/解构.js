"use strict";

// case1
var a = 1,
    b = 2;
var _ref = [b, a];
a = _ref[0];
b = _ref[1];
// case2
var obj = {
  a: 'Apple',
  b: 'Boy',
  c: 'Cat',
  d: 'Dog',
  e: 'Elephant'
};
var first = obj.a,
    second = obj.b;
console.log(first, second);