const str = "abcdefghijklmnopqrstuvwxyz";
function alphabetPosition(text) {
    const arr = [];
    for (let i = 0; i < text.length; i++) {
        const index = str.indexOf(text[i].toLowerCase()) + 1;
        if (index > 0) {
            arr.push(index);
        }
    }
    return arr.join(" ");
}

function XO(str) {
    // code here
    let num = 0;
    for (let i = 0; i < str.length; i++) {
        const text = str[i].toLowerCase();
        if (text === "x") {
            num += 1;
        } else if (text === "o") {
            num -= 1;
        }
    }
    return !num;
}

function accum(str) {
    // your code
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        const text = str[i];
        arr.push(text.toUpperCase().padEnd(i + 1, text.toLowerCase()));
    }
    return arr.join("-");
}

function arrayDiff(a, b) {
    function diff(a, b) {
        return a.filter((i) => !b.includes(i));
    }
    return `a was [${diff(a, b).toString()}], b was [${diff(b, a).toString()}]`;
}

function narcissistic(value) {
    // Code me to return true or false
    const v = value.toString();
    return v.split("").reduce((total, n) => total + Math.pow(parseInt(n), v.length), 0) === value;
}

var n = function (digit) {
    return function (op) {
        return op ? op(digit) : digit;
    };
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) {
    return function (l) {
        return l + r;
    };
}
function minus(r) {
    return function (l) {
        return l - r;
    };
}
function times(r) {
    return function (l) {
        return l * r;
    };
}
function dividedBy(r) {
    return function (l) {
        return l / r;
    };
}
