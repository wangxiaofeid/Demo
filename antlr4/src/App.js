import React, { useState } from "react";
import { Input, Button } from "antd";
// import { execute } from "./antlr";
import { execute } from "./antlrx";

export default function App() {
    const [value, setValue] = useState(undefined);
    const onRun = () => {
        try {
            console.log(execute(value));
        } catch (error) {
            console.log("捕获错误", error);
        }
    };
    return (
        <div>
            <Input.TextArea value={value} onChange={(e) => setValue(e.target.value)}></Input.TextArea>
            <Button onClick={onRun} type="primary">
                执行
            </Button>
            <div id="xxx"></div>
        </div>
    );
}
