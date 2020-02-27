import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Get } from "@/utils/fetchHander";
import Clear from "./Clear";
import TestYiLai from "./TestYiLai";

/**
 * useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API。
 * 第二个参数是重新执行的条件；如果为空数组则不会再componentDidUpdate的时候执行；如果为undefined时候则每次都执行；如果数组有值则浅比较
 */

export default function EffectHook() {
    const [num, setNum] = useState(1);
    const [list, setList] = useState([]);

    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${num} times`;
        Get("/api/user/query").then(res => {
            console.log(res);
            if (res.success) {
                setList(res.result.list);
            }
        });
        console.log(document.getElementById("ddd").innerText); // 说明会在componentDidMount、componentDidUpdate后执行
    }, []);

    return (
        <div>
            <div id="ddd">{num}</div>
            <Button onClick={() => setNum(num + 1)}>增加</Button>
            {list.map(({ id }) => id).join(",")}
            <Clear />
            <TestYiLai />
        </div>
    );
}
