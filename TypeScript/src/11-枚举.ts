/**
枚举
使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript支持数字的和基于字符串的枚举。
 */
namespace demo11 {
  enum num1 {
    one = 1,
    two,
    three
  }
  enum num2 {
    one = 2,
    two,
    three
  }
  enum num3 {
    one,
    two = 4,
    three
  }
  enum num4 {
    one,
    two,
    three = 4
  }
  enum num5 {
    one = -2,
    two,
    three
  }
  enum num6 {
    one = -1.7,
    two,
    three
  }
  // enum num7 {
  //   one = true,
  //   two = false
  // }  // Only numeric enums can have computed members, but this expression has type 'true'. If you do not need exhaustiveness checks, consider using an object literal instead.
  // enum num8 {
  //   one = "aa",
  //   two,
  //   three
  // }  // Enum member must have initializer

  function respond(recipient: string, message: num6): void {
    // ...
  }
  respond("Princess Caroline", num6.one);

  // 异构枚举
  enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES"
  }
  function respond2(recipient: string, message: BooleanLikeHeterogeneousEnum): number | string {
    return message;
  }
  respond2("Princess Caroline", BooleanLikeHeterogeneousEnum.No);

  // 联合枚举与枚举成员的类型
  enum ShapeKind {
    Circle,
    Square
  }
  interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
  }
  interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
  }
  let c: Circle = {
    // kind: ShapeKind.Square,
    //    ~~~~~~~~~~~~~~~~ Error!

    kind: 1,
    radius: 100
  };

  enum E {
    // Foo,
    // Bar
    Foo = 2,
    Bar = 2
  }
  function f(x: E) {
    if (x !== E.Foo || x !== E.Bar) {
      //             ~~~~~~~~~~~
      // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
    }
  }

  // 运行时的枚举
  enum E {
    X,
    Y,
    Z
  }
  function f2(obj: { X: number }): number {
    return obj.X;
  }
  // Works, since 'E' has a property named 'X' which is a number.
  f2(E);

  // 反向映射--不会为字符串枚举成员生成反向映射
  enum Enum {
    A
    // A = true // Only numeric enums can have computed members, but this expression has type 'true'. If you do not need exhaustiveness checks, consider using an object literal instead
    // A = "AAA"
  }
  let a = Enum.A;
  let nameOfA = Enum[a]; // "A"

  // 常量枚举 --- 常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除
  const enum Enum2 {
    A = 1,
    B = A * 2
  }
  let directions = [Enum2.A, Enum2.B];

  // 外部枚举
  declare enum Enum3 {
    A = 1,
    B,
    C = 2
  }
}
