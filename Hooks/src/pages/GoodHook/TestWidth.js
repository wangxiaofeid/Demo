import React, { useState, useCallback, useRef, useMemo, useEffect } from "react";

export default function MeasureExample() {
    const [height, setHeight] = useState(0);

    const measuredRef = useCallback(node => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height);
        }
    });

    return (
        <>
            <h1 ref={measuredRef}>Hello, world</h1>
            <h2>The above header is {Math.round(height)}px tall;</h2>
        </>
    );
}

/* 抽离出独立逻辑
function MeasureExample() {
    const [rect, ref] = useClientRect();
    return (
        <>
            <h1 ref={ref}>Hello, world</h1>
            {rect !== null && <h2>The above header is {Math.round(rect.height)}px tall</h2>}
        </>
    );
}

function useClientRect() {
    const [rect, setRect] = useState(null);
    const ref = useCallback(node => {
        if (node !== null) {
            setRect(node.getBoundingClientRect());
        }
    }, []);
    return [rect, ref];
}
*/
