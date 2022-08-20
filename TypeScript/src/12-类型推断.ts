namespace demo12 {
  // 通用类型
  let x = [0, 1, null]; // 推断为 number | null
  // x[4] = "ss";  // Type 'string' is not assignable to type 'number'
  x[5] = null;
  // x[6] = "11";

  // 上下文类型
  window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.button); //<- Error
  };
  window.onmousedown = function (mouseEvent: any) {
    console.log(mouseEvent.button); //<- Now, no error is given
  };
}
