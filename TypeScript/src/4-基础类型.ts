/**
  基础类型
  string
  number
  boolean
  symbol
  any                      任意
  unknown                  不知道什么--》unknown不可以赋值给其他类型，any可以赋值给其他类型，会污染其他变量的类型
  字面量类型
  string[] Array<string>   数组
  [string, number]         元组
  enum                     枚举
  object{name: string, value: number}  对象
  void                     返回空
  never                    没有返回--》抛异常，无限循环
  null
  undefined
 */

let a: string = "111";
let b: number = 111;
let c: boolean = true;
let d: string[] = ["1", "2"]; //数组
let dd: string[][] = [["1", "2"]]; //数组
let f: [string, number]; //元组 Tuple
f = ["11", 22];
// f = ["222", "11"];  // 报错
console.log(f[0].split(" "));
// console.log(f[1].split(" "));  // 报错
// f[5] = "dd"; // error Tuple type '[string, number]' of length '2' has no element at index '5'
let ss: symbol = Symbol();
// ss = 111; // Type 'number' is not assignable to type 'symbol'
let aa: any = 1,
  bb: unknown = 2,
  cc: unknown = 3;
aa = bb;
a = aa;
// a = bb;  // Type 'unknown' is not assignable to type 'string'
bb = cc;

enum Color { //枚举
  RED = "#ff0000",
  GREEN = "#ff0001",
  BLUE = "#ff0002"
} // 枚举
let g: Color = Color.RED;

enum Num {
  ONE = 1,
  TWO,
  THREE = "three"
}
let h: Num = Num.TWO;

let i: string = Color.RED; // 说明ts会推断枚举类型的数据类型
let j: number = Num.TWO;
// let k: number = Num.THREE; // error  Type 'Num' is not assignable to type 'number'
let k: string = Num.THREE;

let l: any = "11"; // any类型--任意类型
l = true;
let m: any[] = [1, true, "true", undefined];

// void类型
function n(): void {
  // void 没有返回
  console.log("没有返回的函数");
}
let o: void = undefined;
// let p: void = null; // error Type 'null' is not assignable to type 'void'

// Null 和 Undefined -- 没多大意义
let q: null = null;
let r: undefined = undefined;

/**
never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
 */
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}
let s: never = error("11");

/**
object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
 */
declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// 类型断言
// 方式一
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
// 方式二
let strLength2: number = (someValue as string).length;
