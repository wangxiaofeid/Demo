import { useState, useCallback, memo } from 'react';

// function A({ click }) {
//   console.log('a render');
//   return <span onClick={click}>A</span>;
// }

const A = memo(({ click }) => {
  console.log('a render');
  return <span onClick={click}>A</span>;
});

function B({ text }) {
  console.log('b render');
  return <span>{text}</span>;
}
const C = memo(() => {
  console.log('c render');
  return <span>c</span>;
});

export default function XX() {
  const [num, setNum] = useState(0);
  const click = useCallback(() => {
    setNum((num) => num + 1);
  }, []);
  // const click = () => {
  //   setNum((num) => num + 1);
  // };
  return (
    <div>
      <hr />
      <A click={click} />
      <B text={num} />
      <C />
    </div>
  );
}

/*
结论：
1、父组件执行了子组件一定会执行，除非子组件使用了memo且props没有修改（这里的执行指的是生成虚拟dom）
2、
*/
