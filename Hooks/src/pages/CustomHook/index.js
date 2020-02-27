import React, { useState } from "react";
import { Button } from "antd";

/**
 * 重用状态逻辑，数据不共享，所有的state和effect都往前隔离的
 */

function useMyHooks() {
    const state1 = useState(1);
    return state1;
}

export default function CustomHook() {
    return (
        <div>
            <Child />
            <Child />
            <Child />
            <Child />
            <Reducer />
        </div>
    );
}

function Child() {
    const [num, setNum] = useMyHooks();
    return (
        <div>
            {num}
            <Button onClick={() => setNum(num + 1)}>增加</Button>
        </div>
    );
}

function useReducer(reducer, initState) {
    const [state, setState] = useState(initState);
    function dispatch(action) {
        const newState = reducer(state, action);
        setState(newState);
    }
    return [state, dispatch];
}

function Reducer() {
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case "add": // 会浅比较，如果值一样不会重渲染后执行effect
                    // state.push(action.num || 1);
                    // return state;
                    return [...state, action.num || 1];
                case "remove":
                    return state.slice(0, state.length - 1);
                case "clear":
                    return [];
                default:
                    return state;
            }
        },
        [1]
    );
    return (
        <div>
            reducer: {state.join(",")}
            <Button onClick={() => dispatch({ type: "add" })}>增加</Button>
            <Button onClick={() => dispatch({ type: "add", num: 100 })}>增加100</Button>
            <Button onClick={() => dispatch({ type: "remove" })}>减少</Button>
            <Button onClick={() => dispatch({ type: "clear" })}>清空</Button>
        </div>
    );
}
