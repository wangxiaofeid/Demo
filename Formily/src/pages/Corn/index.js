import React, { useState } from "react";
import { Button } from "antd";
import Corn from "@xiaofei.wang/react-cron";

const ml10 = { marginLeft: 10 };

export default function CornComp() {
    const [value, setValue] = useState("0 0 0 * * ? *");
    const [value2, setValue2] = useState("0 0 0 * * ? *");
    return (
        <div>
            <Corn
                value={value}
                onChange={value => {
                    setValue(value);
                    console.log(value);
                }}
            />
            <Button
                style={ml10}
                onClick={() => {
                    setValue("0 0 0 2 * ? *");
                }}
                type="primary"
            >
                修改
            </Button>
            <hr />
            <Corn
                value={value2}
                onChange={value => {
                    setValue2(value);
                    console.log(value);
                }}
                multiple
            />
            <Button
                style={ml10}
                onClick={() => {
                    setValue2("6 4 4 ? * 1,3,5 *");
                }}
                type="primary"
            >
                修改
            </Button>
            <hr />
            <Corn />
        </div>
    );
}
