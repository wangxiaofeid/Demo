namespace demo8 {
  /**
类：
传统的JavaScript程序使用函数和基于原型的继承来创建可重用的组件，但对于熟悉使用面向对象方式的程序员来讲就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。 从ECMAScript 2015，也就是ECMAScript 6开始，JavaScript程序员将能够使用基于类的面向对象的方式。 使用TypeScript，我们允许开发者现在就使用这些特性，并且编译后的JavaScript可以在所有主流浏览器和平台上运行，而不需要等到下个JavaScript版本。
*/
  class Greeter {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    output(msg: string): void {
      console.log(`${this.name}:${msg}`);
    }
  }
  const gg = new Greeter("wxf");
  gg.output("hello");

  // 继承
  class Animal {
    name: string;
    private cname: string = "mock";
    protected pName: string = "pName";
    constructor(theName: string) {
      this.name = theName;
    }
    move(distanceInMeters: number = 0): void {
      console.log(`Animal moved ${distanceInMeters}m.`);
    }
  }
  class Dog extends Animal {
    constructor(name: string) {
      super(name);
    }
    bark(): void {
      console.log("Woof! Woof!");
    }
    move(distanceInMeters: number = 3) {
      super.move(distanceInMeters);
    }
    // sayCName(): void {
    //   console.log(this.cname);
    // }
    sayPName(): void {
      console.log(this.pName);
    }
  }
  const dog = new Dog("wxf");
  dog.bark();
  dog.move(10);
  dog.bark();
  // dog.cname; // Property 'cname' is private and only accessible within class 'Dog'.
  // dog.sayCName();  // Property 'cname' is private and only accessible within class 'Animal'.
  dog.sayPName();

  // 公共，私有与受保护的修饰符
  // 当成员被标记成 private时，它就不能在声明它的类的外部访问。
  // protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问

  class Person3 {
    protected name: string;
    protected constructor(theName: string) {
      this.name = theName;
    }
  }
  // Employee 能够继承 Person
  class Employee extends Person3 {
    private department: string;

    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }

    public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
  }
  let howard = new Employee("Howard", "Sales");
  // let john = new Person3("John"); // 错误: 'Person' 的构造函数是被保护的.-- 受保护的构造函数不能new

  // readonly修饰符
  // 你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
  class Octopus {
    readonly name: string = "222";
    readonly numberOfLegs: number = 8;
    constructor(theName: string) {
      this.name = theName;
    }
  }
  let dad = new Octopus("Man with the 8 strong legs");
  // dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.

  // 存取器
  let passcode = "secret passcode";
  class Employee2 {
    private _fullName: string;
    get fullName(): string {
      return this._fullName;
    }
    set fullName(newName: string) {
      if (passcode && passcode == "secret passcode") {
        this._fullName = newName;
      } else {
        console.log("Error: Unauthorized update of employee!");
      }
    }
  }
  let employee = new Employee2();
  employee.fullName = "Bob Smith";
  if (employee.fullName) {
    alert(employee.fullName);
  }

  // 静态属性
  // 到目前为止，我们只讨论了类的实例成员，那些仅当类被实例化的时候才会被初始化的属性。 我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上
  interface Point {
    x: number;
    y: number;
  }
  class Grid {
    protected static origin = { x: 0, y: 0 };
    calculateDistanceFromOrigin(point: Point): number {
      let xDist = point.x - Grid.origin.x;
      let yDist = point.y - Grid.origin.y;
      return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale: number) {}
  }

  let grid1 = new Grid(1.0); // 1x scale
  let grid2 = new Grid(5.0); // 5x scale
  console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
  console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

  // 抽象类
  abstract class Animal2 {
    abstract say(): void; // 必须在派生类中实现
    constructor(public name: string) {}
    move(name: string): void {
      console.log(name);
    }
  }
  class Person extends Animal2 {
    constructor(name: string) {
      super(name);
    }
    say() {
      console.log(this.name);
    }
  }

  abstract class Department {
    constructor(public name: string) {}
    printName(): void {
      console.log("Department name: " + this.name);
    }
    abstract printMeeting(): void; // 必须在派生类中实现
  }
  class AccountingDepartment extends Department {
    constructor() {
      super("Accounting and Auditing"); // 在派生类的构造函数中必须调用 super()
    }
    printMeeting(): void {
      console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports(): void {
      console.log("Generating accounting reports...");
    }
  }

  let department: Department; // 允许创建一个对抽象类型的引用
  // department = new Department(); // 错误: 不能创建一个抽象类的实例
  department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
  department.printName();
  department.printMeeting();
  // department.generateReports(); // 错误: 方法在声明的抽象类中不存在
}
