class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    // public的变量会定义到类里面
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

// 此处的Person应用的demo2里面的
function greeter(person: Person): string {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

greeter(user);
