interface Person {
  // 根据现象interface是全局的命名作用域
  firstName: string;
  lastName: string;
  age?: number;
  isBoy?: boolean; // 标志可以没有
}

function test(person: Person): number {
  // 标志返回值
  console.log(`${person.firstName}:${person.age}`);
  return person.age || 0;
}

console.log(
  test({
    firstName: "wxf",
    lastName: "wxf",
    age: 1
    // isBoy: true,
  }) + 414 // "414" true   number可以和字符串类型相加，不可以和boolean类型相加
);
