// case1
let a = 1,
    b = 2;
[a, b] = [b, a];

// case2
const obj = {
    a: 'Apple',
    b: 'Boy',
    c: 'Cat',
    d: 'Dog',
    e: 'Elephant',
};

const { a: first, b: second } = obj;
console.log(first, second);
