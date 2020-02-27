import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";

/**
 * 如果你传入了一个空数组（[]），effect 内部的 props 和 state 就会一直持有其初始值。
 * useEffect内部的异步函数只会取执行useEffect时候的上下文
 */

export default function Clear() {
    const [a, setA] = useState(1);
    const [b, setB] = useState(1);
    useEffect(() => {
        setTimeout(() => {
            console.log("sto", a, b);
        }, 3000);
        console.log("out", a, b);
    }, [a]);
    return (
        <Card title="依赖数组的问题" style={{ width: 300 }}>
            <p>
                a：{a}
                <Button
                    onClick={() => {
                        setA(prev => prev + 1);
                    }}
                >
                    变化
                </Button>
            </p>
            <p>
                b：{b}
                <Button
                    onClick={() => {
                        setB(prev => prev + 1);
                    }}
                >
                    变化
                </Button>
            </p>
        </Card>
    );
}
