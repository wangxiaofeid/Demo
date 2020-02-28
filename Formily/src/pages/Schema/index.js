import React, { Component } from "react";
import {
    SchemaForm,
    SchemaMarkupField as Field,
    registerFormComponent,
    registerFormItemComponent,
} from "@formily/antd"; // 或者 @formily/next
import { Input, Select } from "antd";

// registerFormComponent(props => {
//     return <div>全局扩展Form组件{props.children}</div>;
// });

// registerFormItemComponent(props => {
//     return <div>全局扩展FormItem组件{props.children}</div>;
// });

export default function Schema() {
    return (
        <SchemaForm
            components={{ Input }}
            onSubmit={values => {
                console.log(values);
            }}
        >
            <Field type="string" name="name" title="Name" x-component="Input" />
        </SchemaForm>
    );
}
