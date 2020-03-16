"use strict";
exports.__esModule = true;
var nodes = [];
function push(obj) {
    nodes.push(obj);
    return {
        a: true
    };
}
push({
    id: 123,
    type: "123",
    isRoot: true,
    props: {
        hehe: 123,
        dd: "23"
    }
});
var n = {
    id: 123,
    type: "123",
    isRoot: true,
    props: {
        hehe: 123,
        dd: "23"
    }
};
// n.props.dd = "221";
// 只读数组
var a = [1, 2, 3, 4];
var ro = a;
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
