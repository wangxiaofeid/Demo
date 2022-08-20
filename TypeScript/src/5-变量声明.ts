// 变量声明 https://www.tslang.cn/docs/handbook/variable-declarations.html
// let 块级作用域，不会变量提升，声明之前不能访问-暂时性死区
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100 * i);
}
