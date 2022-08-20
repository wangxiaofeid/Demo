namespace demo13 {
  interface Named {
    name: string;
  }

  class Person {
    name: string;
  }

  let p: Named;
  // OK, because of structural typing
  p = new Person();

  let x: Named;
  // y's inferred type is { name: string; location: string; }
  let y = { name: "Alice", location: "Seattle" };
  x = y;

  function greet(n: Named) {
    console.log("Hello, " + n.name);
  }
  greet(y); // OK

  let xx = (a: number) => 0;
  let yy = (b: number, s: string) => 0;
  yy = xx; // OK
  // xx = yy; // Error

  let items = [1, 2, 3];
  // Don't force these extra arguments
  items.forEach((item, index, array) => console.log(item));
  // Should be OK!
  items.forEach((item) => console.log(item));

  let xxx = () => ({ name: "Alice" });
  let yyy = () => ({ name: "Alice", location: "Seattle" });
  xxx = yyy; // OK
  // yyy = xxx; // Error, because x() lacks a location property

  enum EventType {
    Mouse,
    Keyboard
  }

  interface Event {
    timestamp: number;
  }
  interface MouseEvent extends Event {
    x: number;
    y: number;
  }
  interface KeyEvent extends Event {
    keyCode: number;
  }

  function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
  }

  // Unsound, but useful and common
  // listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + "," + e.y));

  // Undesirable alternatives in presence of soundness
  listenEvent(EventType.Mouse, (e: Event) =>
    console.log((<MouseEvent>e).x + "," + (<MouseEvent>e).y)
  );
  listenEvent(EventType.Mouse, <(e: Event) => void>(
    ((e: MouseEvent) => console.log(e.x + "," + e.y))
  ));

  // Still disallowed (clear error). Type safety enforced for wholly incompatible types
  // listenEvent(EventType.Mouse, (e: number) => console.log(e));

  // 枚举
  enum Status {
    Ready,
    Waiting
  }
  enum Color {
    Red,
    Blue,
    Green
  }

  let status = Status.Ready;
  // status = Color.Green; // Error  Type 'Color.Green' is not assignable to type 'Status'

  // 类
  class Animal {
    feet: number;
    constructor(name: string, numFeet: number) {}
  }
  class Size {
    feet: number;
    constructor(numFeet: number) {}
  }
  let a: Animal;
  let s: Size = new Size(1);
  a = s; // OK
  s = a; // OK

  // 泛型
  // interface Empty<T> {}
  // let x: Empty<number>;
  // let y: Empty<string>;
  // x = y; // OK, because y matches structure of x
  // interface NotEmpty<T> {
  //   data: T;
  // }
  // let mx: NotEmpty<number>;
  // let my: NotEmpty<string>;
  // mx = my; // Error, because x and y are not compatible
}
