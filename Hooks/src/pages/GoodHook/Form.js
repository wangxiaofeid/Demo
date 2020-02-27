// 如何从 useCallback 读取一个经常变化的值？
// 说明在函数组件里面定义的函数，会在每次重新执行的时候拥有当时的上下文
/*
function Form() {
    const [text, updateText] = useState("");
    const textRef = useRef();

    useEffect(() => {
        textRef.current = text; // 把它写入 ref
    });

    const handleSubmit = useCallback(() => {
        const currentText = textRef.current; // 从 ref 读取它
        alert(currentText);
    }, [textRef]); // 不要像 [text] 那样重新创建 handleSubmit

    return (
        <>
            <input value={text} onChange={e => updateText(e.target.value)} />
            <ExpensiveTree onSubmit={handleSubmit} />
        </>
    );
}
*/
import React, { useEffect, useState, useRef, useCallback } from "react";
export default function Form() {
    const [text, updateText] = useState(1);
    // 方法1每次都会重新生成handleSubmit
    // const handleSubmit = () => {
    //     console.log(text);
    // };
    // 方法二不会，他会把依赖的值暂存起来
    const handleSubmit = useCreateEvent(() => {
        console.log(text);
    }, [text]);
    return (
        <>
            <input value={text} onChange={e => updateText(e.target.value)} />
            <Demo handleSubmit={handleSubmit}>提交</Demo>
        </>
    );
}

function useCreateEvent(fn, arr) {
    const ref = useRef(() => {
        console.log("初始函数");
    });
    useEffect(() => {
        console.log("useEffect执行");
        ref.current = fn;
    }, [fn, ...arr]);
    return useCallback(() => {
        const fn = ref.current;
        return fn();
    }, [ref]);
}

const Demo = React.memo(({ handleSubmit }) => {
    console.log("demo重渲染");
    return <button onClick={handleSubmit}>提交</button>;
});
