interface PropsInter {
    hehe: number;
    cc?: boolean; //可选属性
    readonly dd: string; //只读属性
}
interface NodeInter {
    id: number;
    type: string;
    isRoot: boolean;
    props: PropsInter;
}

const nodes: NodeInter[] = [];

function push(obj: NodeInter): { a: boolean } {
    nodes.push(obj);
    return {
        a: true,
    };
}
push({
    id: 123,
    type: "123",
    isRoot: true,
    props: {
        hehe: 123,
        dd: "23",
        // dd: 3333,
    },
});
const n: NodeInter = {
    id: 123,
    type: "123",
    isRoot: true,
    props: {
        hehe: 123,
        dd: "23",
    },
};
// n.props.dd = "221";

// 只读数组
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!

// 但在这我们要表示的是SquareConfig可以有任意数量的属性，并且只要它们不是color和width，那么就无所谓它们的类型是什么。
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

// 函数类型
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
};

// 索引类型
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// 类类型
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) {}
}

export {};
