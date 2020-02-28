import React, { Fragment } from "react";
import PrevState from "./PrevState";
import TestWidth from "./TestWidth";
import Form from "./Form";

/** 这里有很多 https://hooks.umijs.org/zh-CN/dom/use-hover */

export default function GoodHook() {
    return (
        <Fragment>
            <PrevState />
            <hr />
            <TestWidth />
            <hr />
            <Form />
        </Fragment>
    );
}
