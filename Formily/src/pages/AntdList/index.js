import React from "react";
import { Form, Input, Button } from "antd";

/**
 antd的form可以做复杂表单；
 也可以复杂表单联动显示隐藏；
 但是联动的修改数值支持的不好；
 */

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
    },
};
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
    },
};

export default function() {
    const onFinish = values => {
        console.log("Received values of form:", values);
    };
    const [form] = Form.useForm();
    return (
        <Form name="dynamic_form_item" form={form} {...formItemLayoutWithOutLabel} onFinish={onFinish}>
            <Form.List name="names">
                {(fields, { add, remove }) => {
                    return (
                        <div>
                            {fields.map((field, index) => (
                                <Form.Item
                                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                    label={index === 0 ? "Passengers" : ""}
                                    required={false}
                                    key={field.key}
                                >
                                    <Form.Item name={[index, "n1"]} noStyle>
                                        <Input placeholder="n1" style={{ width: "30%", marginRight: 8 }} />
                                    </Form.Item>
                                    <Form.Item name={[index, "n2"]} noStyle>
                                        <Input placeholder="n2" style={{ width: "30%", marginRight: 8 }} />
                                    </Form.Item>
                                    <Form.List name={[index, "names"]}>
                                        {(fields, { add, remove }) => {
                                            return (
                                                <div>
                                                    {fields.map((fi, i) => {
                                                        return (
                                                            <Form.Item
                                                                {...(i === 0
                                                                    ? formItemLayout
                                                                    : formItemLayoutWithOutLabel)}
                                                                label={i === 0 ? "inn" : ""}
                                                                required={false}
                                                                key={fi.key}
                                                            >
                                                                <Form.Item name={[i, "c1"]} noStyle>
                                                                    <Input
                                                                        placeholder="c1"
                                                                        style={{ width: "30%", marginRight: 8 }}
                                                                        onChange={e => {
                                                                            form.setFieldsValue({
                                                                                [[
                                                                                    "names",
                                                                                    index,
                                                                                    "names",
                                                                                    i,
                                                                                    "c3",
                                                                                ].join(".")]: "hello",
                                                                            });
                                                                        }}
                                                                    />
                                                                </Form.Item>
                                                                <Form.Item noStyle shouldUpdate>
                                                                    {({ getFieldValue }) => {
                                                                        return getFieldValue([
                                                                            "names",
                                                                            index,
                                                                            "names",
                                                                            i,
                                                                            "c1",
                                                                        ]) === "wxf" ? (
                                                                            <Form.Item name={[i, "c2"]} noStyle>
                                                                                <Input
                                                                                    placeholder="c2"
                                                                                    style={{
                                                                                        width: "30%",
                                                                                        marginRight: 8,
                                                                                    }}
                                                                                />
                                                                            </Form.Item>
                                                                        ) : null;
                                                                    }}
                                                                </Form.Item>
                                                                <Form.Item name={[i, "c3"]} noStyle shouldUpdate>
                                                                    <Input
                                                                        placeholder="c3"
                                                                        style={{ width: "30%", marginRight: 8 }}
                                                                    />
                                                                </Form.Item>
                                                            </Form.Item>
                                                        );
                                                    })}
                                                    <Button
                                                        type="dashed"
                                                        onClick={() => {
                                                            add();
                                                        }}
                                                        style={{ width: "60%" }}
                                                    >
                                                        Add field
                                                    </Button>
                                                </div>
                                            );
                                        }}
                                    </Form.List>
                                    {fields.length > 1 ? (
                                        <a
                                            className="dynamic-delete-button"
                                            onClick={() => {
                                                remove(field.name);
                                            }}
                                        >
                                            增加
                                        </a>
                                    ) : null}
                                </Form.Item>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => {
                                        add();
                                    }}
                                    style={{ width: "60%" }}
                                >
                                    Add field
                                </Button>
                            </Form.Item>
                        </div>
                    );
                }}
            </Form.List>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}
