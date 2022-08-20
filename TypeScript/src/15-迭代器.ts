/**
迭代器和生成器
可迭代性
当一个对象实现了Symbol.iterator属性时，我们认为它是可迭代的。 一些内置的类型如 Array，Map，Set，String，Int32Array，Uint32Array等都已经实现了各自的Symbol.iterator。 对象上的 Symbol.iterator函数负责返回供迭代的值。
 */
namespace demo15 {
  // for..of 语句
  let someArray = [1, "string", false];
  for (let entry of someArray) {
    console.log(entry); // 1, "string", false
  }

  // for..in 语句
  let list = [4, 5, 6];

  for (let i in list) {
    console.log(i); // "0", "1", "2",
  }
}
