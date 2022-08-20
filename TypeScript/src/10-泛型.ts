/**
泛型
软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。
https://www.tslang.cn/docs/handbook/generics.html
 */
namespace demo10 {
  function identity<T>(arg: T): T {
    return arg;
  }
  let output = identity<string>("myString"); // type of output will be 'string'
  let output2 = identity<number>(11); // type of output will be 'number'
  let output3 = identity("myString"); // type of output will be 'string'
  let output4 = identity(1); // type of output will be 'string'

  function loggingIdentity<T>(arg: T): T {
    // console.log(arg.length); // Error: T doesn't have .length
    return arg;
  }
  function loggingIdentity2<T>(arg: T[]): T[] {
    console.log(arg.length); // Error: T doesn't have .length
    return arg;
  }
  function loggingIdentity3<T, H>(arg: T[], num: H): T[] {
    console.log(arg.length); // Error: T doesn't have .length
    console.log(num);
    return arg;
  }
  const a: string[] = loggingIdentity3(["11", "33"], 111);
  // const b: string[] = loggingIdentity3(["11", 33], 111); // Type 'number' is not assignable to type 'string'.
  function loggingIdentity4<T, H>(arg: T[], num: H): T {
    console.log(arg.length); // Error: T doesn't have .length
    console.log(num);
    return arg[0];
  }
  // const c: string = loggingIdentity4(["11", 33], 111); // Type 'string | number' is not assignable to type 'string'.Type 'number' is not assignable to type 'string'.
  const d: string | number = loggingIdentity4(["11", 33], 111);

  // 泛型接口
  interface GenericIdentityFn {
    <T>(arg: T): T;
  }
  function identity2<T>(arg: T): T {
    return arg;
  }
  let myIdentity: GenericIdentityFn = identity2;
  let myIdentity2 = identity2;

  // 泛型类
  class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
  }
  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = function (x, y) {
    return x + y;
  };

  // 泛型约束
  interface Lengthwise {
    length: number;
  }
  function loggingIdentity5<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
  }
  // loggingIdentity5(222);  // Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
  loggingIdentity5([]);
  loggingIdentity5("111");
  loggingIdentity5({ length: 10, value: 3 });

  // 在泛型约束中使用类型参数
  function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }
  let x = { a: 1, b: 2, c: 3, d: 4 };
  getProperty(x, "a"); // okay
  // x.m = 11;
  // getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

  // 在泛型里使用类类型
  class BeeKeeper {
    hasMask: boolean = true;
  }
  class ZooKeeper {
    nameTag: string = "true";
  }
  class Animal {
    numLegs: number;
  }
  class Bee extends Animal {
    keeper: BeeKeeper;
  }
  class Lion extends Animal {
    keeper: ZooKeeper;
  }
  function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
  }
  createInstance(Lion).keeper.nameTag; // typechecks!
  createInstance(Bee).keeper.hasMask; // typechecks!
}
