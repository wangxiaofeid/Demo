namespace demo14 {
  // 交叉类型
  function merge<T, H>(a: T, b: H): T & H {
    return { ...a, ...b };
  }
  function merge2<T, H>(a: T, b: H): T | H {
    if (a && b) {
      return a;
    } else {
      return b;
    }
  }

  // 联合类型
  /**
   * Takes a string and adds "padding" to the left.
   * If 'padding' is a string, then 'padding' is appended to the left side.
   * If 'padding' is a number, then that number of spaces is added to the left side.
   */
  function padLeft(value: string, padding: number | string) {
    if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
  }
  padLeft("Hello world", 4); // returns "    Hello world"
  // padLeft("Hello world", true); // 编译阶段通过，运行时报错

  interface Bird {
    fly(): void;
    layEggs(): void;
  }
  interface Fish {
    swim(): void;
    layEggs(): void;
  }
  class FishClass implements Fish {
    swim() {}
    layEggs() {}
  }
  function getSmallPet(): Fish | Bird {
    return new FishClass();
  }
  let pet = getSmallPet();
  pet.layEggs(); // okay
  // pet.swim(); // errors

  // 类型保护与区分类型
  let pet2 = getSmallPet();
  // 每一个成员访问都会报错
  if ((<Fish>pet2).swim) {
    (<Fish>pet2).swim();
  } else if ((<Bird>pet2).fly) {
    (<Bird>pet2).fly();
  }

  // 用户自定义的类型保护
  function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
  }
  if (isFish(pet2)) {
    pet2.swim();
  } else {
    pet2.fly();
  }

  // typeof类型保护
  function isNumber(x: any): x is number {
    return typeof x === "number";
  }
  function isString(x: any): x is string {
    return typeof x === "string";
  }
  function padLeft2(value: string, padding: string | number) {
    if (isNumber(padding)) {
      return Array(padding + 1).join(" ") + value;
    }
    if (isString(padding)) {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
  }

  function padLeft3(value: string, padding: string | number) {
    if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
  }

  // instanceof类型保护
  interface Padder {
    getPaddingString(): string;
  }
  class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) {}
    getPaddingString() {
      return Array(this.numSpaces + 1).join(" ");
    }
  }
  class StringPadder implements Padder {
    constructor(private value: string) {}
    getPaddingString() {
      return this.value;
    }
  }
  function getRandomPadder() {
    return Math.random() < 0.5 ? new SpaceRepeatingPadder(4) : new StringPadder("  ");
  }
  // 类型为SpaceRepeatingPadder | StringPadder
  let padder: Padder = getRandomPadder();

  if (padder instanceof SpaceRepeatingPadder) {
    padder; // 类型细化为'SpaceRepeatingPadder'
  }
  if (padder instanceof StringPadder) {
    padder; // 类型细化为'StringPadder'
  }

  // 可以为null的类型
  let s = "foo";
  // s = null; // 错误, 'null'不能赋值给'string'
  let sn: string | null = "bar";
  sn = null; // 可以
  // sn = undefined; // error, 'undefined'不能赋值给'string | null'

  // 可选参数和可选属性
  function f(x: number, y?: number) {
    return x + (y || 0);
  }
  f(1, 2);
  f(1);
  f(1, undefined);
  // f(1, null); // error, 'null' is not assignable to 'number | undefined'
  class D {
    a: number;
    b?: number;
  }
  let c = new D();
  c.a = 12;
  // c.a = undefined; // error, 'undefined' is not assignable to 'number'
  c.b = 13;
  c.b = undefined; // ok
  // c.b = null; // error, 'null' is not assignable to 'number | undefined'

  // 类型保护和类型断言
  function f2(sn: string | null): string {
    return sn || "default";
  }

  // function broken(name: string | null): string {
  //   function postfix(epithet: string) {
  //     return name.charAt(0) + ".  the " + epithet; // error, 'name' is possibly null
  //   }
  //   name = name || "Bob";
  //   return postfix("great");
  // }
  function fixed(name: string | null): string {
    function postfix(epithet: string) {
      return name!.charAt(0) + ".  the " + epithet; // ok  类型里去除了 null和 undefined
    }
    name = name || "Bob";
    return postfix("great");
  }

  // 类型别名
  type Name = string;
  type NameResolver = () => string;
  type NameOrResolver = Name | NameResolver;
  function getName(n: NameOrResolver): Name {
    if (typeof n === "string") {
      return n;
    } else {
      return n();
    }
  }

  type Container<T> = { value: T };
  type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
  };

  // type LinkedList<T> = T & { next?: LinkedList<T> };
  // interface Person {
  //   name: string;
  // }
  // var people: LinkedList<Person>;
  // var s1 = people.name;
  // var s2 = people.next.name;
  // var s3 = people.next.next.name;
  // var s4 = people.next.next.next.name;

  type Yikes = Array<Yikes>; // 类型别名不能出现在声明右侧的任何地方。

  // 接口 vs. 类型别名
  type Alias = { num: number };
  interface Interface {
    num: number;
  }
  declare function aliased(arg: Alias): Alias;
  declare function interfaced(arg: Interface): Interface;

  // 字符串字面量类型
  type Easing = "ease-in" | "ease-out" | "ease-in-out";
  class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
      if (easing === "ease-in") {
        // ...
      } else if (easing === "ease-out") {
      } else if (easing === "ease-in-out") {
      } else {
        // error! should not pass null or undefined.
      }
    }
  }
  let button = new UIElement();
  button.animate(0, 0, "ease-in");
  // button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here

  // function createElement(tagName: "img"): HTMLImageElement;
  // function createElement(tagName: "input"): HTMLInputElement;
  // ... more overloads ...
  // function createElement(tagName: string): Element {
  //   // ... code goes here ...
  // }

  // 可辨识联合
  interface Square {
    kind: "square";
    size: number;
  }
  interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
  }
  interface Circle {
    kind: "circle";
    radius: number;
  }
  interface Triangle {
    kind: "triangle";
    radius: number;
  }
  type Shape = Square | Rectangle | Circle;

  function area(s: Shape) {
    switch (s.kind) {
      case "square":
        return s.size * s.size;
      case "rectangle":
        return s.height * s.width;
      case "circle":
        return Math.PI * s.radius ** 2;
    }
  }
  let shape: Shape = {
    kind: "circle",
    radius: 1
  };
  area(shape);
  shape = {
    kind: "square",
    size: 1
  };
  area(shape);

  // 完整性检查
  type Shape2 = Square | Rectangle | Circle | Triangle;
  function area2(s: Shape2): number {
    switch (s.kind) {
      case "square":
        return s.size * s.size;
      case "rectangle":
        return s.height * s.width;
      case "circle":
        return Math.PI * s.radius ** 2;
      case "triangle":
        return Math.PI * s.radius ** 2;
    }
    // should error here - we didn't handle case "triangle"
  }
  function assertNever(x: any): never {
    throw new Error("Unexpected object: " + x);
  }
  function area3(s: Shape2) {
    switch (s.kind) {
      case "square":
        return s.size * s.size;
      case "rectangle":
        return s.height * s.width;
      case "circle":
        return Math.PI * s.radius ** 2;
      default:
        return assertNever(s);
    }
  }

  // 多态的 this类型
  class BasicCalculator {
    public constructor(protected value: number = 0) {}
    public currentValue(): number {
      return this.value;
    }
    public add(operand: number): this {
      this.value += operand;
      return this;
    }
    public multiply(operand: number): this {
      this.value *= operand;
      return this;
    }
    // ... other operations go here ...
  }
  let v = new BasicCalculator(2).multiply(5).add(1).currentValue();

  class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
      super(value);
    }
    public sin() {
      this.value = Math.sin(this.value);
      return this;
    }
    // ... other operations go here ...
  }
  let v2 = new ScientificCalculator(2).multiply(5).sin().add(1).currentValue();

  // 索引类型   keyof
  function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map((n) => o[n]);
  }
  interface Person {
    name: string;
    age: number;
  }
  let person: Person = {
    name: "Jarid",
    age: 35
  };
  let strings1: string[] = pluck(person, ["name"]); // ok, string[]
  let strings2: number[] = pluck(person, ["age"]); // ok, string[]

  // 索引类型和字符串索引签名
  interface Map<T> {
    [key: string]: T;
  }
  let keys: keyof Map<number>; // string
  let value: Map<number>["foo"]; // number

  // 映射类型
  interface PersonPartial {
    name?: string;
    age?: number;
  }
  interface PersonReadonly {
    readonly name: string;
    readonly age: number;
  }
  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };
  type Partial<T> = {
    [P in keyof T]?: T[P];
  };
  type PersonPartial2 = Partial<Person>;
  type ReadonlyPerson2 = Readonly<Person>;
  type Keys = "option1" | "option2";
  type Flags = { [K in Keys]: boolean };

  // 预定义的有条件类型
  /**
    TypeScript 2.8在lib.d.ts里增加了一些预定义的有条件类型：
      Exclude<T, U> -- 从T中剔除可以赋值给U的类型。
      Extract<T, U> -- 提取T中可以赋值给U的类型。
      NonNullable<T> -- 从T中剔除null和undefined。
      ReturnType<T> -- 获取函数返回值类型。
      InstanceType<T> -- 获取构造函数类型的实例类型。
   */
  type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">; // "b" | "d"
  type T01 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">; // "a" | "c"

  type T02 = Exclude<string | number | (() => void), Function>; // string | number
  type T03 = Extract<string | number | (() => void), Function>; // () => void

  type T04 = NonNullable<string | number | undefined>; // string | number
  type T05 = NonNullable<(() => string) | string[] | null | undefined>; // (() => string) | string[]

  function f1(s: string) {
    return { a: 1, b: s };
  }
  class C {
    x = 0;
    y = 0;
  }
  type T10 = ReturnType<() => string>; // string
  type T11 = ReturnType<(s: string) => void>; // void
  type T12 = ReturnType<<T>() => T>; // {}
  type T13 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]
  type T14 = ReturnType<typeof f1>; // { a: number, b: string }
  type T15 = ReturnType<any>; // any
  type T16 = ReturnType<never>; // any
  // type T17 = ReturnType<string>; // Error
  // type T18 = ReturnType<Function>; // Error

  type T20 = InstanceType<typeof C>; // C
  type T21 = InstanceType<any>; // any
  type T22 = InstanceType<never>; // any
  // type T23 = InstanceType<string>; // Error
  // type T24 = InstanceType<Function>; // Error
}
