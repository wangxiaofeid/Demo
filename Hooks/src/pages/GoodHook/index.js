import React, { Fragment } from "react";
import PrevState from "./PrevState";
import TestWidth from "./TestWidth";
import Form from "./Form";

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
