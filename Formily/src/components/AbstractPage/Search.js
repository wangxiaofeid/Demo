import React, { PureComponent } from "react";
import { Form, Select, Input, Checkbox, Radio, Button } from "antd";
import { isArray, toArray, get } from "lodash";

const FormItem = Form.Item;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;

const formMap = {
    Input,
    Select,
    CheckboxGroup,
    RadioGroup,
    Checkbox,
    Radio,
};

@Form.create()
export default class Search extends PureComponent {
    render() {
        const { search } = this.props.store;
        if (!search) {
            return null;
        }

        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                {search.map(({ key, title, rules = [], ...other }) => (
                    <FormItem label={title} key={key}>
                        {getFieldDecorator(key, {
                            rules,
                        })(this.getInput(other))}
                    </FormItem>
                ))}
                <FormItem>
                    <Button type="primary" htmlType="submit">
                        搜索
                    </Button>
                </FormItem>
            </Form>
        );
    }

    getInput = ({ enums = [], type }) => {
        const Comp = formMap[type] || formMap.Input;
        let children = null;
        const enumsList = isArray(enums) ? enums : toArray(get(this.props.store, enums, []));
        let OptionComp = null;

        switch (type) {
            case "Select":
                OptionComp = Option;
                break;
            case "CheckboxGroup":
                OptionComp = Checkbox;
                break;
            case "RadioGroup":
                OptionComp = Radio;
                break;
        }

        if (OptionComp) {
            children = enumsList.map(({ label, value }) => (
                <OptionComp key={value} value={value}>
                    {label}
                </OptionComp>
            ));
        }
        return <Comp className="w_180">{children}</Comp>;
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.submit(values);
            }
        });
    };
}
