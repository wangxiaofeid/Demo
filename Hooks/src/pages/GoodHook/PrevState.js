import React, { useState, useEffect, useRef } from "react";
import { Button } from "antd";

// 定时器也可以存在ref里面
function usePrev(num) {
    const ref = useRef();
    useEffect(() => {
        ref.current = num;
    });
    return ref.current;
}

export default function PrevState() {
    const [num, setNum] = useState(1);
    const prevNum = usePrev(num);
    return (
        <div>
            这一次：{num}；上一次{prevNum}
            <Button
                onClick={() => {
                    setNum(prev => prev + 1);
                }}
            >
                增加
            </Button>
            <Button
                onClick={() => {
                    setNum(prev => prev - 1);
                }}
            >
                减少
            </Button>
        </div>
    );
}
