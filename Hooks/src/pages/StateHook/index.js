import React, { useState } from "react";
import { Button } from "antd";

export default function StateHooks() {
    const [num, setNum] = useState(1);
    return (
        <div>
            {num}
            <Button onClick={() => setNum(num + 1)}>增加</Button>
            <Button onClick={() => setNum(oldNum => oldNum + 1)}>增加</Button>
        </div>
    );
}
