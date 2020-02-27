import React, { useState, useEffect } from "react";
import { Card } from "antd";

let sto = null;

/**
 * 如果你传入了一个空数组（[]），effect 内部的 props 和 state 就会一直持有其初始值。
 */

export default function Clear() {
    const [a, setA] = useState(1);
    const [b, setB] = useState(false);
    useEffect(() => {
        if (!b) {
            sto = setInterval(() => {
                setA(a + 1);
                console.log("hh" + a);
            }, 1000);
            setB(true);
        }
        /** 销毁副作用的函数会在componentDidMount、componentDidUpdate 和 componentWillUnmount的时候执行 */
        return function() {
            console.log("销毁");
            clearInterval(sto);
        };
    }, []);
    return (
        <Card title="如何清除Effect" style={{ width: 300 }}>
            {a}
        </Card>
    );
}
