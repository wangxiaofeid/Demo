// TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  // newSquare.color = config.color;  // Type 'string | undefined' is not assignable to type 'string'.Type 'undefined' is not assignable to type 'string'.
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });

// 只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}

let p: Point = {
  x: 1,
  y: 2
};
// p.x = 33; // Cannot assign to 'x' because it is a read-only property
let pa: ReadonlyArray<number> = [1, 2, 3];
// pa[3] = 10; // Index signature in type 'readonly number[]' only permits reading
// pa.push(11); // Property 'push' does not exist on type 'readonly number[]'
// pa.length = 100;  // Cannot assign to 'length' because it is a read-only property
let newArr = pa;
pa = [4, 5, 6];
/**
总结：const和ReadonlyArray数据的区别；
const是不可以改变数组的引用
ReadonlyArray是数组的值不可以修改和添加等
 */

// 额外的属性检查
// let mySquare1 = createSquare({ colour: "red", width: 100 });
let mySquare2 = createSquare({ colour: "red", width: 100 } as SquareConfig); //使用类型断言
let mySquare3 = createSquare(<SquareConfig>{ colour: "red", width: 100 }); //使用类型断言
// 方法二-索引签名
interface SquareConfig2 {
  color?: string;
  width?: number;
  [key: string]: any; // 多个属性共用-表示当前所有数据需要符合
}
function createSquare2(config: SquareConfig2): void {}
let mySquare4 = createSquare2({ colour: "red", width: 100, height: 100 });

// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let fun: SearchFunc = function (aa: string, subString: string) {
  // return aa + subString; // error
  return aa === subString;
};

// 可索引的类型
interface StringArray {
  [index: number]: string;
}
let arr: StringArray = ["1", "2", "3"];
let obj: StringArray = {
  1: "1",
  // 2: 2, // error Type 'number' is not assignable to type 'string'
  "3": "3" // 这个不报错
};
interface StringArray2 {
  [index: string]: string;
}
let obj2: StringArray2 = {
  1: "1",
  "3": "3" // 这个不报错
};

// 可以将索引签名设置为只读，这样就防止了给索引赋值---和ReadonlyArray[string]一个效果
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[1] = "Mallory"; // error!
myArray = ["1", "2", "3"];

// 类类型
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}
class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {
    // this.currentTime = new Date(); // Property 'currentTime' has no initializer and is not definitely assigned in the constructor.   需要配置这个 strictPropertyInitialization
  }
}

// 类静态部分与实例部分的区别
interface ClockInterface2 {
  tick(): void;
}
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface2;
}
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface2 {
  return new ctor(hour, minute);
}
class Clock2 implements ClockInterface2 {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}
let clock = createClock(Clock2, 11, 22);

// 继承接口
interface Shape {
  color: string;
}
interface PenStroke {
  penWidth: number;
}
interface Square extends Shape, PenStroke {
  sideLength: number;
}
let square = <Square>{};
square.color = "blue";
square.penWidth = 10;
square.sideLength = 10;

// 混合类型
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function (start: number) {};
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}
let cx = getCounter();
cx(10);
cx.reset();
cx.interval = 5.0;

// 接口继承类
// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 接口同样会继承到类的private和protected成员。 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。
// 当你有一个庞大的继承结构时这很有用，但要指出的是你的代码只在子类拥有特定属性时起作用。 这个子类除了继承至基类外与基类没有任何关系。 例：
class Control {
  private state: any;
}
interface SelectableControl extends Control {
  select(): void;
}
class Button extends Control implements SelectableControl {
  select() {}
}
class TextBox extends Control {
  select() {}
}
// 错误：“Image”类型缺少“state”属性。
// class Images implements SelectableControl {
//   select() {}
// }

// 在上面的例子里，SelectableControl包含了Control的所有成员，包括私有成员state。 因为 state是私有成员，所以只能够是Control的子类们才能实现SelectableControl接口。 因为只有 Control的子类才能够拥有一个声明于Control的私有成员state，这对私有成员的兼容性是必需的。

// 在Control类内部，是允许通过SelectableControl的实例来访问私有成员state的。 实际上， SelectableControl接口和拥有select方法的Control类是一样的。 Button和TextBox类是SelectableControl的子类（因为它们都继承自Control并有select方法），但Image和Location类并不是这样的。
