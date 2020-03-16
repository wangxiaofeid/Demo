// string
function strFun(str: string) {
    console.log("hello:", str);
    return "123";
}
const inStr: string = "111";
strFun(inStr);

// number
function numFun(num: number) {
    console.log(num + 1);
    return "dd";
}
const inNum: number = 123;
numFun(inNum);

// boolean
function boolFun(b: boolean) {
    console.log(b);
}
const inBool = false;
boolFun(inBool);

// 数组
const arr1: number[] = [12, 33, 5];
const arr2: Array<number> = [12, 33, 5, null, undefined];
const arr3: Array<number | string> = [12, 33, 5, "dd"];

// 元祖 Tuple
const tuple1: [string, boolean, number] = ["123", true, 123];
// const tuple2: [string, boolean, number] = ["123", true, 123, "1"];
const tuple2: [string, number] = ["123", 123];
// tuple2[4] = 123;

// 枚举 enum
enum State {
    success = 200,
    error = 400,
}
const succ: State = State.success;
const succ2: State = 800;
console.log(succ);

// 任意类型any
let anyStr: any = "123";
anyStr = 123;
anyStr = true;
let anyArr: any[] = [12, true, "123"];

// void
function fun1(): void {
    console.log("wxf");
}
function fun2(): number {
    console.log("wxf");
    return 1;
}
const voidVar: void = null;
const voidVar2: void = undefined;

// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
const nullVar: null = null;
const nullVar2: null = undefined;
const undefinedVar: undefined = undefined;
const undefinedVar2: undefined = null;

// never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
// const never1: never = 123;
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail(): never {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {}
}

// object类型
const obj: object = { a: 10 };
const obj2: object = [123];
const obj3: object = function() {};

// 类型断言
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;

export {};
